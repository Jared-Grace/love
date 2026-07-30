import { firebase_prod_apps_asset_file_names } from "./firebase_prod_apps_asset_file_names.mjs";
import { firebase_prod_asset_unchanged_record } from "./firebase_prod_asset_unchanged_record.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function firebase_prod_apps_unchanged_report() {
  "which live files still match disk, for the whole public folder at once. a check that throws stops at the first difference and so can never say whether the rest of them shipped, and asking about one app at a time costs the human a click per app. after a push that a peer may have carried on our behalf, the whole picture in one answer is the thing worth having";
  let file_names = await firebase_prod_apps_asset_file_names();
  let records = await list_map_unordered_async(
    file_names,
    firebase_prod_asset_unchanged_record,
  );
  return records;
}
