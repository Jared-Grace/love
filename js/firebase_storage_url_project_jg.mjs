import { firebase_storage_url_project } from "./firebase_storage_url_project.mjs";
import { firebase_project_name_jg } from "./firebase_project_name_jg.mjs";
export function firebase_storage_url_project_jg() {
  let project_name = firebase_project_name_jg();
  let project_url = firebase_storage_url_project(project_name);
  return project_url;
}
