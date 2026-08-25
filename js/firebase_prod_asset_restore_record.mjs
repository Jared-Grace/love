import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_prod_asset_disk_hash_or_null } from "./firebase_prod_asset_disk_hash_or_null.mjs";
import { equal } from "./equal.mjs";
import { firebase_prod_asset_download } from "./firebase_prod_asset_download.mjs";
import { firebase_prod_asset_disk_write } from "./firebase_prod_asset_disk_write.mjs";
import { text_hash } from "./text_hash.mjs";
import { not } from "./not.mjs";
export async function firebase_prod_asset_restore_record(file_name, want) {
  "$plain file_name";
  "$plain want";
  "Puts one served piece back on the disk unless what is already there is it, and answers with the piece's name and what happened to it.";
  "A piece already matching is left alone rather than fetched again, so asking for this twice costs almost nothing and the second answer is the proof the first one worked.";
  "A piece that comes down not matching what was written about it is still kept, and said to have moved. What is live has moved since anybody looked, and what is live is the thing being copied - so the copy is right and the record is what has fallen behind. A piece that moved was still fetched, so the two words are not alternatives to each other.";
  arguments_assert(arguments, 2);
  let disk = await firebase_prod_asset_disk_hash_or_null(file_name);
  let same = equal(disk, want);
  if (same) {
    let untouched = {
      file_name,
      fetched: false,
      moved: false,
    };
    return untouched;
  }
  let text = await firebase_prod_asset_download(file_name);
  await firebase_prod_asset_disk_write(file_name, text);
  let came = text_hash(text);
  let expected = equal(came, want);
  let moved = not(expected);
  let record = {
    file_name,
    fetched: true,
    moved,
  };
  return record;
}
