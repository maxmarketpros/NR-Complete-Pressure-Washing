import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { locations } from "@/config/locations";
import { businessConfig } from "@/config/business";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { ArrowRight } from "lucide-react";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) return {};

  return generatePageMetadata({
    title: `Pressure Washing in ${location.fullName}`,
    description: `Professional pressure washing services in ${location.fullName}. NR Complete Pressure Washing offers house washing, concrete cleaning, paver restoration, and more. 30+ years experience. Free estimates.`,
    path: `/areas/${location.slug}`,
  });
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Service Areas", href: "/areas" },
              {
                name: location.fullName,
                href: `/areas/${location.slug}`,
              },
            ])
          ),
        }}
      />

      <PageHero
        heading={`Pressure Washing in ${location.fullName}`}
        subtitle={location.description}
        imageKey={location.heroImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/areas" },
          { label: location.fullName },
        ]}
        primaryCta={{ label: "Get a Free Estimate", href: "/contact" }}
        secondaryCta={{
          label: `Call ${businessConfig.phone}`,
          href: `tel:${businessConfig.phoneRaw}`,
        }}
      />

      {/* Intro */}
      <section className="section-padding">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow={location.fullName}
              heading={`Professional Pressure Washing Services in ${location.fullName}`}
            />
            <p className="mb-6 text-base leading-relaxed text-muted md:text-lg">
              NR Complete Pressure Washing is proud to serve {location.name},{" "}
              {location.state} with a full range of professional exterior
              cleaning services. With over 30 years of experience, our team
              delivers expert pressure washing, soft wash house cleaning,
              concrete restoration, paver maintenance, and hardscape cleaning to
              homeowners and business owners throughout{" "}
              {location.name} and surrounding areas.
            </p>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Whether you need a driveway cleaned, your home&apos;s siding
              washed, pavers restored, or any other exterior surface
              professionally cleaned, NR Complete Pressure Washing has the
              expertise and equipment to get the job done right.{" "}
              <a
                href="tel:+19412809119"
                className="font-semibold text-primary-600 hover:underline"
              >
                Call (941) 280-9119
              </a>{" "}
              for a free estimate.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Available */}
      <ServiceGrid
        eyebrow="Available Services"
        heading={`Our Services in ${location.fullName}`}
        subtitle={`All of our professional pressure washing services are available to ${location.name} residents and businesses.`}
        bgColor="surface"
      />

      {/* Other Areas Link */}
      <section className="section-padding-sm">
        <Container>
          <div className="text-center">
            <p className="text-sm text-muted">
              We also serve{" "}
              {locations
                .filter((l) => l.slug !== location.slug)
                .slice(0, 5)
                .map((l, i, arr) => (
                  <span key={l.slug}>
                    <Link
                      href={`/areas/${l.slug}`}
                      className="text-primary-600 hover:underline"
                    >
                      {l.fullName}
                    </Link>
                    {i < arr.length - 1 ? ", " : ""}
                  </span>
                ))}
              , and more.{" "}
              <Link
                href="/areas"
                className="inline-flex items-center gap-1 font-medium text-primary-600 hover:underline"
              >
                View all service areas
                <ArrowRight className="h-3 w-3" />
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        heading={`Ready for Pressure Washing in ${location.fullName}?`}
        text={`Contact NR Complete Pressure Washing today for a free estimate on any exterior cleaning service in ${location.name}, ${location.state}.`}
        primaryCta={{ label: "Get a Free Estimate", href: "/contact" }}
        secondaryCta={{
          label: `Call ${businessConfig.phone}`,
          href: `tel:${businessConfig.phoneRaw}`,
        }}
      />

      <QuoteSection />
    </>
  );
}
