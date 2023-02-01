import { HomeLayout } from "../layouts";
import React from "react";
import { Container } from "@mantine/core";
import { GetInTouch } from "../components";

export default function Contact() {
  return (
    <HomeLayout hasHeader={true} hasFooter={true}>
      <Container
        size={"md"}
        sx={{ display: "flex", marginTop: 120, flexDirection: "column" }}
      >
        <GetInTouch />
      </Container>
    </HomeLayout>
  );
}
