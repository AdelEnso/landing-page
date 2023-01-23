import { createStyles } from "@mantine/core";
const HEADER_HEIGHT = 60;
export const useComponentsStyles = createStyles((theme) => ({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderBottom: "0px",
    marginTop: 15,
  },

  links: {
    [theme.fn.smallerThan(601)]: {
      display: "none",
    },
  },
  CardsConatiner: {
    [theme.fn.smallerThan(576)]: {
      marginRight: 0,
      marginLeft: 0,
      width: "auto",
      height: "auto",
    },
    // [theme.fn.smallerThan(992)]: {},
    [theme.fn.largerThan(1400)]: {
      width: 477,
      height: 302,
    },
    width: 400,
    height: 280,
    marginBottom: 22,
    backgroundColor: "#9E98AE",
    padding: 40,
    boxShadow: "32px 32px 42px rgba(0, 0, 0, 0.04)",
    borderRadius: "16px",
    marginRight: 20,
    marginLeft: 20,
    flexDirection: "column",
  },
  descCards: {
    [theme.fn.smallerThan(576)]: {
      fontSize: 14,
    },
    [theme.fn.smallerThan(1400)]: {
      fontSize: 16,
    },
    color: "white",
    fontSize: 18,
    fontFamily: "Poppins",
    fontWeight: 500,
    letterSpacing: 0.2,
  },
  titleCards: {
    [theme.fn.smallerThan(576)]: {
      fontSize: 18,
    },
    [theme.fn.smallerThan(1400)]: {
      fontSize: 20,
    },
    color: "white",
    fontSize: 24,
    marginTop: 31,
    fontFamily: "Poppins",
    fontWeight: 800,
  },

  heroCardsConatiner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 160,
    [theme.fn.smallerThan(992)]: {
      flexDirection: "column",
      justifyContent: "center",
      marginTop: 40,
      alignItems: "center",
      marginRight: 20,
      marginLeft: 20,
    },
  },

  burger: {
    [theme.fn.largerThan(601)]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "12px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: "#FFFFFF",
    [theme.fn.largerThan("xl")]: {
      fontSize: 16,
    },
    fontSize: 14,
    fontWeight: 500,
    fontFamily: "Poppins",

    "&:hover": {
      backgroundColor: "#808080",
      color: "#FFFFFF",
    },
  },
  productIconMd: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
  productIconlg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  linkActive: {
    "&, &:hover": {
      textDecorationColor: "#9E98AE",
      textDecorationLine: "underline",
      textUnderlineOffset: 6,
      color: "#FFFFFF",
    },
  },
  productCard: {
    width: 242,
    height: 80,
    padding: 10,
    marginBottom: 16,
    borderRadius: "0px 8px 8px 0px",
    backgroundColor: "#9E98AE",
    borderLeftWidth: 4,
    borderLeftColor: "rgba(255, 255, 255, 0.4)",
    borderTopColor: "#9E98AE",
    borderBottomColor: "#9E98AE",
    borderRightColor: "#9E98AE",
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
    "&:hover": {
      backgroundColor: "#808080",
      borderLeftWidth: 4,
      borderLeftColor: "#fff",
    },
  },
  productCardActive: {
    "&, &:hover": {
      backgroundColor: "#808080",
      borderLeftWidth: 4,
      borderLeftColor: "#fff",
    },
  },
  productsTextContainer: {
    marginLeft: 66,
    [theme.fn.smallerThan("sm")]: {
      marginLeft: 0,
    },
  },
  productContiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    display: "conatins",
    alignItems: "flex-start",
    marginTop: 44,
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: 32,
    },
  },
  headlineProduct: {
    fontFamily: "Poppins",
    fontWeight: 800,
    fontSize: 28,
    color: "white",
    letterSpacing: 0.2,
    marginBottom: 12,
    marginLeft: 40,
    [theme.fn.smallerThan("md")]: {
      fontSize: 18,
      marginLeft: 0,
    },
  },
  descProduct: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: 18,
    color: "white",
    letterSpacing: 0.2,
    marginBottom: 12,
    marginLeft: 40,
    [theme.fn.smallerThan("md")]: {
      fontSize: 14,
      marginLeft: 0,
    },
  },
}));
