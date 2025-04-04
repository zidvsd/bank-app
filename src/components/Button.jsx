import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient rounded-[10px] cursor-pointer font-poppins font-medium text-primary outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
