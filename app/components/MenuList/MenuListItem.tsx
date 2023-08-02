import Link from "next/link";
import React from "react";
interface IProps {
  setIsActive: React.Dispatch<React.SetStateAction<number>>;
  isActive: number;
  link: string;
  icon: React.ReactNode;
  id: number;
  title: string;
}

const MenuListItem = ({
  setIsActive,
  isActive,
  link,
  icon,
  id,
  title,
}: IProps) => {
  return (
    <li
      onClick={() => setIsActive(id)}
      className={` ${
        isActive === id ? "bg-turq text-gray-600" : "text-gray-400 "
      } transition-all duration-200`}
    >
      <Link
        href={`/movies?type=${link}&page=1`}
        className="px-3 py-6 flex gap-2 items-center justify-center md:justify-start font-medium"
      >
        {icon}
        <span className="hidden md:flex"> {title}</span>
      </Link>
    </li>
  );
};

export default MenuListItem;
