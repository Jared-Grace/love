import { ebible_language_original } from "../../../love/public/src/ebible_language_original.mjs";
import { ebible_language_en } from "../../../love/public/src/ebible_language_en.mjs";
export function app_reply_languages_default() {
  let v2 = ebible_language_en();
  let v = ebible_language_original();
  let ds = [v2, v];
  return ds;
}
