import { Box } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Url } from "url";
import styles from "./team-card.module.css";

interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}
interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;
interface Props {
  image: string | StaticImport;
  name: string;
  job: string;
  desc: string;
}
export const TeamCard: FC<Props> = ({ image, name, job, desc }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})`, backgroundPosition: "center" }}
    >
      <div className={styles.overlay}>
        <div className={styles.price}>
          <p>{desc}</p>
        </div>
      </div>
      <Box className={styles.x}>
        <p>{name}</p>
        <p>{job}</p>
      </Box>
    </div>
  );
};
