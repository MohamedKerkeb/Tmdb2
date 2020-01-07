import React from "react";

import Classes from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <div className={Classes.HeaderWrapper}>
      <SearchBar />
    </div>
  );
};

export default Header;
