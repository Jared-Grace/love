import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_folder_urdu } from "./ebible_folder_urdu.mjs";
export function urdu_bible_gloss_bible_folders() {
  "The two Bibles an Urdu reader learning English is shown - the English text the words are explained from, and the Urdu text read beside it.";
  "English comes first because the explanations are about the English wording, and everything that checks an explanation against its passage takes the first text.";
  let bible_folder_english = ebible_folder_english();
  let bible_folder_urdu = ebible_folder_urdu();
  let bible_folders = [bible_folder_english, bible_folder_urdu];
  return bible_folders;
}
