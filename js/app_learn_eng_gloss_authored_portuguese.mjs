import { ebible_language_portuguese } from "./ebible_language_portuguese.mjs";
import { app_learn_eng_gloss_portuguese_generate } from "./app_learn_eng_gloss_portuguese_generate.mjs";
import { app_learn_eng_gloss_portuguese_generate_upload_path } from "./app_learn_eng_gloss_portuguese_generate_upload_path.mjs";
import { app_learn_eng_gloss_portuguese_chapters_uploaded } from "./app_learn_eng_gloss_portuguese_chapters_uploaded.mjs";
export function app_learn_eng_gloss_authored_portuguese() {
  "The authored store of English words explained in Portuguese - the language, the name its chapters are kept under, where one of them is published, and how to ask which are.";
  "Its own function so that adding a language to the list of authored stores is one call added to that list.";
  let r = {
    language: ebible_language_portuguese(),
    generate: app_learn_eng_gloss_portuguese_generate,
    upload_path: app_learn_eng_gloss_portuguese_generate_upload_path,
    chapters_uploaded: app_learn_eng_gloss_portuguese_chapters_uploaded,
  };
  return r;
}
