import { JsonLd } from "@/components/JsonLd";
import { getSiteWideStructuredData } from "@/lib/seo";

export function SiteSchemas() {
  return <JsonLd data={getSiteWideStructuredData()} />;
}
