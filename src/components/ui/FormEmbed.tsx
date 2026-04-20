"use client";

import { FileText } from "lucide-react";
import { businessConfig } from "@/config/business";
import { cn } from "@/lib/utils";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

interface FormEmbedProps {
  className?: string;
  height?: string;
}

// Reusable form embed component.
// Renders the GoHighLevel form iframe if configured in business.ts,
// otherwise shows a styled placeholder indicating where the form will go.
//
// The iframe + embed script are mounted lazily the first time the wrapper
// nears the viewport (rootMargin 600px). This is a single lazy trigger —
// once we decide to mount, the iframe uses loading="eager" and the Script
// uses strategy="afterInteractive" as before. Do NOT add a second lazy
// mechanism (loading="lazy" / strategy="lazyOnload") — that combination
// previously prevented the form from ever loading.

export function FormEmbed({ className, height }: FormEmbedProps) {
  const embedUrl = businessConfig.formEmbedUrl;
  const embedHeight = height || businessConfig.formEmbedHeight;

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!embedUrl || mounted) return;

    const el = wrapperRef.current;
    if (!el) return;

    // Fallback: browsers without IntersectionObserver mount immediately.
    if (typeof IntersectionObserver === "undefined") {
      setMounted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [embedUrl, mounted]);

  if (embedUrl) {
    return (
      <div
        ref={wrapperRef}
        className={cn("w-full overflow-hidden", className)}
        style={{ minHeight: embedHeight }}
      >
        {mounted ? (
          <>
            <iframe
              src={embedUrl}
              title="Request a quote"
              id="inline-d1E6WGScJcNFJbpSbxb3"
              className="w-full border-0 rounded-xl"
              style={{ height: embedHeight }}
              loading="eager"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="WebSite Form Template"
              data-height="695"
              data-layout-iframe-id="inline-d1E6WGScJcNFJbpSbxb3"
              data-form-id="d1E6WGScJcNFJbpSbxb3"
            />
            <Script
              src="https://link.msgsndr.com/js/form_embed.js"
              strategy="afterInteractive"
            />
          </>
        ) : (
          <div
            className="w-full rounded-xl bg-surface"
            style={{ height: embedHeight }}
            aria-hidden="true"
          />
        )}
      </div>
    );
  }

  // Placeholder when no form embed URL is configured
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-border bg-surface",
        className
      )}
      style={{ height: embedHeight }}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
        <FileText className="h-8 w-8 text-primary-400" />
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-foreground">
          Form Embed Placeholder
        </p>
        <p className="mt-1 max-w-xs text-xs text-muted">
          Set <code className="rounded bg-surface-dark px-1 py-0.5 text-xs">formEmbedUrl</code> in{" "}
          <code className="rounded bg-surface-dark px-1 py-0.5 text-xs">business.ts</code> to
          display your booking or quote form here.
        </p>
      </div>
    </div>
  );
}
