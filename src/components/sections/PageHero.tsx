import Link from "next/link";
import { ChevronRight, ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  heading: string;
  subtitle?: string;
  imageKey: string;
  breadcrumbs?: BreadcrumbItem[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
}

export function PageHero({
  heading,
  subtitle,
  imageKey,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-center pt-20 overflow-hidden",
        "min-h-[320px] md:min-h-[380px]",
        className
      )}
    >
      {/* Background */}
      <ImageSlot
        imageKey={imageKey}
        fill
        priority
        className="absolute inset-0 z-0"
        overlayClassName="bg-gradient-to-r from-foreground/80 to-foreground/60"
        sizes="100vw"
      />

      {/* Content */}
      <Container className="relative z-10 py-16 md:py-20">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4 flex items-center gap-1.5 text-sm text-white/60">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-white"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="max-w-3xl text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {heading}
        </h1>

        {subtitle && (
          <p className="mt-4 max-w-xl text-lg text-white/80">{subtitle}</p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {primaryCta && (
              <Button
                href={primaryCta.href}
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
              >
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-foreground"
                icon={<Phone className="h-5 w-5" />}
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
