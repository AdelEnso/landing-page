import {
  createStyles,
  Badge,
  Group,
  Text,
  Card,
  SimpleGrid,
  Container,
} from "@mantine/core";
import {
  IconLock,
  IconCode,
  IconFileShredder,
  IconChartDots,
  IconBiohazard,
} from "@tabler/icons";

const mockdata = [
  {
    title: "Protecting",
    description: "Critical Infrastructure",
    icon: IconLock,
  },
  {
    title: "Neutralizing",
    description: "Cyber attacks at the inception stage",
    icon: IconBiohazard,
  },
  {
    title: "Detecting",
    description:
      "The  presence  of  invisible  threat  actors  efficiently  and timely",
    icon: IconChartDots,
  },
  {
    title: "Building",
    description: "Cryptographically strong solutions",
    icon: IconCode,
  },
  {
    title: "Reducing",
    description: "The amount of active network bandwidth and data",
    icon: IconFileShredder,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `1px solid #9E98AE`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: "#9E98AE",
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export const PortfolioFeature = () => {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
    >
      <feature.icon size={50} stroke={2} color="#9E98AE" />
      <Text
        size="lg"
        weight={600}
        sx={{ fontFamily: "Poppins" }}
        className={classes.cardTitle}
        mt="md"
      >
        {feature.title}
      </Text>
      <Text
        size="sm"
        sx={{ fontFamily: "Poppins", fontWeight: 400 }}
        color="dimmed"
        mt="sm"
      >
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container size="lg" py="xl">
      <Group position="center">
        <Badge
          variant="filled"
          color="gray"
          sx={{ fontFamily: "Poppins", fontWeight: 800 }}
          size="lg"
        >
          Our Foucs
        </Badge>
      </Group>

      <SimpleGrid
        cols={2}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
};
