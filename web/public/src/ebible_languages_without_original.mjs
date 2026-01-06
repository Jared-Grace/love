import { list_remove_property } from "../../../love/public/src/list_remove_property.mjs";
import { bible_interlinear_verses_upload_folder } from "../../../love/public/src/bible_interlinear_verses_upload_folder.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
export function ebible_languages_without_original() {
  let languages = ebible_languages();
  let original = bible_interlinear_verses_upload_folder();
  list_remove_property(languages, "language_code", original);
  return languages;
}
