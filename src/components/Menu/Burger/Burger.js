import React from "react";

import Classes from "./Burger.module.css";

const Burger = ({ open, setOpen }) => {
  console.log(open, setOpen);
  return (
    <div
      className={Classes.BurgerWrapper}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </div>
  );
};

export default Burger;
