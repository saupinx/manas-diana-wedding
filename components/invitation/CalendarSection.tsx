import type { InvitationContent } from "@/data/invitation";
import { FloralDecor } from "./FloralDecor";

type CalendarSectionProps = {
  content: InvitationContent;
  calendarUrl: string;
};

const days = Array.from({ length: 31 }, (_, index) => index + 1);

export function CalendarSection({
  content,
  calendarUrl,
}: CalendarSectionProps) {
  return (
    <section className="reveal-section relative overflow-hidden px-5 py-7 text-center">
      <FloralDecor
        variant="sideBorder"
        className="floral-calendar-border"
      />

      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-neutral-600">
          {content.labels.calendar}
        </p>

        <div className="premium-card mt-6 overflow-hidden rounded-[28px] p-5">
          <div className="relative z-10">
            <div className="flex items-end justify-between border-b border-neutral-200 pb-4">
              <span className="font-serif text-4xl text-black">
                10
              </span>

              <span className="text-right text-xs font-semibold uppercase tracking-[0.28em] text-neutral-600">
                08
                <br />
                2026
              </span>
            </div>

            <div className="mt-5 grid grid-cols-7 gap-1 text-center text-xs text-neutral-500">
              {["M", "T", "W", "T", "F", "S", "S"].map(
                (day, index) => (
                  <span
                    key={`${day}-${index}`}
                    className="py-2"
                  >
                    {day}
                  </span>
                ),
              )}

              {Array.from({ length: 5 }).map((_, index) => (
                <span key={`blank-${index}`} />
              ))}

              {days.map((day) => (
                <span
                  key={day}
                  className={`calendar-day grid aspect-square place-items-center rounded-full ${
                    day === 10
                      ? "bg-black font-semibold text-white shadow-[0_10px_20px_rgba(0,0,0,0.18)]"
                      : "text-neutral-700"
                  }`}
                >
                  {day}
                </span>
              ))}
            </div>

            <a
              href={calendarUrl}
              target="_blank"
              rel="noreferrer"
              className="premium-button mt-6 inline-flex h-12 w-full items-center justify-center rounded-full px-5 text-sm font-semibold uppercase tracking-[0.18em] text-white"
            >
              {content.labels.addToCalendar}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}