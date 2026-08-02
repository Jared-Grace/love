import { firebase_storage_download_json } from "./firebase_storage_download_json.mjs";
import { json_decompress_object_if_compressed } from "./json_decompress_object_if_compressed.mjs";
export async function firebase_storage_download_json_decompress_if_compressed(
  project_url,
  destination,
) {
  "Reads one stored file and gives back what it holds, whichever way it was written.";
  let c = await firebase_storage_download_json(project_url, destination);
  let o = await json_decompress_object_if_compressed(c);
  return o;
}
