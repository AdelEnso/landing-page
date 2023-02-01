import { HomeLayout } from "../layouts";
import React from "react";
import { HeroSection } from "../sections";

export default function Home() {
  return (
    <HomeLayout hasHeader={true} hasFooter={false}>
      <HeroSection />
    </HomeLayout>
  );
}
