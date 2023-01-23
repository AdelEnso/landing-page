import { Container, Flex, Text } from "@mantine/core";
import React from "react";
import styles from "./section.module.css";
import { Products } from "../components";
import { PRODUCTS } from "../constants/products";
import { useSectionsStyles } from "./styles";

export const ProductsSection = () => {
  const { classes } = useSectionsStyles();
  return (
    <section className={classes.productSection}>
      <Container size={"lg"}>
        <Flex direction="column">
          <Text className={styles.text}>BQ Products</Text>
          <Products products={PRODUCTS} />
        </Flex>
      </Container>
    </section>
  );
};
