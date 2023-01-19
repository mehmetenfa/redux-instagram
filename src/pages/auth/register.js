import { useRef, useEffect, useState } from "react";
import Input from "../../components/input";
import Button from "../../components/Button";
import Separator from "components/Separator";
import { AiFillFacebook } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "firebase.js";
import { Formik, Form } from "formik";
import { LoginSchema } from "validation";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values, actions) => {
    const response = await login(values.username, values.password);
    if (response) {
      navigate(location.state?.return_url || "/", {
        replace: true,
      });
    }
  };

  return (
    <div className="w-[350px] grid gap-y-3">
      <div className="bg-white border px-[40px] pt-10 pb-6">
        <a href="#" className="flex justify-center mb-8">
          <img
            className="h-[51px]"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
            alt=""
          />
        </a>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid, dirty, values }) => (
            <Form className="grid gap-y-1.5">
              <Input name="username" label="Phone Number, username or email" />
              <Input type="password" name="password" label="Password" />
              <Button
                type="submit"
                disabled={!isValid || !dirty || isSubmitting}
              >
                Log In
              </Button>
              <Separator />
              <a
                href="#"
                className="flex justify-center mb-2.5 items-center gap-x-2 text-sm font-semibold text-facebook"
              >
                <AiFillFacebook size={20} />
                Log in with Facebook
              </a>
              <a
                href="#"
                className="text-xs flex items-center justify-center text-link"
              >
                Forgot password?
              </a>
            </Form>
          )}
        </Formik>
      </div>

      <div className="bg-white border p-4 text-sm text-center">
        Don't have an account?{" "}
        <a href="#" className="font-semibold text-brand">
          Sign up
        </a>
      </div>
    </div>
  );
}
