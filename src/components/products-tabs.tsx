import React, { useState } from "react";
import { Container, Divider, Flex, Tabs, Text, Grid } from "@mantine/core";
import { PRODUCTS } from "../constants/products";
export const ProductsTabs = () => {
  const [activeTab, setActiveTab] = useState<any>(PRODUCTS[0]);
  const content = PRODUCTS.map(
    ({ headline, Icon, categories, desc, title }, index) => {
      return (
        <Tabs.Panel key={`tabs_contanet_${index}`} value={title} pt={112}>
          <Text
            sx={{
              fontFamily: "Poppins",
              fontWeight: 800,
              fontSize: 36,
              color: "white",
              textAlign: "center",
              "@media (max-width: 768px)": {
                fontSize: 24,
              },
            }}
          >
            {headline}
          </Text>
          <Container size="md">
            <Text
              sx={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: 22,
                color: "white",
                letterSpacing: 0.2,
                textAlign: "center",
                marginTop: 12,
                "@media (max-width: 768px)": {
                  fontSize: 14,
                },
              }}
            >
              {desc}
            </Text>
          </Container>
          <Flex align="center" mt={30} justify="center" direction="column">
            <Icon width={250} />
            <Grid>
              {categories.map(({ Icon, desc }, key) => (
                <Grid.Col
                  key={`categoires${key}products`}
                  md={12}
                  lg={6}
                  mt={30}
                >
                  <Flex direction="row" align="center" justify="center">
                    <Flex
                      align="center"
                      justify="center"
                      sx={{
                        width: 67,
                        height: 67,
                        backgroundColor: "#9E98AE",
                        borderRadius: 8,
                      }}
                    >
                      <Icon />
                    </Flex>

                    <Text
                      sx={{
                        fontSize: 16,
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        color: "white",
                        marginLeft: 24,
                        maxWidth: 250,
                        "@media (max-width: 768px)": {
                          fontSize: 14,
                          maxWidth: 150,
                        },
                      }}
                    >
                      {desc}
                    </Text>
                  </Flex>
                </Grid.Col>
              ))}
            </Grid>
          </Flex>
        </Tabs.Panel>
      );
    }
  );

  return (
    <Tabs
      color="gray"
      value={activeTab.title}
      onTabChange={(prod) => setActiveTab(prod)}
    >
      <Tabs.List position="center">
        {PRODUCTS.map((prod, key) => {
          return (
            <Tabs.Tab
              styles={{}}
              key={`tabs_products_${prod.title}_${key}`}
              value={prod.title}
              sx={{
                color: "white",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: 14,
                ":active": {
                  color: "white",
                  borderColor: "#000",
                },
                ":hover": {
                  backgroundColor: "transparent",
                  color: "white",
                  borderColor: "#716E8C",
                },
              }}
            >
              <Text
                sx={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  borderColor: "#716E8C",
                  ":active": {
                    color: "white",
                    borderColor: "#716E8C",
                  },
                  fontSize: 14,
                }}
              >
                {prod.title}
              </Text>
            </Tabs.Tab>
          );
        })}
      </Tabs.List>
      <Divider color="white" opacity={0.2} />
      {content}
    </Tabs>
  );
};
