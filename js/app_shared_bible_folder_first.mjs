import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { app_shared_bible_languages_chosen_get } from "./app_shared_bible_languages_chosen_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_first } from "./list_first.mjs";
import { ebible_language_bible_folder } from "./ebible_language_bible_folder.mjs";
export function app_shared_bible_folder_first() {
  "Which bible the first of the chosen languages is - the one a recording draws its words and reference from (human 2026-11-24: use the first language chosen, to support other languages). English when nothing is chosen, because that is what a reader who has chosen nothing is being shown anyway.";
  "REJECTED: the last chosen, which is what the readers treat as the spine (app_shared_bible_folder_reading) - the human asked for the first.";
  let folder = ebible_folder_english();
  let languages = app_shared_bible_languages_chosen_get();
  if (list_empty_not_is(languages)) {
    let language = list_first(languages);
    folder = ebible_language_bible_folder(language);
  }
  return folder;
}
