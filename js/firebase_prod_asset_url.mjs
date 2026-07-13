import { firebase_project_url_jg } from "./firebase_project_url_jg.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
export function firebase_prod_asset_url(file_name) {
  let base = firebase_project_url_jg();
  let combined = list_join_slash_forward([base, file_name]);
  return combined;
}
