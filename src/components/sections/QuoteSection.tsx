import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FormEmbed } from "@/components/ui/FormEmbed";
import { businessConfig } from "@/config/business";

interface QuoteSectionProps {
  id?: string;
}

export function QuoteSection({ id }: QuoteSectionProps) {
  return (
    <section id={id} className="section-padding bg-surface-dark overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Get a Quote"
          heading="Request Your Free Estimate"
          subtitle="Fill out the form below and we'll get back to you within one business day."
          align="center"
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <FormEmbed />
          </div>

          {/* Contact Details Sidebar */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-card md:p-8">
              <h3 className="text-xl font-bold text-foreground">
                Contact Details
              </h3>
              <p className="mt-2 text-sm text-muted">
                Prefer to reach out directly? We&apos;re here to help.
              </p>

              <div className="mt-6 space-y-5">
                <a
                  href={`tel:${businessConfig.phoneRaw}`}
                  className="flex items-center gap-3 text-foreground transition-colors hover:text-primary-500"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
                    <Phone className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      Phone
                    </p>
                    <p className="font-semibold">{businessConfig.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${businessConfig.email}`}
                  className="flex items-center gap-3 text-foreground transition-colors hover:text-primary-500"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
                    <Mail className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      Email
                    </p>
                    <p className="font-semibold break-all">{businessConfig.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                    <MapPin className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      Address
                    </p>
                    <p className="font-semibold">
                      {businessConfig.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
                    <Clock className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      Hours
                    </p>
                    <p className="font-semibold">
                      {businessConfig.hours.display}
                    </p>
                  </div>
                </div>
              </div>

              {businessConfig.serviceAreas.length > 0 && (
                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
                    Service Areas
                  </h4>
                  <p className="mt-2 text-sm text-foreground-light">
                    {businessConfig.serviceAreas.join(", ")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
