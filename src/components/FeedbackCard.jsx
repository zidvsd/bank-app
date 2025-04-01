import React from "react";
import { quotes } from "../assets";
const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-md max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-poppins leading-[32px] text-secondary my-10 font-normal">
        {content}Z
      </p>
      <div className="flex flex-row">
        <img src={img} alt="name" className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4 ">
          <h4 className="font-poppins leading-[32px] text-xl text-secondary font-semibold ">
            {name}
          </h4>
          <p className="font-poppins leading-[24px] text-dimWhite font-normal">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
