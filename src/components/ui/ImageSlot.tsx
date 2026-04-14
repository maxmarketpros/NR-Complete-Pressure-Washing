"use client";

import Image from "next/image";
import { imageManifest } from "@/config/images";
import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import { useState } from "react";

interface ImageSlotProps {
  imageKey: string;
  aspectRatio?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  fill?: boolean;
  /** Render at natural aspect ratio (no cropping). Useful for galleries. */
  natural?: boolean;
  overlayClassName?: string;
}

function Placeholder({
  imageKey,
  fill,
  className,
  overlayClassName,
  aspectRatio,
}: {
  imageKey: string;
  fill?: boolean;
  className?: string;
  overlayClassName?: string;
  aspectRatio?: string;
}) {
  // Determine if this is a dark-overlay context (hero, page banner)
  const isDarkContext = overlayClassName?.includes("bg-black") || overlayClassName?.includes("bg-gradient") || overlayClassName?.includes("foreground");

  if (fill) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center gap-3",
            isDarkContext ? "bg-foreground" : "bg-surface-dark"
          )}
        >
          <ImageIcon
            className={cn(
              "h-12 w-12",
              isDarkContext ? "text-white/20" : "text-muted-light"
            )}
            strokeWidth={1.5}
          />
          <span
            className={cn(
              "text-xs font-medium uppercase tracking-wider",
              isDarkContext ? "text-white/20" : "text-muted-light"
            )}
          >
            {imageKey}
          </span>
        </div>
        {overlayClassName && (
          <div className={cn("absolute inset-0", overlayClassName)} />
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-xl bg-surface-dark border border-border",
        className
      )}
      style={{ aspectRatio: aspectRatio || "4/3" }}
    >
      <ImageIcon className="h-10 w-10 text-muted-light" strokeWidth={1.5} />
      <span className="text-xs font-medium uppercase tracking-wider text-muted-light">
        {imageKey}
      </span>
    </div>
  );
}

export function ImageSlot({
  imageKey,
  aspectRatio,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className,
  fill = false,
  natural = false,
  overlayClassName,
}: ImageSlotProps) {
  const config = imageManifest[imageKey];
  const [hasError, setHasError] = useState(false);

  const focalX = config?.focalPoint?.x ?? 0.5;
  const focalY = config?.focalPoint?.y ?? 0.5;
  const objectPosition = `${focalX * 100}% ${focalY * 100}%`;

  if (!config || hasError) {
    return (
      <Placeholder
        imageKey={imageKey}
        fill={fill}
        className={className}
        overlayClassName={overlayClassName}
        aspectRatio={aspectRatio}
      />
    );
  }

  // Natural mode: render at intrinsic aspect ratio with no cropping
  if (natural) {
    return (
      <div className={cn("overflow-hidden rounded-xl", className)}>
        <Image
          src={config.src}
          alt={config.alt}
          width={config.width}
          height={config.height}
          priority={priority}
          sizes={sizes}
          className="h-auto w-full"
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  if (fill) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={config.src}
          alt={config.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition }}
          onError={() => setHasError(true)}
        />
        {overlayClassName && (
          <div className={cn("absolute inset-0", overlayClassName)} />
        )}
      </div>
    );
  }

  return (
    <div
      className={cn("relative overflow-hidden rounded-xl", className)}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <Image
        src={config.src}
        alt={config.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition }}
        onError={() => setHasError(true)}
      />
      {overlayClassName && (
        <div className={cn("absolute inset-0", overlayClassName)} />
      )}
    </div>
  );
}
