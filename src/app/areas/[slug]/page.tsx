import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { SplitSection } from "@/components/sections/SplitSection";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { ServiceScopeSection } from "@/components/sections/ServiceScopeSection";
import { TopicCardGrid } from "@/components/sections/TopicCardGrid";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { locations } from "@/config/locations";
import { businessConfig } from "@/config/business";
import { generatePageMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
} from "@/lib/structured-data";
import { ArrowRight, Phone, MapPin } from "lucide-react";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

const ctaProps = {
  primary: { label: "Get a Free Estimate", href: "/contact" },
  secondary: {
    label: `Call ${businessConfig.phone}`,
    href: `tel:${businessConfig.phoneRaw}`,
  },
};

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
    description: location.metaDescription,
    path: `/areas/${location.slug}`,
  });
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  // Build FAQ items for the FAQSection (custom items, not faqKeys)
  const faqItems = location.faqs.map((faq, i) => ({
    id: `faq-loc-${location.slug}-${i}`,
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <>
      {/* Structured Data */}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...generateLocalBusinessSchema(),
            areaServed: {
              "@type": "City",
              name: location.name,
              addressRegion: location.state,
            },
          }),
        }}
      />

      {/* 1. Page Hero */}
      <PageHero
        heading={`Pressure Washing in ${location.fullName}`}
        subtitle={location.heroSubtitle}
        imageKey={location.heroImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/areas" },
          { label: location.fullName },
        ]}
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />

      {/* 2. Overview — SplitSection */}
      <SplitSection
        imageKey={location.splitImage}
        imagePosition="right"
        imageAspect="4/3"
      >
        <SectionHeading
          eyebrow={location.fullName}
          heading={`Professional Pressure Washing in ${location.fullName}`}
        />
        {location.overview.map((p, i) => (
          <p
            key={i}
            className="mb-4 text-base leading-relaxed text-muted md:text-lg"
          >
            {p}
          </p>
        ))}
        <div className="mt-6 flex flex-wrap gap-4">
          <Button
            href="/contact"
            icon={<ArrowRight className="h-5 w-5" />}
          >
            Get a Free Estimate
          </Button>
          <Button
            href={`tel:${businessConfig.phoneRaw}`}
            variant="outline"
            icon={<Phone className="h-5 w-5" />}
          >
            {businessConfig.phone}
          </Button>
        </div>
      </SplitSection>

      {/* 3. Why Choose Us — BenefitGrid */}
      <BenefitGrid
        benefits={location.whyChooseUs}
        eyebrow="Why Choose Us"
        heading={`Why ${location.name} Chooses NR Complete Pressure Washing`}
        subtitle={`Here is what makes us the trusted pressure washing provider for homeowners and businesses in ${location.fullName}.`}
        bgColor="surface"
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />

      {/* 4. Services Available — ServiceScopeSection */}
      <ServiceScopeSection
        items={location.services}
        eyebrow="Our Services"
        heading={`Pressure Washing Services Available in ${location.fullName}`}
        subtitle={`NR Complete Pressure Washing offers the full range of professional exterior cleaning services to ${location.name} residents and businesses.`}
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />

      {/* 5. Local Expertise — TopicCardGrid */}
      <TopicCardGrid
        eyebrow={location.localExpertise.eyebrow}
        heading={location.localExpertise.heading}
        subtitle={location.localExpertise.subtitle}
        items={location.localExpertise.items}
        bgColor="surface"
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />

      {/* 6. FAQs — location-specific */}
      <FAQSection
        eyebrow={`${location.name} Questions`}
        heading={`Pressure Washing FAQ for ${location.fullName}`}
        subtitle={`Answers to common questions about pressure washing services in ${location.fullName}.`}
        items={faqItems}
      />

      {/* 7. Testimonials */}
      <TestimonialSection
        eyebrow="Client Reviews"
        heading="What Our Clients Say"
        subtitle={`Hear from property owners who trust NR Complete Pressure Washing for their exterior cleaning needs.`}
        bgColor="surface"
      />

      {/* 8. Other Service Areas */}
      <section className="section-padding-sm">
        <Container>
          <div className="text-center">
            <h3 className="mb-4 text-lg font-bold text-foreground">
              We Also Serve These Nearby Areas
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {locations
                .filter((l) => l.slug !== location.slug)
                .map((l) => (
                  <Link
                    key={l.slug}
                    href={`/areas/${l.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground-light transition-colors hover:border-primary-300 hover:text-primary-600"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    {l.fullName}
                  </Link>
                ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 9. CTA */}
      <CTASection
        heading={location.ctaHeading}
        text={location.ctaText}
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />

      {/* 10. Quote Form */}
      <QuoteSection />
    </>
  );
}
