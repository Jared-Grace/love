import { firebase_project_url } from "../../../love/public/src/firebase_project_url.mjs";
import { firebase_project_name_jg } from "../../../love/public/src/firebase_project_name_jg.mjs";
export function firebase_url_jg() {
  let project_id = firebase_project_name_jg();
  let combined = firebase_project_url(project_id);
  return combined;
}
