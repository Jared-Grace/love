import { firebase_prod_asset_unchanged_is } from "./firebase_prod_asset_unchanged_is.mjs";
export async function firebase_prod_asset_unchanged_record(file_name) {
  let unchanged = await firebase_prod_asset_unchanged_is(file_name);
  let record = { file_name, unchanged };
  return record;
}
