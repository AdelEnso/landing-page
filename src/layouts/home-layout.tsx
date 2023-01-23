import { Box, Container, Flex } from "@mantine/core";
import { FC, PropsWithChildren } from "react";
import { AppHeader, Footer } from "../components";

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
      {/* {hasFooter ? (
        <Footer
          data={[
            {
              title: "Explore",
              links: [
                {
                  label: "About Us",
                  link: "/about",
                },
                {
                  label: "For Companies",
                  link: "/companies",
                },
                {
                  label: "Contact",
                  link: "/contact",
                },
                {
                  label: "FAQ",
                  link: "/faq",
                },
              ],
            },
            {
              title: "Resources",
              links: [
                {
                  label: "Meet The Team",
                  link: "/team",
                },
                {
                  label: "Terms of Service",
                  link: "/terms",
                },
                {
                  label: "Privacy Policy",
                  link: "/privacy",
                },
              ],
            },
            {
              title: "Help",
              links: [
                {
                  label: "Need Help?",
                  link: "/help",
                },
              ],
            },
          ]}
        />
      ) : null} */}
    </Flex>
  );
};
