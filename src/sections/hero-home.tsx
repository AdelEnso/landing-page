import { Flex, Box, Image, MediaQuery } from "@mantine/core";
// import Image from "next/image";
import { useSectionsStyles } from "./styles";
import Typed from "react-typed";

export const HeroSection = () => {
  const { classes } = useSectionsStyles();

  return (
    <section className={classes.heroWrapper}>
      <MediaQuery query="(max-width: 1400px)" styles={{ display: "none" }}>
        <Box
          sx={{
            position: "relative",

            display: "flex",
          }}
        >
          <Image
            width={"100%"}
            height={1100}
            src="/landingpagea.png"
            alt={"landpage Image"}
          />
          <Flex
            sx={{
              position: "absolute",
              top: 200,
              flexDirection: "column",
              left: -380,

              "@media (max-width: 1981px)": {
                left: 65,
                top: 250,
              },
            }}
          >
            <MediaQuery
              query="(min-width: 1981px)"
              styles={{ display: "none" }}
            >
              <Typed
                strings={["Empowering Next Generation"]}
                typeSpeed={20}
                showCursor={false}
                style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 40 }}
              />
            </MediaQuery>
            <MediaQuery
              query="(max-width: 1981px)"
              styles={{ display: "none" }}
            >
              <Typed
                strings={["Empowering Next Generation"]}
                typeSpeed={20}
                showCursor={false}
                style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 68 }}
              />
            </MediaQuery>
            <MediaQuery
              query="(min-width: 1981px)"
              styles={{ display: "none" }}
            >
              <Typed
                strings={["Software Solutions"]}
                typeSpeed={20}
                startDelay={1000}
                showCursor={false}
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 800,
                  fontSize: 40,
                  textAlign: "center",
                }}
              />
            </MediaQuery>
            <MediaQuery
              query="(max-width: 1981px)"
              styles={{ display: "none" }}
            >
              <Typed
                strings={["Software Solutions"]}
                typeSpeed={20}
                startDelay={1000}
                showCursor={false}
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 800,
                  fontSize: 68,
                  textAlign: "center",
                }}
              />
            </MediaQuery>
          </Flex>
        </Box>
      </MediaQuery>

      <MediaQuery query="(min-width: 1400px)" styles={{ display: "none" }}>
        <Box
          sx={{
            position: "relative",

            display: "flex",
            "@media (max-width: 812px)": {
              display: "none",
            },
          }}
        >
          <Image
            width={700}
            height={600}
            src="/landingpagea.png"
            alt={"landpage Image"}
          />
          <Flex
            sx={{
              position: "absolute",
              top: 120,
              flexDirection: "column",
              left: -120,

              "@media (max-width: 1175px)": {
                left: -80,
              },
            }}
          >
            <Typed
              strings={["Empowering Next Generation"]}
              typeSpeed={20}
              showCursor={false}
              style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 32 }}
            />

            <Typed
              strings={["Software Solutions"]}
              typeSpeed={20}
              startDelay={1000}
              showCursor={false}
              style={{
                fontFamily: "Poppins",
                fontWeight: 800,
                fontSize: 32,
                textAlign: "center",
              }}
            />
          </Flex>
        </Box>
      </MediaQuery>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          "@media (min-width: 813px)": {
            display: "none",
          },
        }}
      >
        <Flex sx={{ width: 150, position: "absolute", top: 30, left: -15 }}>
          <Typed
            strings={["Empowering Next Generation Software Solutions"]}
            typeSpeed={80}
            fadeOut
            style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 12 }}
          />
        </Flex>
        <Image
          width={250}
          height={200}
          src="/landingpagea.png"
          alt={"landpage Image"}
        />
      </Box>
    </section>
  );
};
