import { Flex, List, Text } from "@mantine/core";
import React, { Fragment, useState } from "react";
import { INDUSTRIES } from "../constants/industries";
import { useComponentsStyles } from "./styles";

export const IndustriesComponent = () => {
  const { classes, cx } = useComponentsStyles();
  const [active, updateActive] = useState(INDUSTRIES[0]);
  return (
    <Flex className={classes.productContiner} mt={44}>
      <Flex direction="column" w={"100%"}>
        {INDUSTRIES.map((indus, key) => {
          return (
            <Flex
              onClick={() => updateActive(indus)}
              className={cx(classes.productCard, {
                [classes.productCardActive]: active.title === indus.title,
              })}
              key={`indus_keys_{$${key}}`}
            >
              <Text
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: 16,
                }}
                color="white"
                ta="center"
              >
                {indus.title}
              </Text>
            </Flex>
          );
        })}
      </Flex>
      <Flex
        direction="column"
        sx={{
          marginLeft: 40,
          "@media (max-width: 768px)": {
            marginLeft: 0,
          },
        }}
      >
        <Text
          sx={{
            color: "white",
            fontFamily: "Poppins",
            fontWeight: 800,
            fontSize: 28,

            "@media (max-width: 768px)": {
              fontSize: 18,
            },
          }}
          mb={12}
        >
          {active.headline}
        </Text>
        <Text
          sx={{
            color: "white",
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: 18,
            marginBottom: 44,
            "@media (max-width: 768px)": {
              fontSize: 14,
              marginBottom: 32,
            },
          }}
        >
          {active.desc}
        </Text>

        {active.content.map((item, key) => (
          <Fragment key={`ldjfl;sdjf${key}`}>
            <Text
              sx={{
                color: "white",
                fontFamily: "Poppins",
                fontWeight: 800,
                fontSize: 24,
                marginBottom: 32,
                marginTop: 32,
                "@media (max-width: 768px)": {
                  fontSize: 16,
                  marginBottom: 16,
                  marginTop: 32,
                },
              }}
            >
              {item.headline}
            </Text>
            <List spacing="md" size="sm" center icon={null}>
              {item.points.map((point, key) => (
                <List.Item
                  sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: 14,
                    letterSpacing: 1,
                    lineHeight: 2,
                    "@media (max-width: 768px)": {
                      fontSize: 12,
                      maxWidth: 250,
                    },
                  }}
                  key={`points_kyes${key}`}
                >
                  {point}
                </List.Item>
              ))}
            </List>
          </Fragment>
        ))}
      </Flex>
    </Flex>
  );
};
