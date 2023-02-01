import { Paper, Button, Group, createStyles, Container } from "@mantine/core";
import { ConatctForm, ConatctInfo } from "../components";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      display: "flex",
      flexDirection: "row-reverse",
      borderRadius: theme.radius.lg,

      border: `1px solid #9E98AE`,

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
      borderLeft: 0,

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

      borderTopRightRadius: theme.radius.lg - 2,
      borderBottomRightRadius: theme.radius.lg - 2,
      backgroundColor: "#808080",

      padding: theme.spacing.xl,
      flex: "0 0 400px",

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },

    title: {
      marginBottom: theme.spacing.xl * 1.5,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      backgroundColor: "#808080",
      color: "white",
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

export const GetInTouch = () => {
  const { classes } = useStyles();

  return (
    <Container
      size={"lg"}
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
        marginTop: 200,
        "@media (max-width: 768px)": {
          marginTop: 20,
        },
      }}
    >
      <Paper bg="transparent" shadow="md" radius="lg">
        <div className={classes.wrapper}>
          <div className={classes.contacts}>
            <ConatctInfo />
          </div>

          <form
            className={classes.form}
            onSubmit={(event) => event.preventDefault()}
          >
            <div className={classes.fields}>
              <ConatctForm />

              <Group position="left" mt="md">
                <Button
                  type="submit"
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
                  Subscribe
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </Container>
  );
};
