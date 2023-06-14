import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Body from "../typography/Body/Body";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer__Container}>
        <div className={styles.logo__Container}>
          <Image
            alt="Louby Lou Logo"
            width={1500}
            height={1500}
            className={styles.logo}
            src={"/images/logos/louby_lou_white.png"}
          ></Image>
        </div>

        <div className={styles.details__Container}>
          <Body text={["Details"]} />
          <Body text={["Mobile: 07779013806", "Email: lucy@loubylou.co.uk"]} />

          <Link href="https://app.enzuzo.com/policies/privacy/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDdXN0b21lcklEIjoxMTU3NiwiQ3VzdG9tZXJOYW1lIjoiY3VzdC11STFEVTE4cyIsIkN1c3RvbWVyTG9nb1VSTCI6IiIsIlJvbGVzIjpbInJlZmVycmFsIl0sIlByb2R1Y3QiOiJlbnRlcnByaXNlIiwiaXNzIjoiRW56dXpvIEluYy4iLCJuYmYiOjE2NTcwODI0OTZ9.XZ4BloXpVAugLAEm9pRDSDanFPK216zdzSBBBf1pnO4">
            <Body text={["Privacy"]} />
          </Link>

          <Link
            href={
              "https://app.enzuzo.com/policies/tos/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDdXN0b21lcklEIjoxMTU3NiwiQ3VzdG9tZXJOYW1lIjoiY3VzdC11STFEVTE4cyIsIkN1c3RvbWVyTG9nb1VSTCI6IiIsIlJvbGVzIjpbInJlZmVycmFsIl0sIlByb2R1Y3QiOiJlbnRlcnByaXNlIiwiaXNzIjoiRW56dXpvIEluYy4iLCJuYmYiOjE2NTcwODI5Mzh9.qi-TmCteHm9P8yG2UGwHHAZ3qZ2P0bWqtDOFI7DYbB4"
            }
          >
            <Body text={["Terms and Conditions"]} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
