import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_list } from "./firebase_storage_list.mjs";
export async function firebase_storage_list_jg(prefix) {
  "Every name this project's bucket holds under a prefix.";
  let project_url = firebase_storage_url_project_jg();
  let names = await firebase_storage_list(project_url, prefix);
  return names;
}
