import { firebase_storage_url_project } from "../../../love/public/src/firebase_storage_url_project.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
export function firebase_storage_url_project_jg() {
  let project_name = firebase_name_jg();
  let project_url = firebase_storage_url_project(project_name);
  return project_url;
}
