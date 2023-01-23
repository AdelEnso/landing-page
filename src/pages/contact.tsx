import { HomeLayout } from "../layouts";
import React from "react";
import { Container, Flex } from "@mantine/core";
import { GlobalIcon } from "../assets/svgs";
import { GetInTouch } from "../components";

export default function Contact() {
  return (
    <HomeLayout hasHeader={true} hasFooter={true}>
      <Container
        size={"md"}
        sx={{ display: "flex", marginTop: 120, flexDirection: "column" }}
      >
        {/* <IndustriesComponent /> */}
        <Flex
          sx={{ position: "absolute", bottom: 0, top: 0, right: 0, left: 0 }}
        >
          <GlobalIcon width={undefined} />
        </Flex>
        <GetInTouch />
      </Container>
    </HomeLayout>
  );
}
