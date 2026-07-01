"use client";

import Image from "next/image";
import { useState } from "react";
import type { InvitationContent } from "@/data/invitation";
import { withBasePath } from "@/lib/basePath";
import { PlaceholderImage } from "./PlaceholderImage";

type GallerySectionProps = {
  content: InvitationContent;
  images: string[];
};

export function GallerySection({ content, images }: GallerySectionProps) {
  return (
    <section className="reveal-section px-5 py-7">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.34em] text-neutral-600">
        {content.labels.gallery}
      </p>
      <div className="mt-6 grid gap-[18px]">
        {images.map((src, index) => (
          <GalleryImage key={src} src={src} alt={`${content.name} ${index + 1}`} tall={index === 0} />
        ))}
      </div>
    </section>
  );
}

function GalleryImage({ src, alt, tall }: { src: string; alt: string; tall: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`gallery-card relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-[0_22px_64px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.95)] ${tall ? "h-[390px]" : "h-[280px]"}`}>
      <PlaceholderImage label={alt} />
      {!failed ? (
        <Image
          src={withBasePath(src)}
          alt={alt}
          fill
          sizes="430px"
          className={`object-cover grayscale transition-[opacity,transform] duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      ) : null}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_42%,rgba(0,0,0,0.08))]" />
    </div>
  );
}
