import { json_decompress_object } from "../../../love/public/src/json_decompress_object.mjs";
import { firebase_storage_download_json } from "../../../love/public/src/firebase_storage_download_json.mjs";
export async function firebase_storage_download_json_decompress(destination) {
  let c = await firebase_storage_download_json(destination);
  let o = await json_decompress_object(c);
  return o;
}
