import { bible_interlinear_verses_upload_folder } from "../../../love/public/src/bible_interlinear_verses_upload_folder.mjs";
export function app_reply_languages_default() {
  let original = bible_interlinear_verses_upload_folder();
  let v4 = ["en", original];
  return v4;
}
