import { Modal, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { LINKS } from "../constants/links";
import { useComponentsStyles } from "./styles";

interface Props {
  open: boolean;
  close: () => void;
}
export const ResponsiveMenu: FC<Props> = ({ open, close }) => {
  const router = useRouter();
  const { classes, cx } = useComponentsStyles();
  const theme = useMantineTheme();
  return (
    <Modal
      opened={open}
      transition="fade"
      styles={(theme) => ({
        modal: {
          backgroundColor: "#9E98AE",
        },
      })}
      transitionDuration={600}
      transitionTimingFunction="ease"
      onClose={close}
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.red[2]
      }
      overlayOpacity={0.1}
      overlayBlur={3}
    >
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
    </Modal>
  );
};
