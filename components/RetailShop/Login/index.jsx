import { useUser } from "@/context/UserContext";
import { Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const Login = (props) => {
  const [credential, setCredential] = useState({ email: "", password: "" });
  const { signInHandler } = useUser();

  const handleChage = (e) => {
    const { value, name } = e.target;
    setCredential((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    signInHandler(credential);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl">
        <div
          className="hidden lg:flex lg:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url(${props.image.src})`,
          }}
        >
          <div className="flex flex-col items-center justify-center bg-blue-900 bg-opacity-50 h-full w-full text-white p-8">
            <h2 className="text-4xl font-bold mb-4">{props.imageTextheader}</h2>
            <p className="text-lg">{props.imageHelpText}</p>
          </div>
        </div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
            {props.title}
          </h2>
          <form>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                {props.emailtext}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder={props.emailPlaceholder}
                onChange={handleChage}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                {props.passwordtext}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder={props.passwordPlaceholder}
                onChange={handleChage}
              />
            </div>
            <div className="flex items-center justify-between">
              <Button onClick={handleSubmit} variant="contained">
                {props.signInButton}
              </Button>
              <Link
                className="inline-block align-baseline font-bold text-sm text-[#1976d2] hover:underline"
                href="#"
              >
                {props.forgot}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
