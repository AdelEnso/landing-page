import { Textarea, TextInput } from "@mantine/core";
import React from "react";

export const ConatctForm = () => {
  return (
    <>
      <TextInput
        label="Name"
        required
        placeholder="Enter your name"
        styles={(theme) => ({
          label: {
            color: "#fff",
            fontFamily: "Poppins",
            fontWeight: 500,
          },
          input: {
            border: 10,
            color: "#7F7E83",
            "&:hover": {
              border: "1px solid #808080",
            },
            ":active": {
              border: "1px solid #808080",
            },
            ":focus": {
              border: "1px solid #808080",
            },
          },
        })}
      />
      <TextInput
        label="Email"
        required
        placeholder="Enter your email"
        mt="md"
        styles={(theme) => ({
          label: {
            color: "#fff",
            fontFamily: "Poppins",
            fontWeight: 500,
          },
          input: {
            border: 10,

            color: "#7F7E83",
            "&:hover": {
              border: "1px solid #808080",
            },
            ":active": {
              border: "1px solid #808080",
            },
            ":focus": {
              border: "1px solid #808080",
            },
          },
        })}
      />
      <Textarea
        mt="md"
        label="Your message"
        required
        placeholder="Please include all relevant information"
        minRows={3}
        styles={(theme) => ({
          label: {
            color: "#fff",
            fontFamily: "Poppins",
            fontWeight: 500,
          },

          input: {
            border: 10,
            color: "#7F7E83",
            fontFamily: "Poppins",
            fontWeight: 500,
            "&:hover": {
              border: "1px solid #808080",
            },
          },
        })}
      />
    </>
  );
};
