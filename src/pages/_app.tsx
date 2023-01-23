import "../../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Enso Website</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          globalStyles: (theme) => ({
            "*, *::before, *::after": {
              boxSizing: "border-box",
            },
            "::-webkit-scrollbar": {
              width: "0.4rem",
            },
            "::-webkit-scrollbar-track": {
              background: "#C3C2C7",
            },
            "::-webkit-scrollbar-thumb": {
              backgroundColor: "#9E98AE",
              borderRadius: 20,
              border: "3px soild #9E98AE",
            },

            body: {
              backgroundColor: "#C3C2C7",
            },
          }),
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
