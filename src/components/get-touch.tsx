import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
} from "@mantine/core";
import BG from "../../public/Getintouch.png";
import { ConatctForm } from "./conatct-form";
import { ContactIconsList } from "./contact-icons";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      display: "flex",

      backgroundColor: "#C3C2C7",
      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
      backgroundColor: "#C3C2C7",
      borderLeft: 0,
      borderTopLeftRadius: 4,
      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: -12,
    },

    fieldInput: {
      flex: 1,

      "& + &": {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: "flex",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    contacts: {
      boxSizing: "border-box",
      position: "relative",
      borderRadius: theme.radius.lg - 2,
      //   backgroundImage: `url(${BG.src})`,
      backgroundColor: "#C3C2C7",
      backgroundSize: "cover",
      backgroundPosition: "bottom",

      padding: theme.spacing.xl,
      flex: "0 0 450px",

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: theme.spacing.xl * 1.5,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      color: "white",
      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

export const GetInTouch = () => {
  const { classes } = useStyles();

  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <form
          className={classes.form}
          onSubmit={(event) => event.preventDefault()}
        >
          <Text size="lg" weight={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <ConatctForm />
            <Group position="right" mt="md">
              <Button
                type="submit"
                bg="#9E98AE"
                sx={{
                  transition: "all .5s ease",
                  borderColor: "#808080",
                  color: "white",
                  ":hover": {
                    backgroundColor: "AppWorkspace",
                    color: "#808080",
                    boxShadow: "0 0.5em 0.5em -0.4em var(--hover)",
                    transform: "translateY(-0.25em)",
                  },
                }}
                className={classes.control}
              >
                Send Message
              </Button>
            </Group>
          </div>
        </form>
        <div className={classes.contacts}>
          <Text
            size="lg"
            weight={700}
            className={classes.title}
            sx={{ color: "#fff" }}
          >
            Contact information
          </Text>

          <ContactIconsList variant="white" />
        </div>
      </div>
    </Paper>
  );
};
