import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["uk", "de", "en", "pt-BR"],
  defaultLocale: "uk",
  // Always start in the default language (Ukrainian), whatever the browser asks for;
  // the language switcher still changes it per page.
  localeDetection: false,
});

// Anzeigename je Sprache, in der jeweiligen Sprache selbst.
export const localeLabels: Record<(typeof routing.locales)[number], string> = {
  uk: "Українська",
  de: "Deutsch",
  en: "English",
  "pt-BR": "Português (Brasil)",
};
