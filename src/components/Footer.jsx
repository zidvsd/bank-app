import React from "react";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";

const Footer = () => {
  return (
    <section className={`flex flex-center ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="Hoobank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={` ${styles.paragraph} text-[16px] mt-6a max-w-[310px]`}>
            A new way to make the payments easy, reliable, and secure.
          </p>
        </div>
        <div className="flex-[1.5] text-white w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink, index) => (
            <div
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              key={footerLink.key || `footerLink-${index}`} // Ensure unique key for each footerLink
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px]">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, linkIndex) => (
                  <li
                    className={`font-poppins font-normal leading-[24px] text-dimWhite transition duration-200 ease-in-out hover:text-white cursor-pointer ${
                      linkIndex === link.length - 1 ? "mt-0" : "mt-4"
                    }`}
                    key={link.name || `link-${linkIndex}`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins text-[#3F3E45] font-normal text-center text-[18px] leading-[27px] ">
          Copyright &copy; 2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row itemsx-center justify-center md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`size-[21px] object-contain cursor-pointer hover:opacity-50 transition duration-200 ease-in-out ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              } `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
