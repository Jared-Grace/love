import { global_function_property_initialize_async } from "../../../love/public/src/global_function_property_initialize_async.mjs";
import { firebase_storage_download_json_decompress } from "../../../love/public/src/firebase_storage_download_json_decompress.mjs";
export async function global_firebase_storage_download_json_decompress(
  fn,
  destination_get,
  property_name,
) {
  async function get() {
    let destination = destination_get(property_name);
    let o = await firebase_storage_download_json_decompress(destination);
    return o;
  }
  let value = await global_function_property_initialize_async(
    fn,
    property_name,
    get,
  );
  return value;
}
