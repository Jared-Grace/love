import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_prod_asset_disk_hash_or_null } from "./firebase_prod_asset_disk_hash_or_null.mjs";
import { equal } from "./equal.mjs";
import { firebase_prod_asset_disk_read } from "./firebase_prod_asset_disk_read.mjs";
import { firebase_prod_asset_download } from "./firebase_prod_asset_download.mjs";
export async function firebase_prod_asset_text(file_name, want) {
  "$plain file_name";
  "$plain want";
  "What one served piece says - taken off the disk when the disk already holds that very piece, and off the wire when it does not.";
  "Nothing is written here. This is for a reader that has to look inside a piece before anybody decides what to do with it, and the deciding belongs to whoever asked - a reader that also wrote would leave the disk changed by a question.";
  "The disk copy is trusted only where it comes to what was written about the served one, so a copy left over from an older build is never mistaken for what is live.";
  arguments_assert(arguments, 2);
  let disk = await firebase_prod_asset_disk_hash_or_null(file_name);
  let same = equal(disk, want);
  if (same) {
    let held = await firebase_prod_asset_disk_read(file_name);
    return held;
  }
  let text = await firebase_prod_asset_download(file_name);
  return text;
}
