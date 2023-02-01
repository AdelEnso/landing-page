import { Flex } from "@mantine/core";
import { FC, PropsWithChildren } from "react";
import { AppHeader } from "../components";

interface Props {
  hasHeader: boolean;
  hasFooter: boolean;
}

export const HomeLayout: FC<PropsWithChildren<Props>> = ({
  hasFooter,
  hasHeader = true,
  children,
  ...props
}) => {
  return (
    <Flex
      sx={{
        // overflowX: "hidden",
        position: "relative",

        flexDirection: "column",
        minHeight: "100vh",
      }}
      {...props}
    >
      {hasHeader && <AppHeader />}
      <main>{children}</main>
    </Flex>
  );
};
