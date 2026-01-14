import { marker } from "../../../love/public/src/marker.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { global_function_property_initialize_async } from "../../../love/public/src/global_function_property_initialize_async.mjs";
import { firebase_storage_download_ebible } from "../../../love/public/src/firebase_storage_download_ebible.mjs";
export async function firebase_storage_download_ebible_cache(
  fn,
  bible_folder,
  file_name,
) {
  marker("1");
  async function get() {
    log({});
    let v = await firebase_storage_download_ebible(bible_folder, file_name);
    return v;
  }
  let value = await global_function_property_initialize_async(
    fn,
    bible_folder,
    get,
  );
  return value;
}
