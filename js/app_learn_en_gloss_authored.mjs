import { ebible_language_tagalog } from "./ebible_language_tagalog.mjs";
import { app_learn_en_gloss_tagalog_generate } from "./app_learn_en_gloss_tagalog_generate.mjs";
import { app_learn_en_gloss_tagalog_generate_upload_path } from "./app_learn_en_gloss_tagalog_generate_upload_path.mjs";
import { ebible_language_spanish } from "./ebible_language_spanish.mjs";
import { app_learn_en_gloss_spanish_generate } from "./app_learn_en_gloss_spanish_generate.mjs";
import { app_learn_en_gloss_spanish_generate_upload_path } from "./app_learn_en_gloss_spanish_generate_upload_path.mjs";
export function app_learn_en_gloss_authored() {
  "Every store of English words explained by hand in a reader's own language - the language, the name its store is kept under, and where one of its chapters is published.";
  "One list so that the commands an author runs are written once and handed a language code, instead of a copy of every command for every language. A new language is one more entry here plus the few names that must differ per language: the folder its chapters are kept in, and its published address.";
  "Urdu is not here: its explanations travel by a pipeline of their own.";
  let tagalog = {
    language: ebible_language_tagalog(),
    generate: app_learn_en_gloss_tagalog_generate,
    upload_path: app_learn_en_gloss_tagalog_generate_upload_path,
  };
  let spanish = {
    language: ebible_language_spanish(),
    generate: app_learn_en_gloss_spanish_generate,
    upload_path: app_learn_en_gloss_spanish_generate_upload_path,
  };
  let r = [tagalog, spanish];
  return r;
}
