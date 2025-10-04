
import React from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Button from "../components/Button";
import Footer from "../components/Footer";

const Signin = () => {
  return (
    <div className="w-full min-h-screen bg-gray-950 bg-center bg-cover bg-fixed flex justify-center items-center px-4 sm:px-6">
      <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 shadow-2xl border border-purple-500 bg-gray-950 grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden">
        
     
        <div className="flex flex-col px-6 sm:px-10 py-8 gap-4">
          <Heading
            heading={"Signin Page"}
            subHeading={
              "Signin to access all the services and benefits of our platform"
            }
          />
          <Input
            label={"Enter email"}
            type={"email"}
            placeholder={"alice@gmail.com"}
          />
          <Input
            label={"Enter password"}
            type={"password"}
            placeholder={"sam123@123"}
          />
          <Button to="/" name={"Signin"} />
          <Footer
            main={"Don't have an account?"}
            to={"/signup"}
            name={"Signup"}
          />
        </div>

        <div className="hidden lg:block bg-[url('/signin.jpg')] bg-center bg-cover">
          <div className="w-full h-full bg-gray-900/50"></div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
