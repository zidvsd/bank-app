import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex lg:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center px-4 py-[6px] bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="size-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 text-secondary font-poppins font-semibold xs:leading=[100px] leading-[75px] xs:text-[72px] text-[52px]">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="xs:flex hidden md:mr-4 mr-0 ">
            <GetStarted />
          </div>
        </div>

        <h1 className="text-secondary font-poppins font-semibold xs:leading-[100px] leading-[75px] xs:text-[68px] text-[52px] w-full">
          Payment Method
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] text-secondary mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="flex-1 relative mt-6 md:mt-0">
        <img
          src={robot}
          alt=""
          className="size-[100%] object-cover overflow-visible relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className={`md:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
