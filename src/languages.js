import vi from "./redux/languages/vi.json";
import jp from "./redux/languages/jp.json";
import en from "./redux/languages/en.json";

const languages = {
  vi,
  jp,
  en,
};

export const getTranslation = (language, keyPath) => {
  const keys = keyPath.split(".");
  let translation = languages[language];

  for (const key of keys) {
    translation = translation[key];
    if (!translation) {
      return keyPath;
    }
  }

  return translation;
};
