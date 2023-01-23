import React from "react";
import { Header, Container, Burger, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useComponentsStyles } from "./styles";
import { MenuLinks } from "./menu-links";
import { ResponsiveMenu } from "./menu-mobile";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const AppHeader = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes } = useComponentsStyles();
  const { pathname } = useRouter();
  return (
    <Header bg="transparent" zIndex={1} height={60} className={classes.header}>
      <Box
        sx={{
          display: "flex",
          justifyContent: pathname === "/" ? "flex-end" : "flex-end",
          marginRight: 20,
        }}
      >
        {/* {pathname !== "/" && (
          <Link href={"/"}>
            <Image
              alt="Logo"
              width={60}
              height={60}
              color="red"
              src={require("../assets/svgs/EnsoLab-black.png")}
            />
          </Link>
        )} */}

        <MenuLinks />

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          color="#fff"
        />
        <ResponsiveMenu open={opened} close={() => close()} />
      </Box>
    </Header>
  );
};
