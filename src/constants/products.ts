import {
  Mobile,
  Lock,
  Cloud,
  Setting,
  Shield,
  Network,
  ProductIcon,
  DiscoveryIcon,
  Calc,
  People,
  Settings,
  AnalyticsIcon,
  Checklist,
  CompressionIcon,
  Database,
  Statistics,
  Data,
} from "../assets/svgs";

export const PRODUCTS = [
  {
    title: "ENSŌ Dreamwalk",
    headline: "ENSŌ Dreamwalk",
    desc: "Dreamwalk software enables dataset mobility to be aligned with business priorities, ensuring the shortest time to greatest value.",
    Icon: DiscoveryIcon,
    categories: [
      {
        Icon: Cloud,
        desc: "Source device that runs/references the BQ-patented system and methods ",
      },
      {
        Icon: Shield,
        desc: "Creates a trusted execution environment",
      },
      {
        Icon: Mobile,
        desc: "Securely isolates target device hardware, operating system, computing resources and application software",
      },
      {
        Icon: Calc,
        desc: "Runs a novel stateless consensus protocol derived out of the BQpatented methods",
      },
      {
        Icon: People,
        desc: "Creates a group of trusted peers with the source device, facilitating secure, private and efficient join/leave",
      },
      {
        Icon: Settings,
        desc: "Enables new device discovery through an automated and decentralized method",
      },
    ],
  },
  {
    title: "ENSŌ Distributed RNG ",
    headline: "ENSŌ Distributed RNG Proccess",
    desc: "The only software-based distributed true random number generator (TRNG), tested across 120 billion data sets proving statistical randomness in excess of 99.9999%. ",
    Icon: ProductIcon,
    categories: [
      {
        Icon: Mobile,
        desc: "Application wants to access/share encrypted data",
      },
      {
        Icon: Setting,
        desc: "The installed software initializes the request",
      },
      {
        Icon: Network,
        desc: "Devices within the network are asked to generate a partial seed",
      },
      {
        Icon: Cloud,
        desc: "Each device generates the partial seed based on multiple entropy sources",
      },
      {
        Icon: Shield,
        desc: "All seeds are combined and formed into a verifiable secure random number",
      },
      {
        Icon: Lock,
        desc: "Application A can now securely access/share encrypted data",
      },
    ],
  },
  {
    title: "ENSŌ Crawler",
    headline: "ENSŌ Crawler",
    desc: "An intelligent autonomous discovery protocol designed to facilitate high-efficiency peer-to-peer network communications with self-healing and discovery capabilities, independent of fixed physical infrastructure such as centralized, co-location or multisuper-node servers.",
    Icon: ProductIcon,
    categories: [
      {
        Icon: Cloud,
        desc: "Source device that runs/references the BQ-patented system and methods ",
      },
      {
        Icon: Shield,
        desc: "Creates a trusted execution environment",
      },
      {
        Icon: Mobile,
        desc: "Securely isolates target device hardware, operating system, computing resources and application software",
      },
      {
        Icon: Calc,
        desc: "Runs a novel stateless consensus protocol derived out of the BQpatented methods",
      },
      {
        Icon: People,
        desc: "Creates a group of trusted peers with the source device, facilitating secure, private and efficient join/leave",
      },
      {
        Icon: Settings,
        desc: "Enables new device discovery through an automated and decentralized method",
      },
    ],
  },
  {
    title: "ENSŌ Encrpytion Protocol",
    headline: "ENSŌ Encrpytion Protocol Proccess",
    desc: "The ENSŌ Encrpytion Protocol is an intelligent consensus protocol design that enables real-time secure end-to-end encryption in the absence of directly accessing, transmitting or centrally storing underlying encrypted data.",
    Icon: AnalyticsIcon,
    categories: [
      {
        Icon: Cloud,
        desc: "Source device that runs / references the BQ-patented system and methods",
      },
      {
        Icon: Shield,
        desc: "Creates a trusted execution environment",
      },
      {
        Icon: Mobile,
        desc: "Securely isolates target device hardware, operating system, computing resources and application software",
      },
      {
        Icon: Calc,
        desc: "Runs a novel stateless consensus protocol derived out of the BQpatented methods",
      },
      {
        Icon: People,
        desc: "Creates a group of trusted peers with the source device, facilitating secure, private and efficient join/leave",
      },
      {
        Icon: Checklist,
        desc: "Once session is established, set a preset programmed group of bits in the consensus protocol to start observing each peer’s target data of interest and recording them ",
      },
    ],
  },
  {
    title: "ENSŌ Compression Protocol",
    headline: "ENSŌ Compression Protocol Proccess",
    desc: "The ENSŌ Compression Protocol is an intelligent compression protocol which applies a plurality of modulation techniques, algorithms and descriptor mapping of underlying data to generate effective real-time data compression of to up to 81% in less than 0.20 seconds between an arbitrary number of networked devices.",
    Icon: CompressionIcon,
    categories: [
      {
        Icon: Cloud,
        desc: "Source device that runs/references the BQ-patented system and methods encrypted data",
      },
      {
        Icon: Database,
        desc: "Creates an optimized data-descriptor-based referencing system for a set of data blocks physically residing on the source device",
      },
      {
        Icon: Statistics,
        desc: "Securely communicate the coded data descriptors to the target device(s) using the protocol derived from the BQ-patented methods",
      },
      {
        Icon: Lock,
        desc: "Each device generates the partial seed based on multiple entropy sources",
      },
      {
        Icon: Settings,
        desc: "All seeds are combined and formed into a verifiable secure random number",
      },
      {
        Icon: Data,
        desc: "Application A can now securely access/share encrypted data",
      },
    ],
  },
];
