import { firebase_prod_app_asset_file_names } from "./firebase_prod_app_asset_file_names.mjs";
import { firebase_prod_asset_unchanged_assert } from "./firebase_prod_asset_unchanged_assert.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function firebase_prod_app_unchanged_assert(app_name) {
  "Refuses a deploy that would alter anything already live for one frozen app, checking every file that app ships.";
  let assets = await firebase_prod_app_asset_file_names(app_name);
  await list_map_unordered_async(assets, firebase_prod_asset_unchanged_assert);
}
