import type { Metadata } from "next";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { defaultDescription, defaultTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services limit={6} showViewAll />
      <Gallery limit={6} showViewAll />
      <WhyChooseUs />
      <Contact />
    </>
  );
}
