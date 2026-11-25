import { ebible_language_indonesian } from "./ebible_language_indonesian.mjs";
import { app_learn_eng_gloss_indonesian_generate } from "./app_learn_eng_gloss_indonesian_generate.mjs";
import { app_learn_eng_gloss_indonesian_generate_upload_path } from "./app_learn_eng_gloss_indonesian_generate_upload_path.mjs";
import { app_learn_eng_gloss_indonesian_chapters_uploaded } from "./app_learn_eng_gloss_indonesian_chapters_uploaded.mjs";
export function app_learn_eng_gloss_authored_indonesian() {
  "The authored store of English words explained in Indonesian - the language, the name its chapters are kept under, where one of them is published, and how to ask which are.";
  "Its own function so that adding a language to the list of authored stores is one call added to that list.";
  let r = {
    language: ebible_language_indonesian(),
    generate: app_learn_eng_gloss_indonesian_generate,
    upload_path: app_learn_eng_gloss_indonesian_generate_upload_path,
    chapters_uploaded: app_learn_eng_gloss_indonesian_chapters_uploaded,
  };
  return r;
}
