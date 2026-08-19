import { app_shared_bible_languages_chosen_get } from "./app_shared_bible_languages_chosen_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_last } from "./list_last.mjs";
import { ebible_language_bible_folder } from "./ebible_language_bible_folder.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
export function app_shared_bible_folder_reading() {
  "Which bible the reading is being read out of - the last of the chosen languages, which is the one whose wording the readers treat as the spine.";
  "English when nothing is chosen, because that is what a reader who has chosen nothing is being shown anyway.";
  "The last rather than the first because that is what both readers already do with the chosen languages, and a screen that named the book out of one while the verses came out of the other would be the very mismatch this exists to end.";
  let folder = ebible_folder_english();
  let languages = app_shared_bible_languages_chosen_get();
  let chosen_any = list_empty_not_is(languages);
  if (chosen_any) {
    let language = list_last(languages);
    folder = ebible_language_bible_folder(language);
  }
  return folder;
}
