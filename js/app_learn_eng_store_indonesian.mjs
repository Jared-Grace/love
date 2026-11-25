import { ebible_language_indonesian } from "./ebible_language_indonesian.mjs";
import { app_learn_eng_gloss_indonesian_generate_download } from "./app_learn_eng_gloss_indonesian_generate_download.mjs";
import { app_learn_eng_gloss_indonesian_chapters_uploaded } from "./app_learn_eng_gloss_indonesian_chapters_uploaded.mjs";
export function app_learn_eng_store_indonesian() {
  "Everything this app knows about explaining English in Indonesian, in one place - the language, its name and its question as Indonesian readers write them, and how to fetch its explanations.";
  "One function per language, so a new language is one more function shaped like this one, and every screen that offers languages reads it from here rather than each keeping its own list to forget.";
  let r = {
    language: ebible_language_indonesian(),
    name_own: "Bahasa Indonesia",
    language_choose: "Pilih bahasa yang kamu gunakan",
    title: "Belajar bahasa Inggris",
    download: app_learn_eng_gloss_indonesian_generate_download,
    chapters_uploaded: app_learn_eng_gloss_indonesian_chapters_uploaded,
    description:
      "Baca satu ayat Alkitab dalam bahasa Indonesia, lalu dalam bahasa Inggris, dengan setiap kata bahasa Inggris dijelaskan dalam bahasa Indonesia.",
  };
  return r;
}
