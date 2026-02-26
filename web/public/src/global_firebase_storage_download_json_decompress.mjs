import { error } from "../../../love/public/src/error.mjs";
import { global_function_property_initialize_async } from "../../../love/public/src/global_function_property_initialize_async.mjs";
import { firebase_storage_download_json_decompress } from "../../../love/public/src/firebase_storage_download_json_decompress.mjs";
export async function global_firebase_storage_download_json_decompress(
  fn,
  destination_get,
  property_name,
) {
  async function get() {
    let destination = destination_get(property_name);
    let destination2 = error();
    let o = await firebase_storage_download_json_decompress(
      destination,
      destination2,
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
