import { firebase_prod_asset_download } from "./firebase_prod_asset_download.mjs";
import { firebase_prod_asset_disk_read } from "./firebase_prod_asset_disk_read.mjs";
import { firebase_prod_asset_unchanged_message } from "./firebase_prod_asset_unchanged_message.mjs";
import { equal } from "./equal.mjs";
import { assert_message } from "./assert_message.mjs";
export async function firebase_prod_asset_unchanged_assert(file_name) {
  let prod = await firebase_prod_asset_download(file_name);
  let disk = await firebase_prod_asset_disk_read(file_name);
  let same = equal(prod, disk);
  let message = firebase_prod_asset_unchanged_message(file_name);
  assert_message(same, message);
}
