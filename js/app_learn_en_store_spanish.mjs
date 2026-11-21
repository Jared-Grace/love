import { ebible_language_spanish } from "./ebible_language_spanish.mjs";
import { app_learn_en_gloss_spanish_generate_download } from "./app_learn_en_gloss_spanish_generate_download.mjs";
import { app_learn_en_gloss_spanish_chapters_uploaded } from "./app_learn_en_gloss_spanish_chapters_uploaded.mjs";
export function app_learn_en_store_spanish() {
  "Everything this app knows about explaining English in Spanish, in one place - the language, its name and its question as Spanish readers write them, and how to fetch its explanations.";
  "One function per language, so a new language is one more function shaped like this one, and every screen that offers languages reads it from here rather than each keeping its own list to forget.";
  let r = {
    language: ebible_language_spanish(),
    name_own: "Español",
    language_choose: "Elige el idioma que hablas",
    download: app_learn_en_gloss_spanish_generate_download,
    chapters_uploaded: app_learn_en_gloss_spanish_chapters_uploaded,
  };
  return r;
}
