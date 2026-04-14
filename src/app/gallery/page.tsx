import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: "Gallery — Before & After Pressure Washing Results",
  description:
    "See the dramatic before and after results from NR Complete Pressure Washing in Mundelein, IL. Browse our gallery of driveways, pavers, house washing, retaining walls, and more.",
  path: "/gallery",
});

// Before & after composites — only images that are actual B&A composites or
// high-quality transformation shots. Low-res thumbnails removed.
const beforeAfterImages = [
  {
    key: "gallery-ba-1",
    label: "Paver Cleaning & Restoration",
  },
  {
    key: "gallery-ba-2",
    label: "House Washing — Window & Siding",
  },
  {
    key: "gallery-ba-5",
    label: "Brick Paver Restoration",
  },
  {
    key: "gallery-ba-7",
    label: "Retaining Wall Cleaning",
  },
  {
    key: "gallery-ba-6",
    label: "Entry Stairway Cleaning",
  },
];

const projectImages = [
  "gallery-client-1",
  "gallery-client-2",
  "gallery-client-3",
  "gallery-client-4",
  "gallery-client-5",
  "gallery-client-6",
  "gallery-client-7",
  "gallery-client-8",
  "gallery-client-9",
  "gallery-client-10",
];

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Gallery", href: "/gallery" },
            ])
          ),
        }}
      />

      <PageHero
        heading="Our Work — Before & After Gallery"
        subtitle="See the dramatic transformations NR Complete Pressure Washing delivers for homeowners and businesses across Mundelein, IL and the surrounding Chicago suburbs."
        imageKey="gallery-hero"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
        primaryCta={{ label: "Get a Free Estimate", href: "/contact" }}
        secondaryCta={{
          label: "Call (941) 280-9119",
          href: "tel:+19412809119",
        }}
      />

      {/* Before & After Section */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            eyebrow="Before & After"
            heading="Dramatic Pressure Washing Transformations in Mundelein, IL"
            subtitle="Every image below shows real results from NR Complete Pressure Washing projects. See the difference 30+ years of experience makes."
            align="center"
          />
          <div className="columns-1 gap-8 space-y-8 md:columns-2">
            {beforeAfterImages.map((img) => (
              <div
                key={img.key}
                className="break-inside-avoid overflow-hidden rounded-2xl border border-border bg-white shadow-card"
              >
                <ImageSlot
                  imageKey={img.key}
                  natural
                  className="w-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="p-4">
                  <p className="text-sm font-semibold text-foreground">
                    {img.label}
                  </p>
                  <p className="text-xs text-muted">Mundelein, IL</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Additional Project Photos */}
      <section className="section-padding bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Project Photos"
            heading="More of Our Pressure Washing Work"
            subtitle="Additional project photos from residential and commercial cleaning jobs across Lake County, IL."
            align="center"
          />
          <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
            {projectImages.map((key) => (
              <div
                key={key}
                className="break-inside-avoid overflow-hidden rounded-xl border border-border"
              >
                <ImageSlot
                  imageKey={key}
                  natural
                  className="w-full"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Want Results Like These?"
        text="Schedule a free estimate with NR Complete Pressure Washing and see what 30+ years of experience can do for your Mundelein, IL property."
        primaryCta={{ label: "Get a Free Estimate", href: "/contact" }}
        secondaryCta={{
          label: "Call (941) 280-9119",
          href: "tel:+19412809119",
        }}
      />

      <QuoteSection />
    </>
  );
}
