import { ebible_language_french } from "./ebible_language_french.mjs";
import { app_learn_eng_gloss_french_generate } from "./app_learn_eng_gloss_french_generate.mjs";
import { app_learn_eng_gloss_french_generate_upload_path } from "./app_learn_eng_gloss_french_generate_upload_path.mjs";
import { app_learn_eng_gloss_french_chapters_uploaded } from "./app_learn_eng_gloss_french_chapters_uploaded.mjs";
export function app_learn_eng_gloss_authored_french() {
  "The authored store of English words explained in French - the language, the name its chapters are kept under, where one of them is published, and how to ask which are.";
  "Its own function so that adding a language to the list of authored stores is one call added to that list.";
  let r = {
    language: ebible_language_french(),
    generate: app_learn_eng_gloss_french_generate,
    upload_path: app_learn_eng_gloss_french_generate_upload_path,
    chapters_uploaded: app_learn_eng_gloss_french_chapters_uploaded,
  };
  return r;
}
