import { global_function_property_initialize_async } from "./global_function_property_initialize_async.mjs";
import { firebase_storage_download_json_decompress } from "./firebase_storage_download_json_decompress.mjs";
export async function global_firebase_storage_download_json_decompress(
  fn,
  destination_get,
  property_name,
  project_url,
) {
  ("two layers, and each answers a question the other cannot. this one remembers within a visit, so asking twice costs nothing at all; the one it calls remembers across visits, so arriving fresh costs no round trip either");
  async function get() {
    let destination = destination_get(property_name);
    let o = await firebase_storage_download_json_decompress_cache(
      project_url,
      destination,
    );
    return o;
  }
  let value = await global_function_property_initialize_async(
    fn,
    property_name,
    get,
  );
  return value;
}
