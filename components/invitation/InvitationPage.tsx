"use client";

import { useEffect, useMemo, useState } from "react";
import { assetPaths, eventDateIso, invitation, type Language, whatsappPhone } from "@/data/invitation";
import { withBasePath } from "@/lib/basePath";
import { getCountdown, padTime, type CountdownValue } from "@/lib/countdown";
import { defaultLanguage, getStoredLanguage, storeLanguage } from "@/lib/language";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { CalendarSection } from "./CalendarSection";
import { EventInfoCard } from "./EventInfoCard";
import { FloralDecor } from "./FloralDecor";
import { FloralDivider } from "./FloralDivider";
import { Hero } from "./Hero";
import { InvitationText } from "./InvitationText";
import { ProgramSection } from "./ProgramSection";
import { RsvpSection } from "./RsvpSection";
import { WishesSection } from "./WishesSection";

export function InvitationPage() {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [countdown, setCountdown] = useState<CountdownValue | null>(null);
  const content = invitation[language];
  const heroSrc = withBasePath(assetPaths.hero);
  const musicSrc = withBasePath(assetPaths.music);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLanguage(getStoredLanguage());
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    storeLanguage(language);
  }, [language]);

  useEffect(() => {
    function updateCountdown() {
      setCountdown(getCountdown(eventDateIso));
    }

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const whatsappUrl = useMemo(
    () =>
      buildWhatsAppUrl({
        phone: whatsappPhone,
        name: content.name,
        date: content.date,
        venue: content.venue,
        language,
      }),
    [content.date, content.name, content.venue, language],
  );

 const calendarUrl = useMemo(() => {
  const title = encodeURIComponent(content.eventTitle);
  const details = encodeURIComponent(content.invitationText);
  const location = encodeURIComponent(content.address);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20260810T130000Z/20260810T180000Z&details=${details}&location=${location}`;
}, [content.address, content.eventTitle, content.invitationText]);

  const countdownItems = [
    [content.labels.days, countdown?.days],
    [content.labels.hours, countdown?.hours],
    [content.labels.minutes, countdown?.minutes],
    [content.labels.seconds, countdown?.seconds],
  ] as const;

  return (
    <main className="invite-shell mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-white text-black shadow-[0_0_90px_rgba(0,0,0,0.12)]">

      <Hero
        content={content}
        language={language}
        heroSrc={heroSrc}
        musicSrc={musicSrc}
        onLanguageChange={setLanguage}
      />

     <InvitationText content={content} />
      <EventInfoCard content={content} />

     <section className="countdown-section reveal-section relative overflow-hidden px-5 py-9 text-center">
  <div className="relative z-10">
    <p className="countdown-title">
  {content.labels.countdown}
</p>

    <FloralDivider />

    <div className="grid grid-cols-4 gap-2.5">
      {countdownItems.map(([label, value]) => (
        <div
          key={label}
          className="countdown-box rounded-[22px] border border-neutral-200 bg-white px-2 py-5 shadow-[0_16px_42px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,0.95)]"
        >
          <div className="font-serif text-3xl text-black">
            {typeof value === "number" ? padTime(value) : "--"}
          </div>
          <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
            {label}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <CalendarSection content={content} calendarUrl={calendarUrl} />
      <ProgramSection content={content} />
      <RsvpSection content={content} whatsappUrl={whatsappUrl} />
      <WishesSection content={content} />
    </main>
  );
}
