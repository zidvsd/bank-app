import React from "react";
import styles from "../style";
import { clients } from "../constants";
const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      {/* <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter}  sm:min-w-[120px]`}
          >
            <img
              src={client.logo}
              className="object-contain sm:w-[192px] w-[100px] "
              alt=""
            />
          </div>
        ))}
      </div> */}
    </section>
  );
};
export default Clients;
