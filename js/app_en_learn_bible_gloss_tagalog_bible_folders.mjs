import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_folder_tagalog } from "./ebible_folder_tagalog.mjs";
export function app_en_learn_bible_gloss_tagalog_bible_folders() {
  "The two Bibles a Tagalog reader learning English is shown - the English text the words are explained from, and the Tagalog text read beside it.";
  "English comes first because the explanations are about the English wording, and everything that checks an explanation against its passage takes the first text.";
  let bible_folder_english = ebible_folder_english();
  let bible_folder_tagalog = ebible_folder_tagalog();
  let bible_folders = [bible_folder_english, bible_folder_tagalog];
  return bible_folders;
}
