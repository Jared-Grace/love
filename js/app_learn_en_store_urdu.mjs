import { ebible_language_urdu } from "./ebible_language_urdu.mjs";
import { app_learn_en_gloss_urdu_generate_download } from "./app_learn_en_gloss_urdu_generate_download.mjs";
import { app_learn_en_gloss_urdu_chapters_uploaded } from "./app_learn_en_gloss_urdu_chapters_uploaded.mjs";
export function app_learn_en_store_urdu() {
  "Everything this app knows about explaining English in Urdu, in one place - the language, its name and its question as Urdu readers write them, and how to fetch its explanations.";
  "One function per language, so a new language is one more function shaped like this one, and every screen that offers languages reads it from here rather than each keeping its own list to forget.";
  let r = {
    language: ebible_language_urdu(),
    name_own: "اردو",
    language_choose: "اپنی زبان منتخب کریں",
    title: "انگریزی سیکھیں",
    download: app_learn_en_gloss_urdu_generate_download,
    chapters_uploaded: app_learn_en_gloss_urdu_chapters_uploaded,
  };
  return r;
}
