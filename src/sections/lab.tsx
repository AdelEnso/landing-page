import { Box, Button, Container, Flex, Text, TextInput } from "@mantine/core";
import React from "react";
import styles from "./section.module.css";

import Image from "next/image";
import { useSectionsStyles } from "./styles";

export const LabsSection = () => {
  const { classes } = useSectionsStyles();
  return (
    <section style={{ marginTop: 150 }}>
      <Container size={"lg"} sx={{ display: "flex" }}>
        <Flex direction="column">
          <Text className={styles.text}>Academic Lab</Text>
          <Text className={classes.acadmicHead}>
            Ideas, challenges, and questions forever drive our collective
            future, beyond.
          </Text>
          <Flex className={classes.acadmicConatainer}>
            <div>
              <Text className={classes.descAcadmic}>
                BQ Technologies has a deep and global network of award-winning
                institutions and experts to grasp deep technical challenges with
                sensitivity and expertise.
              </Text>
              <Text mt={40} mb={40} className={classes.descAcadmic}>
                If you’re interested to receive news and updated abouts
                collaborations, recent developments and new research, please
                consider subscribing for our monthly updates.
              </Text>
            </div>

            <Button
              fullWidth
              sx={() => ({
                backgroundColor: "#4723B8",
                width: "100%",
                "@media (min-width: 545px)": {
                  display: "none",
                },
                "@media (max-width: 768px)": {
                  marginBottom: 24,
                },
              })}
            >
              Subscribe
            </Button>

            <Image
              className={classes.ImageIconLg}
              width={423}
              height={350}
              src="/lab.jpg"
              alt={"lab Image"}
            />
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};
