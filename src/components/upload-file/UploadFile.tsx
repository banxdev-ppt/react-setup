import { ChangeEvent, useEffect, useRef, useState } from "react";

export interface UploadFileProps {
  clearImage: boolean;
  onFileChange: (file: File | null) => void;
  setFieldValue: (field: string, value: unknown) => void;
}

export default function UploadFile({ onFileChange, clearImage }: UploadFileProps) {
  const [imgSource, setImgSource] = useState<string | null>(null);
  const [imgFilename, setImgFilename] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (clearImage) {
      setImgSource(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }, [clearImage]);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      onFileChange(file);
      setImgSource(URL.createObjectURL(file));
      setImgFilename(file.name);
    } else {
      onFileChange(null);
      setImgSource(null);
    }
  }

  return (
    <div className="input-group">
      <div className="flex justify-center items-center" onClick={() => fileInputRef.current && fileInputRef.current.click()}>
        {imgSource ? <img src={imgSource} alt="Profile Image" className="preview-img" /> :
          <div className="upload-area">
            <i className="fa-solid fa-image"></i>
            <span className="py-3">เพิ่มรูปภาพ</span>
          </div>}
      </div>
      <input accept=".jpg, .png, .jpeg, .pdf" type="file" name="profile" id="profile" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
      {imgSource &&
        <div className="container-btn mt-3 flex flex-col">
          <p className="py-2">ชื่อไฟล์: {imgFilename}</p>
          <button type="button" onClick={() => fileInputRef.current && fileInputRef.current.click()} className="px-3 py-2 bg-gray-300 rounded-md">
            เปลี่ยนรูปภาพ
          </button>
        </div>
      }
    </div>
  );
}
