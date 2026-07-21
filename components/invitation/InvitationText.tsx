import type { InvitationContent } from "@/data/invitation";
import { FloralDecor } from "./FloralDecor";
import { FloralDivider } from "./FloralDivider";

export function InvitationText({ content }: { content: InvitationContent }) {
  return (
    <section className="invitation-section reveal-section relative -mt-24 overflow-hidden px-5 py-12 text-center">
      <FloralDecor variant="peony" className="floral-invitation-peony" />
      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-neutral-600">
          {content.labels.invitation}
        </p>
        <FloralDivider />
        <p className="font-serif text-[28px] font-semibold uppercase leading-[1.62] tracking-[0.08em] text-black drop-shadow-[0_8px_18px_rgba(0,0,0,0.035)]">
          {content.invitationText}
        </p>
      </div>
    </section>
  );
}