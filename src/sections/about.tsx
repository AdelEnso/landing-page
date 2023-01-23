import { Flex, Text, Box } from "@mantine/core";
import styles from "./section.module.css";
import Image from "next/image";
import React from "react";
import { useSectionsStyles } from "./styles";

export const AboutSection = () => {
  const { classes } = useSectionsStyles();
  return (
    <section style={{ marginTop: 63 }}>
      <Flex className={classes.aboutContainer}>
        <Flex direction="column">
          <Text className={styles.text}>Our mission</Text>
          <Text
            sx={{
              color: "white",
              fontFamily: "Poppins",
              fontSize: 20,
              "@media (max-width: 768px)": {
                fontSize: 14,
              },
            }}
            mt={16}
          >
            Our mission is to challenge real-world problems with robust digital
            solutions that are impervious to the threats and constraints imposed
            by modern technologies, underpinned by the support of exceptional,
            best-in-class research and development expertise.
          </Text>
          <Text mt={56} className={styles.text}>
            Our solution
          </Text>
          <Text
            sx={{
              color: "white",
              fontFamily: "Poppins",
              fontSize: 20,
              "@media (max-width: 768px)": {
                fontSize: 14,
              },
            }}
            mt={16}
          >
            Our solutions aim to deliver robust agnostic features that support
            measurable performance improvements across enhanced data entropy,
            security and compression ratios.
          </Text>
        </Flex>

        <Box className={classes.ImageIconLg}>
          <Image
            width={423}
            height={350}
            style={{ borderRadius: 4 }}
            src="/goals.jpg"
            alt={"About"}
          />
        </Box>
      </Flex>
    </section>
  );
};
