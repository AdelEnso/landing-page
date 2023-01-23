import { Flex, Text } from "@mantine/core";
import React from "react";

export const ConatctInfo = () => {
  return (
    <Flex direction="column">
      <Text
        sx={{
          fontWeight: 500,
          fontFamily: "Poppins",
          color: "white",
        }}
      >
        CONTACT US
      </Text>
      <Text
        mt={24}
        sx={{
          fontFamily: "Poppins",
          fontWeight: 800,
          fontSize: 28,
          color: "white",
          "@media (max-width: 768px)": {
            fontSize: 16,
          },
        }}
      >
        Collaborators are those who support the discovery
      </Text>
      <Text
        sx={{
          fontFamily: "Poppins",
          fontWeight: 500,
          fontSize: 14,
          color: "white",
          marginTop: 32,
          "@media (max-width: 768px)": {
            fontSize: 12,
            marginTop: 18,
          },
        }}
      >
        If you’re interested to receive news and updated abouts collaborations,
        recent developments and new research, please consider subscribing for
        our news updates.
      </Text>
    </Flex>
  );
};
