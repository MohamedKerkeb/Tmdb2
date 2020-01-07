import React from "react";

import Classes from "./Menu.module.css";
import Logo from "../../elements/Logo/Logo";
import Footer from "../Footer/Footer";
import Title from "../../elements/Title/Title";

const Menu = () => {
  return (
    <div className={Classes.MenuWrapper}>
      <div>
        <Logo />
      </div>
      <div>
        <Title title='TV Show'/>
        <Title title='Movie' />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Menu;
