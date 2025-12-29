import { ebible_language_original_name } from "../../../love/public/src/ebible_language_original_name.mjs";
import { ebible_language_en_name } from "../../../love/public/src/ebible_language_en_name.mjs";
export function app_reply_languages_default() {
  let v2 = ebible_language_en_name();
  let v = ebible_language_original_name();
  let ds = [v2, v];
  return ds;
}
