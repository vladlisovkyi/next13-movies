import React, { useState } from "react";
import { AiOutlineStar, AiFillFire } from "react-icons/ai";
import { MdOutlineUpcoming } from "react-icons/md";
import MenuListItem from "./MenuListItem";
const MenuList = () => {
  const [isActive, setIsActive] = useState<number>(0);
  return (
    <ul className="w-full">
      <MenuListItem
        id={0}
        title="Popular"
        isActive={isActive}
        link="popular"
        icon={<AiOutlineStar size={22} />}
        setIsActive={setIsActive}
        key={0}
      />
      <MenuListItem
        id={1}
        title="Top Rated"
        isActive={isActive}
        link="top_rated"
        icon={<AiFillFire size={22} />}
        setIsActive={setIsActive}
        key={1}
      />
      <MenuListItem
        id={2}
        title="Upcoming"
        isActive={isActive}
        link="upcoming"
        icon={<MdOutlineUpcoming size={22} />}
        setIsActive={setIsActive}
        key={2}
      />
    </ul>
  );
};

export default MenuList;
