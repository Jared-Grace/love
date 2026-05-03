import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { https_prefix } from "../../../love/public/src/https_prefix.mjs";
import { firebase_project_name_jg } from "../../../love/public/src/firebase_project_name_jg.mjs";
export function firebase_url_jg() {
  let project_id = firebase_project_name_jg();
  let prefix = https_prefix();
  let combined = text_combine_multiple([prefix, project_id, ".web.app"]);
  return combined;
}
