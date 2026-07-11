import { storage_local_exists_not_context } from "../../../love/public/src/storage_local_exists_not_context.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { ebible_language_english } from "../../../love/public/src/ebible_language_english.mjs";
export function app_bible_languages_chosen_get(context) {
  let key = "languages_chosen";
  let n = storage_local_exists_not_context(context, key);
  if (n) {
    let en_l = ebible_language_english();
    let languages_chosen_default = [en_l];
    storage_local_set_context(context, key, languages_chosen_default);
  }
  let languages_chosen = storage_local_get_context(context, key);
  return languages_chosen;
}
