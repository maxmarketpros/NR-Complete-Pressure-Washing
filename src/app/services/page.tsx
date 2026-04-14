import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/config/services";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Services",
  description:
    "Explore our full range of professional pressure washing services in Mundelein, IL. From house washing and concrete cleaning to paver restoration, we deliver results you can see.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        heading="Our Pressure Washing Services"
        subtitle="Professional exterior cleaning solutions for homes and businesses in Mundelein, IL and surrounding areas."
        imageKey="service-pw-hero"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="section-padding">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Not Sure Which Service You Need?"
        text="Contact NR Complete Pressure Washing for a free estimate. We will assess your property and recommend the right cleaning approach."
        primaryCta={{ label: "Get a Quote", href: "/contact" }}
      />

      {/* Quote Form */}
      <QuoteSection />
    </>
  );
}
