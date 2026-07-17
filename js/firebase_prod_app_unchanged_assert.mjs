import { firebase_prod_app_asset_file_names } from "./firebase_prod_app_asset_file_names.mjs";
import { firebase_prod_asset_unchanged_assert } from "./firebase_prod_asset_unchanged_assert.mjs";
import { each_async } from "./each_async.mjs";
export async function firebase_prod_app_unchanged_assert(app_name) {
  let assets = firebase_prod_app_asset_file_names(app_name);
  await each_async(assets, firebase_prod_asset_unchanged_assert);
}
