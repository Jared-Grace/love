import { ebible_language_original_code } from "../../../love/public/src/ebible_language_original_code.mjs";
import { bible_interlinear_verses_upload_folder } from "../../../love/public/src/bible_interlinear_verses_upload_folder.mjs";
import { ebible_language_original_name } from "../../../love/public/src/ebible_language_original_name.mjs";
export function ebible_language_original() {
  let v = {
    name: ebible_language_original_name(),
    bible_folder: bible_interlinear_verses_upload_folder(),
    language_code: ebible_language_original_code(),
  };
  return v;
}
