import TextField from "@/components/text-field/TextField";
import { Formik, Form } from "formik";
import { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export interface ILoginForm {
  email: string;
  password: string;
}

export default function MainLogin() {
  const navigate = useNavigate();

  async function submitLogin(values: ILoginForm) {
    const data = JSON.stringify(values);
    const token = btoa(encodeURIComponent(data));
    localStorage.setItem("token", token);
    navigate('/');
  };

  const validate = Yup.object({
    email: Yup.string().required("กรุณากรอกอีเมล หรือเบอร์มือถือ"),
    password: Yup.string().required("กรุณากรอกรหัสผ่าน")
  });

  return (
    <div className="card-main">
      <div className="container-title">
        <h1 className="font-medium">เข้าสู่ระบบ</h1>
      </div>
      <Formik
        enableReinitialize
        validationSchema={validate}
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={(values: ILoginForm) => submitLogin(values)}
      >
        {({ setFieldValue, values }) =>
          <Form>
            <div className="wrap-item-center">
              <div className="w-full md:w-6/12 lg:w-4/12 pad-main">
                <TextField
                  title="อีเมล หรือ เบอร์โทรศัพท์"
                  name="email"
                  value={values.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue("email", e.target.value)}
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
              <div className="container-btn">
                <button type="submit">เข้าสู่ระบบ</button>
                <button type="reset">ล้างค่า</button>
                <Link to="/register" className="w-full text-center">ลงทะเบียน</Link>
              </div>
            </div>
          </Form>
        }
      </Formik>
    </div>
  );
}
