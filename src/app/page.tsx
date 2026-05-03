import React from "react";
import { getPortfolioData } from "@/lib/data";
import { HomeClient } from "@/components/HomeClient";

export default async function Home() {
  const data = await getPortfolioData();

  return <HomeClient data={data} />;
}
