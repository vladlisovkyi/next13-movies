import React from "react";
import AuthButtons from "../AuthButtons/AuthButtons";
import Search from "../Search/Search";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#191919] px-[2.5%] py-6 w-full flex justify-between items-center gap-5">
      <Search />
      <AuthButtons />
    </header>
  );
};

export default Header;
