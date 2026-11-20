import { app_learn_en_gloss_authored_get } from "./app_learn_en_gloss_authored_get.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
export function app_learn_en_gloss_bible_folders(language_code) {
  "The two Bibles a reader learning English is shown - the English text the words are explained from, and the text in the reader's own language read beside it.";
  "English comes first because the explanations are about the English wording, and everything that checks an explanation against its passage takes the first text.";
  "$plain language_code";
  "the code is a language's short name, like tgl or es. It picks an entry from a fixed list and nothing that runs.";
  let store = app_learn_en_gloss_authored_get(language_code);
  let language = property_get(store, "language");
  let bible_folder_english = ebible_folder_english();
  let bible_folder_reader = property_get(language, "bible_folder");
  let bible_folders = [bible_folder_english, bible_folder_reader];
  return bible_folders;
}
