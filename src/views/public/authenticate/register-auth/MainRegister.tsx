import TextField from "@/components/text-field/TextField";
import UploadFile from "@/components/upload-file/UploadFile";
import ValidateCitizen from "@/helpers/CheckCitizenFormat";
import { Formik, Form } from "formik";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export interface IRegisterForm {
  username: string;
  fullNameTh: string;
  fullNameEn: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
  telephone: string;
  citizenId: string;
  profile: IFiles;
}

export interface IFiles {
  file: File | null;
  fileName: string;
}

export default function MainRegister() {
  const navigate = useNavigate();
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [checkCitizen, setCheckCitizen] = useState<string>("");

  async function submitLogin(values: IRegisterForm) {
    const data = JSON.stringify(values);
    const token = btoa(encodeURIComponent(data));
    localStorage.setItem("token", token);
    navigate('/');
  };

  const validate = Yup.object({
    username: Yup.string().required("กรุณากรอกชื่อผู้ใช้งาน"),
    password: Yup.string().required("กรุณากรอกรหัสผ่าน"),
    confirmPassword: Yup.string().required("กรุณากรอกยยืนยันรหัสผ่าน"),
    fullNameTh: Yup.string().required("กรุณากรอกชื่อนามสกุล ภาษาไทย"),
    fullNameEn: Yup.string().required("กรุณากรอกชื่อนามสกุล ภาษาอังกฤษ"),
    email: Yup.string().required("กรุณากรอกอีเมล"),
    address: Yup.string().required("กรุณากรอกที่อยู่"),
    telephone: Yup.string().required("กรุณากรอกเบอร์มือถือ"),
    citizenId: Yup.string().required("กรุณากรอกหมายเลขบัตรประชาชน"),
  });

  return (
    <div className="card-main">
      <div className="container-title">
        <h1 className="font-medium">สมัครสมาชิก</h1>
      </div>
      <Formik
        enableReinitialize
        validationSchema={validate}
        initialValues={{
          username: "",
          password: "",
          confirmPassword: "",
          fullNameTh: "",
          fullNameEn: "",
          email: "",
          address: "",
          telephone: "",
          citizenId: "",
          profile: {
            file: null,
            fileName: ""
          }
        }}
        onSubmit={(values: IRegisterForm) => submitLogin(values)}
      >
        {({ setFieldValue, values }) =>
          <Form>
            <div className="wrap-item-center">
              <div className="w-full md:w-6/12 lg:w-4/12 pad-main">
                <TextField
                  title="ชื่อผู้ใช้งาน"
                  name="username"
                  value={values.username}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue("username", e.target.value)}
                />
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 pad-main">
                <TextField
                  type="password"
                  title="รหัสผ่าน"
                  name="password"
                  value={values.password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue("password", e.target.value)}
                />
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 pad-main">
                <TextField
                  type="password"
                  title="ยืนยันรหัสผ่าน"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (values.password !== e.target.value && e.target.value !== "") {
                      setCheckPassword("รหัสผ่านไม่ตรงกัน");
                    } else {
                      setCheckPassword("");
                    }
                    setFieldValue("confirmPassword", e.target.value);
                  }}
                />
                <p className="text-red-500">{checkPassword}</p>
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 pad-main">
                <TextField
                  title="ชื่อ นามสกุล (ภาษาไทย)"
                  name="fullNameTh"
                  value={values.fullNameTh}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue("fullNameTh", e.target.value)}
                />
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 pad-main">
                <TextField
                  title="ชื่อ นามสกุล (ภาษาอังกฤษ)"
                  name="fullNameEn"
                  value={values.fullNameEn}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue("fullNameEn", e.target.value)}
                />
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 pad-main">
                <TextField
                  type="email"
                  title="อีเมล"
                  name="email"
                  value={values.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue("email", e.target.value)}
                />
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 pad-main">
                <TextField
                  title="ที่อยู่"
                  name="address"
                  value={values.address}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue("address", e.target.value)}
                />
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 pad-main">
                <TextField
                  type="tel"
                  title="เบอร์โทรติดต่อ"
                  name="telephone"
                  value={values.telephone}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue("telephone", e.target.value)}
                />
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 pad-main">
                <TextField
                  title="หมายเลขบัตรประชาชน"
                  name="citizenId"
                  value={values.citizenId}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const input = e.target.value;
                    if (input.length <= 13) {
                      setFieldValue("citizenId", input);
                      if (input.length === 13) {
                        const isValid = ValidateCitizen(input);
                        setCheckCitizen(isValid ? "" : "หมายเลขบัตรประชาชนไม่ถูกต้อง");
                      } else {
                        setCheckCitizen("");
                      }
                    }
                  }}
                />
                <p className="text-red-500">{checkCitizen}</p>
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 pad-main">
                <UploadFile
                  setFieldValue={setFieldValue}
                  clearImage={!values.profile.file}
                  onFileChange={(file: File | null) => {
                    setFieldValue("profile.file", file);
                    setFieldValue("profile.fileName", file?.name);
                  }}
                />
              </div>

              <div className="container-btn">
                <button type="submit">สมัครสมาชิก</button>
                <button type="reset" onClick={() => {
                  setFieldValue("profile.file", null);
                  setFieldValue("profile.fileName", "");
                }}
                >
                  ล้างค่า
                </button>
                <Link to="/login" className="w-full text-center">เข้าสู่ระบบ</Link>
              </div>
            </div>
          </Form>
        }
      </Formik>
    </div>
  );
}
