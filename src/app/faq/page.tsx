import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { faqs } from "@/config/faqs";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: "Frequently Asked Questions — Pressure Washing in Mundelein, IL",
  description:
    "Find answers to common questions about pressure washing services from NR Complete Pressure Washing in Mundelein, IL. Learn about our process, pricing, and what to expect.",
  path: "/faq",
});

// General FAQs
const generalKeys = faqs
  .filter((f) => f.id.startsWith("faq-general"))
  .map((f) => f.id);

// Service-specific FAQs grouped
const serviceGroups = [
  {
    label: "Pressure Washing",
    keys: faqs.filter((f) => f.id.startsWith("faq-pw")).map((f) => f.id),
  },
  {
    label: "House Washing",
    keys: faqs.filter((f) => f.id.startsWith("faq-hw")).map((f) => f.id),
  },
  {
    label: "Concrete Cleaning & Sealing",
    keys: faqs
      .filter((f) => f.id.startsWith("faq-cc") || f.id.startsWith("faq-cs"))
      .map((f) => f.id),
  },
  {
    label: "Paver Services",
    keys: faqs
      .filter(
        (f) =>
          f.id.startsWith("faq-pc") ||
          f.id.startsWith("faq-ps") ||
          f.id.startsWith("faq-psl")
      )
      .map((f) => f.id),
  },
  {
    label: "Stucco, Deck & Retaining Wall",
    keys: faqs
      .filter(
        (f) =>
          f.id.startsWith("faq-sc") ||
          f.id.startsWith("faq-dp") ||
          f.id.startsWith("faq-rw")
      )
      .map((f) => f.id),
  },
];

// Build FAQ schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs
    .filter((f) => !f.id.startsWith("faq-contact"))
    .map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "FAQ", href: "/faq" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        heading="Frequently Asked Questions"
        subtitle="Answers to common questions about pressure washing services in Mundelein, IL. Can't find what you're looking for? Call us at (941) 280-9119."
        imageKey="faq-hero"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />

      {/* General FAQs */}
      <FAQSection
        eyebrow="General Questions"
        heading="Pressure Washing Basics"
        subtitle="Common questions about our services, process, and what to expect."
        faqKeys={generalKeys}
      />

      {/* Service-specific FAQs */}
      {serviceGroups.map((group) => (
        <FAQSection
          key={group.label}
          eyebrow={group.label}
          heading={`${group.label} Questions`}
          faqKeys={group.keys}
          bgColor={
            serviceGroups.indexOf(group) % 2 === 0 ? "surface" : "white"
          }
        />
      ))}

      <CTASection
        heading="Still Have Questions?"
        text="Call NR Complete Pressure Washing at (941) 280-9119 or fill out our contact form. We are happy to answer any questions about our pressure washing services in Mundelein, IL."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{
          label: "Call (941) 280-9119",
          href: "tel:+19412809119",
        }}
      />

      <QuoteSection />
    </>
  );
}
