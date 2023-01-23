import { createStyles } from "@mantine/core";

export const useSectionsStyles = createStyles((theme) => ({
  heroWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    paddingTop: 70,
    alignItems: "center",
    "@media (max-width: 992px)": {
      paddingTop: 80,
    },
  },
  productSection: {
    marginTop: 140,
    [theme.fn.smallerThan("md")]: {
      marginTop: 70,
    },
  },
  portfoiloWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  portfoiloImage: {
    width: 350,
    height: 350,
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  portfoiloImageMobile: {
    width: 250,
    height: 250,
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  inner: {
    position: "relative",
    zIndex: 1,
  },
  companyName: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 16,
    [theme.fn.smallerThan("md")]: {
      fontSize: 14,
    },
    letterSpacing: 2,
  },
  title1: {
    color: theme.white,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 18,
      marginTop: 16,
    },
    fontFamily: "Poppins",
    fontWeight: 700,
    [theme.fn.largerThan("xl")]: {
      fontSize: 54,
    },
    fontSize: 42,
  },
  control1: {
    marginTop: 52,
    backgroundColor: "#808080",
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 16,
    transition: "all .5s ease",
    ":hover": {
      backgroundColor: "AppWorkspace",
      color: "#808080",
      boxShadow: "0 0.5em 0.5em -0.4em var(--hover)",
      transform: "translateY(-0.25em)",
    },
    [theme.fn.smallerThan("sm")]: {
      width: 174,
    },
  },

  description1: {
    color: theme.white,
    fontFamily: "Poppins",
    fontSize: 20,
    marginTop: 48,
    fontWeight: 400,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 14,
      marginTop: 24,
    },
  },
  controls: {
    display: "flex",
    justifyContent: "center",
  },
  acadmicHead: {
    fontFamily: "Poppins",
    fontSize: 32,
    [theme.fn.largerThan("xl")]: {
      fontSize: 48,
    },
    [theme.fn.smallerThan("sm")]: {
      fontSize: 18,
    },
    color: "white",
    fontWeight: 800,
    marginTop: 40,
    marginBottom: 34,
  },
  descAcadmic: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: 22,
    letterSpacing: 0.2,
    color: "white",
  },
  acadmicConatainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  aboutContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  ImageIconMd: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
  ImageIconLg: {
    display: "flex",
    marginTop: 18,
    borderRadius: 4,
    opacity: 0.6,
    justifyContent: "center",
    alignItems: "center",
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));
