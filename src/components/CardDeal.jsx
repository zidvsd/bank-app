import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
const CardDeal = () => {
  return (
    <div>
      <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Find a better card deal <br className="sm:block hidden" />
            in few easy steps.{" "}
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <Button styles="mt-10" />
        </div>
        <div className={layout.sectionImg}>
          <h1>Hi</h1>
          <img src={card} className="w-[100%] h-[100%] object-contain" alt="" />
        </div>
      </section>
    </div>
  );
};

export default CardDeal;
