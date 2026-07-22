import { getStructuredData } from "@/lib/seo";

export function JsonLd() {
  const structuredData = getStructuredData();

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={(schema["@id"] as string | undefined) ?? `schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
