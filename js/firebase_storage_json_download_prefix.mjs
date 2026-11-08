import { firebase_bucket } from "./firebase_bucket.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function firebase_storage_json_download_prefix(prefix) {
  "every json file in storage whose address starts with the opening given, read back through the signed-in handle that listed it";
  "Through that handle rather than a public address, because what sits under a person's own uploads is not readable to the public - a public read lists every file and opens none.";
  let bucket = await firebase_bucket();
  let [files] = await bucket.getFiles({
    prefix,
  });
  async function lambda(item) {
    let [buffer] = await item.download();
    let o = buffer_to_json(buffer);
    return o;
  }
  let downloads = await list_map_unordered_async(files, lambda);
  return downloads;
}
