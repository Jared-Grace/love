import { file_name_html } from "./file_name_html.mjs";
import { file_name_js } from "./file_name_js.mjs";
export function firebase_prod_app_asset_file_names(app_name) {
  let html = file_name_html(app_name);
  let js = file_name_js(app_name);
  let file_names = [html, js];
  return file_names;
}
