import { ebible_language_original } from "../../../love/public/src/ebible_language_original.mjs";
import { ebible_language_english } from "../../../love/public/src/ebible_language_english.mjs";
export function app_reply_languages_chosen_default() {
  let en_l = ebible_language_english();
  let o = ebible_language_original();
  let languages_chosen_default = [o, en_l];
  return languages_chosen_default;
}
