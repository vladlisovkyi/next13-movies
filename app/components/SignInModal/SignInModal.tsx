"use client";

import React, { Dispatch, SetStateAction } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

interface IProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const SignInModal: React.FC<IProps> = ({ showModal, setShowModal }) => {
  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[90%] sm:w-96 rounded-2xl px-6 py-8 z-40 bg-bkg">
        <h3 className="text-center text-2xl mb-8">Log In</h3>
        <button
          onClick={() => signIn("google")}
          className="mt-3 px-3 py-3 flex justify-center text-black items-center w-full  bg-white border border-gray-300 rounded-xl"
        >
          <FcGoogle size={28} className="mr-3" />
          Sign In With Google
        </button>
        <button
          onClick={() => signIn("github")}
          className="mt-3 px-3 py-3 w-full flex justify-center items-center text-white bg-gray-950 border border-gray-400 rounded-xl"
        >
          <FaGithub size={28} className="mr-3" />
          Sign In With Github
        </button>
      </div>
      <div
        className={`fixed left-0 top-0 w-screen min-h-screen z-30 bg-black  ${
          showModal ? "opacity-80" : "opacity-0"
        } transition-opacity duration-200`}
        onClick={() => setShowModal(false)}
      ></div>
    </>
  );
};

export default SignInModal;
