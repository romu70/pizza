import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  // console.log("url: ", url);
  // It'll need some rework when the site gets published with the final domain name.
  // TODO
  const [, , lang] = url.pathname.split("/");
  // console.log("lang: ", lang);
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
