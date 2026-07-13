import { firebase_project_url_jg } from "./firebase_project_url_jg.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function firebase_prod_asset_url(file_name) {
  let base = firebase_project_url_jg();
  let combined = text_combine_multiple([base, "/", file_name]);
  return combined;
}
