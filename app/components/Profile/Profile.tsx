"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { signOut } from "next-auth/react";
import { BiLogOut } from "react-icons/bi";

interface IProps {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}
const Profile = ({ user }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="w-12 h-12 bg-gray-800 overflow-hidden">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <Image
            src={user?.image || "/assets/images/user.png"}
            width={48}
            height={48}
            alt="user"
            className="rounded-full"
          />
        </button>
      </div>
      {isOpen && (
        <button
          className="absolute top-24 right-6 px-8 py-3 flex gap-2 items-center bg-bkg border border-gray-900 rounded-lg"
          onClick={() => signOut()}
        >
          <BiLogOut size={28} />
          Sign Out
        </button>
      )}
    </>
  );
};

export default Profile;
