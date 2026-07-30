import { firebase_prod_app_names } from "./firebase_prod_app_names.mjs";
import { firebase_prod_app_asset_file_names } from "./firebase_prod_app_asset_file_names.mjs";
import { list_map_squash } from "./list_map_squash.mjs";
export async function firebase_prod_apps_asset_file_names() {
  "every file that goes live, for every page that goes live. asking the served folder itself for the list means a newly added page is covered the day it is added, with nobody remembering to name it here";
  let app_names = await firebase_prod_app_names();
  let file_names = list_map_squash(
    app_names,
    firebase_prod_app_asset_file_names,
  );
  return file_names;
}
