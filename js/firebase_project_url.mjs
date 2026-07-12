import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { https_prefix } from "./https_prefix.mjs";
export function firebase_project_url(project_id) {
  let prefix = https_prefix();
  let combined = text_combine_multiple([prefix, project_id, ".web.app"]);
  return combined;
}
