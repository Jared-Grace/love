import { ebible_language_original_name } from "../../../love/public/src/ebible_language_original_name.mjs";
import { ebible_language_en_name } from "../../../love/public/src/ebible_language_en_name.mjs";
import { bible_interlinear_verses_upload_folder } from "../../../love/public/src/bible_interlinear_verses_upload_folder.mjs";
export function app_reply_languages_default() {
  let original = bible_interlinear_verses_upload_folder();
  let v2 = ebible_language_en_name();
  let v = ebible_language_original_name();
  let v4 = [v2, v];
  return v4;
}
