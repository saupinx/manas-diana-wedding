type WhatsAppOptions = {
  phone?: string;
  name: string;
  date: string;
  venue: string;
  language: "ru" | "kz";
};

export function buildWhatsAppUrl({
  phone,
  date,
  language,
}: WhatsAppOptions) {
  const text =
    language === "kz"
      ? `Манас пен Диананың тойына ${date} күні қатысатынымды растаймын.`
      : `Подтверждаю участие на торжестве Манаса и Дианы ${date}.`;

  const cleanPhone = phone?.replace(/[^\d]/g, "") ?? "";
  const base = cleanPhone ? `https://wa.me/${cleanPhone}` : "https://wa.me/";

  return `${base}?text=${encodeURIComponent(text)}`;
}