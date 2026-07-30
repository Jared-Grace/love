import { apps_names } from "./apps_names.mjs";
import { firebase_prod_app_asset_file_names } from "./firebase_prod_app_asset_file_names.mjs";
import { list_map_squash } from "./list_map_squash.mjs";
export async function firebase_prod_apps_asset_file_names() {
  "every file that goes live, for every app there is. asking the public folder itself for the app list means a newly added app is covered the day it is added, with nobody remembering to name it here";
  let app_names = await apps_names();
  let file_names = list_map_squash(
    app_names,
    firebase_prod_app_asset_file_names,
  );
  return file_names;
}
