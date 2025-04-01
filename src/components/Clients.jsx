import React from "react";
import styles from "../style";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full gap-x-4`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex justify-center items-center flex-grow w-[120px] md:w-[200px] lg:w-auto my-4"
          >
            <img
              src={client.logo}
              className="client-logo color-change object-contain w-full max-w-[200px]"
              alt={client.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
