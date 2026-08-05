import type { Metadata } from "next";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import {
  createPageMetadata,
  defaultDescription,
  defaultTitle,
  getHomeStructuredData,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: defaultTitle,
  description: defaultDescription,
  path: "/",
  image: "/client-images/bathroom-ensuite-bay-view.webp",
});

export default function Home() {
  return (
    <>
      <JsonLd data={getHomeStructuredData()} />
      <Hero />
      <About />
      <Services limit={6} showViewAll />
      <Gallery limit={6} showViewAll />
      <WhyChooseUs />
      <Faq />
      <Contact />
    </>
  );
}
