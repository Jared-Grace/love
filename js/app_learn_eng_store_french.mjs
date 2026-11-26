import { ebible_language_french } from "./ebible_language_french.mjs";
import { app_learn_eng_gloss_french_generate_download } from "./app_learn_eng_gloss_french_generate_download.mjs";
import { app_learn_eng_gloss_french_chapters_uploaded } from "./app_learn_eng_gloss_french_chapters_uploaded.mjs";
export function app_learn_eng_store_french() {
  "Everything this app knows about explaining English in French, in one place - the language, its name and its question as French readers write them, and how to fetch its explanations.";
  "One function per language, so a new language is one more function shaped like this one, and every screen that offers languages reads it from here rather than each keeping its own list to forget.";
  let r = {
    language: ebible_language_french(),
    name_own: "Français",
    language_choose: "Choisissez la langue que vous parlez",
    title: "Apprendre l'anglais",
    download: app_learn_eng_gloss_french_generate_download,
    chapters_uploaded: app_learn_eng_gloss_french_chapters_uploaded,
    description:
      "Lisez un verset de la Bible en français, puis en anglais, avec chaque mot anglais expliqué en français.",
  };
  return r;
}
