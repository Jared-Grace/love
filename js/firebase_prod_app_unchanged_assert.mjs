import { file_name_html } from "./file_name_html.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { firebase_prod_asset_unchanged_assert } from "./firebase_prod_asset_unchanged_assert.mjs";
import { each_async } from "./each_async.mjs";
export async function firebase_prod_app_unchanged_assert(app_name) {
  let html = file_name_html(app_name);
  let js = file_name_js(app_name);
  let assets = [html, js];
  await each_async(assets, firebase_prod_asset_unchanged_assert);
}
