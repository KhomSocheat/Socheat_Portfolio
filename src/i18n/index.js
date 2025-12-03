import { createI18n } from "vue-i18n";
import en from "./en.json";
import km from "./km.json";
const i18n = createI18n({
  legacy: false,
  locale: "km",     // default language
  fallbackLocale: "km",
  messages: {
    en,
    km,
  },
});

export default i18n;
