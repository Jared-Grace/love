import { firebase_prod_asset_unchanged_is } from "./firebase_prod_asset_unchanged_is.mjs";
import { firebase_prod_asset_unchanged_message } from "./firebase_prod_asset_unchanged_message.mjs";
import { assert_message } from "./assert_message.mjs";
export async function firebase_prod_asset_unchanged_assert(file_name) {
  let same = await firebase_prod_asset_unchanged_is(file_name);
  let message = firebase_prod_asset_unchanged_message(file_name);
  assert_message(same, message);
}
