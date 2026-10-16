import { firebase_storage_stored } from "./firebase_storage_stored.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { firebase_storage_download_json_jg_decompress } from "./firebase_storage_download_json_jg_decompress.mjs";
import { firebase_upload_object_compressed_md5 } from "./firebase_upload_object_compressed_md5.mjs";
import { equal } from "./equal.mjs";
export async function firebase_upload_object_compressed_md5_check(prefix) {
  "$plain prefix";
  "Reads a few files the compressed upload already wrote under a prefix, works out the checksum writing each again would give, and says whether it matches the one storage holds.";
  "A match on every one is the proof that skipping a file storage already holds skips only files that writing again would leave as they are. A mismatch means the skip never fires - safe, but nothing saved.";
  let stored = await firebase_storage_stored(prefix);
  let names = object_property_names(stored).slice(0, 5);
  let checked = [];
  for (let name of names) {
    let value = await firebase_storage_download_json_jg_decompress(name);
    let computed = await firebase_upload_object_compressed_md5(value);
    let kept = stored[name];
    checked.push({
      name,
      same: equal(computed, kept.md5),
      kept,
      computed,
    });
  }
  let r = {
    files: object_property_names(stored).length,
    checked,
  };
  return r;
}
