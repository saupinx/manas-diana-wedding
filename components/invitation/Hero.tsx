"use client";

import Image from "next/image";
import { useState } from "react";
import type { InvitationContent, Language } from "@/data/invitation";
import { withBasePath } from "@/lib/basePath";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MusicButton } from "./MusicButton";
import { PlaceholderImage } from "./PlaceholderImage";
import { Sparkles } from "./Sparkles";

type HeroProps = {
  content: InvitationContent;
  language: Language;
  heroSrc: string;
  musicSrc: string;
  onLanguageChange: (language: Language) => void;
};

export function Hero({
  content,
  language,
  heroSrc,
  musicSrc,
  onLanguageChange,
}: HeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section className="reveal-section relative min-h-[720px] overflow-hidden bg-white">
      <div className="hero-media absolute inset-x-0 top-0 h-[500px] overflow-hidden rounded-b-[38px] border-b border-neutral-200">
        <PlaceholderImage label={content.heroNames} />

        {!imageFailed ? (
          <Image
            src={heroSrc}
            alt={content.heroNames}
            fill
            priority
            sizes="430px"
            className={`object-cover transition-[opacity,transform] duration-700 ${
              imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageFailed(true)}
          />
        ) : null}
      </div>

      <div className="relative z-10 flex min-h-[720px] flex-col px-6 pb-12 pt-8">
        <div className="hero-top-controls">
          <div className="hero-controls-stack">
            <LanguageSwitcher language={language} onChange={onLanguageChange} />

            <MusicButton
              src={musicSrc}
              label=""
              unavailableLabel={content.labels.musicUnavailable}
            />
          </div>
        </div>

        <div className="hero-bottom-content mt-auto text-center">
          <div className="hero-text-stack">
            <p className="hero-event-title hero-event-title-alone">
              {content.eventTitle}
            </p>

            <div className="hero-name-wrap relative mx-auto w-fit px-7">
              <Sparkles variant="hero" />
              <h1 className="hero-name-title font-calligraphy drop-shadow-[0_10px_18px_rgba(0,0,0,0.08)]">
                {content.heroNames}
              </h1>
            </div>
          </div>

          <div className="hero-floral-transition-fixed" aria-hidden="true">
            <span
              className="hero-floral-transition-image"
              style={{
                backgroundImage: `url(${withBasePath("/assets/decor/flower-03-watercolor-vertical.png")})`,
              }}
            />
          </div>

          <div className="mx-auto mt-5 h-px w-24 bg-black shadow-[0_8px_16px_rgba(0,0,0,0.18)]" />

          <div className="hero-organizer-block mx-auto mt-7 text-center">
            <p className="hero-organizer-label">
              {content.organizers}
            </p>

            <p className="hero-organizer-name font-calligraphy">
              Anar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
