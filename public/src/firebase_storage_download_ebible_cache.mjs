import { global_function_property_initialize_async } from "../../../love/public/src/global_function_property_initialize_async.mjs";
import { firebase_storage_download_ebible } from "../../../love/public/src/firebase_storage_download_ebible.mjs";
export async function firebase_storage_download_ebible_cache(
  bible_folder,
  file_name2,
  fn,
) {
  async function lambda2() {
    let v = await firebase_storage_download_ebible(bible_folder, file_name2);
    return v;
  }
  let value = await global_function_property_initialize_async(
    fn,
    bible_folder,
    lambda2,
  );
  return value;
}
