import { Flex, Text } from "@mantine/core";
import React, { FC, Fragment } from "react";
import { useComponentsStyles } from "./styles";

interface Props {
  cards: {
    Icon: any;
    title: string;
    desc: string;
  }[];
}
export const HeroCards: FC<Props> = ({ cards }) => {
  const { classes } = useComponentsStyles();

  return (
    <>
      <Flex className={classes.heroCardsConatiner}>
        {cards.map(({ title, Icon, desc }, key) => {
          return (
            <Fragment key={`cards_home_keys${key}`}>
              <Flex className={classes.CardsConatiner}>
                <Icon width={56} />
                <Text className={classes.titleCards}>{title}</Text>
                <Text className={classes.descCards}>{desc}</Text>
              </Flex>
            </Fragment>
          );
        })}
      </Flex>
    </>
  );
};
