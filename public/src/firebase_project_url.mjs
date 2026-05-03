import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { https_prefix } from "../../../love/public/src/https_prefix.mjs";
export function firebase_project_url(project_id) {
  let prefix = https_prefix();
  let combined = text_combine_multiple([prefix, project_id, ".web.app"]);
  return combined;
}
