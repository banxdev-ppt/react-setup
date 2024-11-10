import { ChangeEvent, useState } from "react";

interface ITextField {
  title: string;
  groupClass?: string;
  inputClass?: string;
  type?: string;
  name: string;
  id?: string;
  placeHolder?: string;
  value: string;
  onChange?: (val: ChangeEvent<HTMLInputElement>) => void;
  onChangeTel?: (val: string) => void;
  required?: boolean;
  maxLength?: number;
  pattern?: string;
}

export default function TextField({ groupClass, title, inputClass, type = "text", name, id = name, placeHolder, value, onChange, onChangeTel, required = true, maxLength, pattern }: ITextField) {
  const [formattedValue, setFormattedValue] = useState(value);

  function formatPhoneNumber(input: string) {
    const cleanedInput = input.replace(/\D/g, "");

    let formatted = "";
    for (let i = 0; i < cleanedInput.length; i++) {
      if (i === 3 || i === 6) {
        formatted += " ";
      }
      formatted += cleanedInput[i];
    }
    return formatted;
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    const formattedInput = formatPhoneNumber(inputValue);
    setFormattedValue(formattedInput);

    if (type === "tel" && onChangeTel) {
      onChangeTel(inputValue);
    } else if (onChange) {
      onChange(e);
    }
  }

  return (
    <div className={`input-group ${groupClass}`}>
      <label htmlFor={title} className="w-full">{title}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeHolder}
        value={type == "tel" ? formattedValue : value}
        onChange={type === "tel" ? handleInputChange : onChange}
        required={required}
        className={inputClass}
        maxLength={maxLength}
        pattern={pattern}
      />
    </div>
  );
}
