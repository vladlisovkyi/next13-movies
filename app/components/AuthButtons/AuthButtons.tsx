"use client";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import SignInModal from "../SignInModal/SignInModal";
import { useSession } from "next-auth/react";
import Profile from "../Profile/Profile";
const AuthButtons = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <Profile user={session.user} />
      ) : (
        <>
          <button
            className="flex gap-2 items-center"
            onClick={() => setShowModal(true)}
          >
            <FaUserCircle size={28} />

            <span className="hidden md:flex">Sign In</span>
          </button>
          {showModal && (
            <SignInModal showModal={showModal} setShowModal={setShowModal} />
          )}
        </>
      )}
    </>
  );
};

export default AuthButtons;
