import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  // console.log("url: ", url.href);
  const [, lang] = url.pathname.split("/");
  // console.log("lang: ", lang);
  if (lang in ui) {
    let val = lang as keyof typeof ui;
    // console.log("val: ", val);
    return val;
  } else {
    return defaultLang;
  }
}

export function useTranslations(lang: keyof typeof ui) {
  // console.log("useTranslations: ", lang);
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
