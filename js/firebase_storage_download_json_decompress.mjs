import { json_decompress_object } from "./json_decompress_object.mjs";
import { firebase_storage_download_json } from "./firebase_storage_download_json.mjs";
export async function firebase_storage_download_json_decompress(
  project_url,
  destination,
) {
  "The JSON kept at a name in storage, unpacked - what is sent there is squeezed small, so what comes back off the wire is not yet the thing it spells.";
  let c = await firebase_storage_download_json(project_url, destination);
  let o = await json_decompress_object(c);
  return o;
}
