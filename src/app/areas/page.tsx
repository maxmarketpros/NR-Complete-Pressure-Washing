import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { locations } from "@/config/locations";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Service Areas — Pressure Washing in Mundelein, IL & Surrounding Areas",
  description:
    "NR Complete Pressure Washing serves Mundelein, IL and the greater Chicago suburbs including Libertyville, Vernon Hills, Arlington Heights, Lake Zurich, and all of Lake County.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Service Areas", href: "/areas" },
            ])
          ),
        }}
      />

      <PageHero
        heading="Service Areas"
        subtitle="NR Complete Pressure Washing proudly serves Mundelein, IL and communities throughout Lake County and the greater Chicago suburbs."
        imageKey="areas-hero"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas" },
        ]}
        primaryCta={{ label: "Get a Free Estimate", href: "/contact" }}
        secondaryCta={{
          label: "Call (941) 280-9119",
          href: "tel:+19412809119",
        }}
      />

      {/* Service Areas Grid */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            eyebrow="Where We Work"
            heading="Professional Pressure Washing Across the Chicago Suburbs"
            subtitle="Click on any city below to learn more about our pressure washing services in your area."
            align="center"
          />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/areas/${loc.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition-all hover:border-primary-300 hover:shadow-card-hover"
              >
                <MapPin className="h-5 w-5 shrink-0 text-primary-500" />
                <span className="text-sm font-medium text-foreground group-hover:text-primary-600">
                  {loc.fullName}
                </span>
                <ArrowRight className="ml-auto h-4 w-4 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* About Our Coverage */}
      <section className="section-padding bg-surface">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="Lake County & Beyond"
              heading="Serving Mundelein, IL and the Greater Chicago Suburbs"
              align="center"
            />
            <p className="mb-6 text-base leading-relaxed text-muted md:text-lg">
              NR Complete Pressure Washing is based in Mundelein, IL and serves
              homeowners and business owners throughout Lake County and the
              surrounding Chicago suburbs. With over 30 years of experience, we
              provide professional pressure washing, house washing, concrete
              cleaning, paver restoration, and hardscape cleaning services to
              communities across the region.
            </p>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Whether you are in Libertyville, Vernon Hills, Arlington Heights,
              Lake Zurich, Buffalo Grove, or anywhere in between, our team
              delivers the same high-quality results and competitive pricing. We
              offer free estimates to all service areas — call{" "}
              <a
                href="tel:+19412809119"
                className="font-semibold text-primary-600 hover:underline"
              >
                (941) 280-9119
              </a>{" "}
              to schedule yours today.
            </p>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="section-padding-sm">
        <Container>
          <MapEmbed />
        </Container>
      </section>

      <CTASection
        heading="Need Pressure Washing in Your Area?"
        text="Contact NR Complete Pressure Washing for a free estimate. We serve Mundelein, IL and the entire greater Chicago suburban area."
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
