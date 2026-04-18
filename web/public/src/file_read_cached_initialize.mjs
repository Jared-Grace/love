import { property_get } from "../../../love/public/src/property_get.mjs";
import { global_function_property_lambda_info_async } from "../../../love/public/src/global_function_property_lambda_info_async.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
export async function file_read_cached_initialize(f_path) {
  async function lambda2() {
    let contents = await file_read(f_path);
    return contents;
  }
  let r = await global_function_property_lambda_info_async(
    file_read_cached_initialize,
    f_path,
    lambda2,
  );
  let exists = property_get(r, "exists");
  return exists;
}
