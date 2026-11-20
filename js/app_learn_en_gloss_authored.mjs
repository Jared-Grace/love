import { ebible_language_tagalog } from "./ebible_language_tagalog.mjs";
import { app_learn_en_gloss_tagalog_generate } from "./app_learn_en_gloss_tagalog_generate.mjs";
import { app_learn_en_gloss_tagalog_generate_upload_path } from "./app_learn_en_gloss_tagalog_generate_upload_path.mjs";
import { app_learn_en_gloss_tagalog_chapters_uploaded } from "./app_learn_en_gloss_tagalog_chapters_uploaded.mjs";
import { ebible_language_spanish } from "./ebible_language_spanish.mjs";
import { app_learn_en_gloss_spanish_generate } from "./app_learn_en_gloss_spanish_generate.mjs";
import { app_learn_en_gloss_spanish_generate_upload_path } from "./app_learn_en_gloss_spanish_generate_upload_path.mjs";
import { app_learn_en_gloss_spanish_chapters_uploaded } from "./app_learn_en_gloss_spanish_chapters_uploaded.mjs";
export function app_learn_en_gloss_authored() {
  "Every store of English words explained by hand in a reader's own language - the language, the name its store is kept under, where one of its chapters is published, and how to ask which chapters are.";
  "One list so that the commands an author runs are written once and handed a language code, instead of a copy of every command for every language. A new language is one more entry here plus the few names that must differ per language: the folder its chapters are kept in, its published address, and the two the reader's page asks by name.";
  "Urdu is not here: its explanations travel by a pipeline of their own.";
  let tagalog = {
    language: ebible_language_tagalog(),
    generate: app_learn_en_gloss_tagalog_generate,
    upload_path: app_learn_en_gloss_tagalog_generate_upload_path,
    chapters_uploaded: app_learn_en_gloss_tagalog_chapters_uploaded,
  };
  let spanish = {
    language: ebible_language_spanish(),
    generate: app_learn_en_gloss_spanish_generate,
    upload_path: app_learn_en_gloss_spanish_generate_upload_path,
    chapters_uploaded: app_learn_en_gloss_spanish_chapters_uploaded,
  };
  let r = [tagalog, spanish];
  return r;
}
