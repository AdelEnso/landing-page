import { Group } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { LINKS } from "../constants/links";
import { useComponentsStyles } from "./styles";

export const MenuLinks = () => {
  const router = useRouter();
  const { classes, cx } = useComponentsStyles();
  return (
    <Group spacing={10} className={classes.links}>
      {LINKS.map((link, key) => {
        return (
          <Link
            className={cx(classes.link, {
              [classes.linkActive]: router.pathname === link.route,
            })}
            key={`links_mobile_keys${key}`}
            href={link.route}
          >
            {link.name}
          </Link>
        );
      })}
    </Group>
  );
};
