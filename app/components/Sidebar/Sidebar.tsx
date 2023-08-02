"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MenuList from "../MenuList/MenuList";
import { BiRightArrow } from "react-icons/bi";
import { useMediaQuery } from "usehooks-ts";
const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(true);
  const matches = useMediaQuery("(min-width: 768px)");
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (matches) setOpen(true);
  }, [matches]);

  return (
    <>
      <aside
        className={`py-10  flex flex-col  sticky top-0 h-screen ${
          open
            ? "md:flex-[240px] translate-x-0"
            : "flex-[0px] w-0 -translate-x-48"
        } transition-all duration-150`}
      >
        <Link
          href={"/"}
          className="text-2xl flex gap-2 items-center justify-center"
        >
          <Image
            src={"/assets/images/logo.png"}
            alt="logo"
            width={40}
            height={40}
            className="mb-6 "
          />
        </Link>
        <MenuList />
      </aside>
      <button
        className={`fixed w-12 h-12  rounded-full text-turq flex md:hidden justify-center items-center top-[50%] -left-2 ${
          open && "translate-x-[150%]"
        } z-[60] transition-all duration-150`}
        onClick={handleClick}
      >
        <BiRightArrow size={28} />
      </button>
    </>
  );
};

export default Sidebar;
