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

// Composite images (single frame with both before & after)
const compositeImages = [
  { key: "gallery-ba-1", label: "Paver Cleaning & Color Restoration" },
  { key: "gallery-ba-2", label: "House Washing — Window & Siding" },
];

// Side-by-side before/after pairs
const beforeAfterPairs = [
  {
    before: "gallery-pair-1-before",
    after: "gallery-pair-1-after",
    label: "Brick Walkway Cleaning",
  },
  {
    before: "gallery-pair-2-before",
    after: "gallery-pair-2-after",
    label: "Paver Walkway Restoration",
  },
  {
    before: "gallery-pair-3-before",
    after: "gallery-pair-3-after",
    label: "Masonry Wall — Algae Removal",
  },
  {
    before: "gallery-pair-4-before",
    after: "gallery-pair-4-after",
    label: "Retaining Wall Cleaning",
  },
  {
    before: "gallery-pair-5-before",
    after: "gallery-pair-5-after",
    label: "Surface Cleaning & Restoration",
  },
];

// Standalone project photos (no matching pair)
const projectImages = [
  "gallery-client-1",
  "gallery-client-4",
  "gallery-client-6",
  "gallery-client-7",
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

      {/* Composite Before & After Images */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            eyebrow="Before & After"
            heading="Dramatic Pressure Washing Transformations in Mundelein, IL"
            subtitle="Every image below shows real results from NR Complete Pressure Washing projects. See the difference 30+ years of experience makes."
            align="center"
          />

          {/* Composite images (single frame B&A) */}
          <div className="grid gap-8 md:grid-cols-2">
            {compositeImages.map((img) => (
              <div
                key={img.key}
                className="overflow-hidden rounded-2xl border border-border bg-white shadow-card"
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

      {/* Side-by-Side Before & After Pairs */}
      <section className="section-padding bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Side by Side"
            heading="Before & After Comparisons"
            subtitle="Swipe between our before and after photos to see the full transformation on each project."
            align="center"
          />

          <div className="space-y-12">
            {beforeAfterPairs.map((pair, i) => (
              <div key={i}>
                <h3 className="mb-4 text-center text-lg font-bold text-foreground">
                  {pair.label}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
                    <ImageSlot
                      imageKey={pair.before}
                      natural
                      className="w-full"
                      sizes="(max-width: 768px) 50vw, 40vw"
                    />
                    <div className="bg-red-50 px-4 py-2 text-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                        Before
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
                    <ImageSlot
                      imageKey={pair.after}
                      natural
                      className="w-full"
                      sizes="(max-width: 768px) 50vw, 40vw"
                    />
                    <div className="bg-green-50 px-4 py-2 text-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-green-600">
                        After
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Additional Project Photos */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            eyebrow="Project Photos"
            heading="More of Our Pressure Washing Work"
            subtitle="Additional project photos from residential and commercial cleaning jobs across Lake County, IL."
            align="center"
          />
          <div className="columns-2 gap-4 space-y-4 md:columns-3">
            {projectImages.map((key) => (
              <div
                key={key}
                className="break-inside-avoid overflow-hidden rounded-xl border border-border"
              >
                <ImageSlot
                  imageKey={key}
                  natural
                  className="w-full"
                  sizes="(max-width: 640px) 50vw, 33vw"
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
