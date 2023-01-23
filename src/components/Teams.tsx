import { Flex, Grid, Text } from "@mantine/core";
import React, { useState } from "react";
import { TEAMS } from "../constants/team";
import { useComponentsStyles } from "./styles";
import { TeamCard } from "./team-card";

export const Teams = () => {
  const { classes, cx } = useComponentsStyles();
  const [active, updateActive] = useState(TEAMS[0]);
  return (
    <Flex className={classes.productContiner} mt={44}>
      <Flex direction="column" w={"100%"}>
        {TEAMS.map((prod, key) => {
          return (
            <Flex
              onClick={() => updateActive(prod)}
              className={cx(classes.productCard, {
                [classes.productCardActive]:
                  active.department === prod.department,
              })}
              key={`products_keys_{$${key}}`}
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
                {prod.department}
              </Text>
            </Flex>
          );
        })}
      </Flex>
      <Flex direction="column">
        <Text className={classes.headlineProduct}>Our Team</Text>
        <Text className={classes.descProduct}>{active.desc}</Text>
        <Grid justify="space-around" align="center" mt={30}>
          {active.team.map((item, key) => {
            return (
              <Grid.Col
                key={`categoires${key}products_team`}
                xs={6}
                sm={6}
                md={6}
                lg={6}
              >
                <TeamCard
                  image={item.image}
                  name={item.name}
                  job={item.job}
                  desc={item.desc}
                />
              </Grid.Col>
            );
          })}
        </Grid>
      </Flex>
    </Flex>
  );
};
