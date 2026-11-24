import { ebible_language_portuguese } from "./ebible_language_portuguese.mjs";
import { app_learn_eng_gloss_portuguese_generate_download } from "./app_learn_eng_gloss_portuguese_generate_download.mjs";
import { app_learn_eng_gloss_portuguese_chapters_uploaded } from "./app_learn_eng_gloss_portuguese_chapters_uploaded.mjs";
export function app_learn_eng_store_portuguese() {
  "Everything this app knows about explaining English in Portuguese, in one place - the language, its name and its question as Portuguese readers write them, and how to fetch its explanations.";
  "One function per language, so a new language is one more function shaped like this one, and every screen that offers languages reads it from here rather than each keeping its own list to forget.";
  let r = {
    language: ebible_language_portuguese(),
    name_own: "Português",
    language_choose: "Escolha o idioma que você fala",
    title: "Aprenda inglês",
    download: app_learn_eng_gloss_portuguese_generate_download,
    chapters_uploaded: app_learn_eng_gloss_portuguese_chapters_uploaded,
    description:
      "Leia um versículo da Bíblia em português e depois em inglês, com cada palavra em inglês explicada em português.",
  };
  return r;
}
