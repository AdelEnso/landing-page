import { Box, Button, Flex, Text } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons";
import React, { FC, useState } from "react";
import { PRODUCTS } from "../constants/products";
import { useComponentsStyles } from "./styles";

interface Props {
  products: {
    title: string;
    headline: string;
    desc: string;
    Icon: any;
    categories: any[];
  }[];
}

export const Products: FC<Props> = ({ products }) => {
  const { classes, cx } = useComponentsStyles();
  const [active, updateActive] = useState(PRODUCTS[0]);
  const { Icon } = active;
  return (
    <>
      <Flex className={classes.productContiner}>
        <Flex
          direction="column"
          sx={{
            "@media (max-width: 992px)": {
              width: "100%",
            },
          }}
        >
          {products.map((prod, key) => {
            return (
              <Flex
                onClick={() => updateActive(prod)}
                className={cx(classes.productCard, {
                  [classes.productCardActive]: active.title === prod.title,
                })}
                key={`products_keys_{$${key}}`}
              >
                <Text
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                  color="white"
                  ta="center"
                >
                  {prod.title}
                </Text>
              </Flex>
            );
          })}
        </Flex>
        <Flex direction="column" w="100%">
          <Text className={classes.headlineProduct}>{active.headline}</Text>
          <Text className={classes.descProduct}>{active.desc}</Text>
          <Box className={classes.productIconMd}>
            <Icon width={undefined} />
          </Box>
          <Box className={classes.productIconlg}>
            <Icon width={400} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
