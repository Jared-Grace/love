import { global_function_property_lambda_info_async } from "../../../love/public/src/global_function_property_lambda_info_async.mjs";
import { not_assert } from "../../../love/public/src/not_assert.mjs";
import { global_function_property_exists } from "../../../love/public/src/global_function_property_exists.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
export async function file_read_cached_initialize(f_path) {
  async function lambda2() {
    let contents = await file_read(f_path);
    return contents;
  }
  let value = await global_function_property_lambda_info_async(
    fn,
    property_name,
    lambda2,
  );
  let exists = global_function_property_exists(
    file_read_cached_initialize,
    f_path,
  );
  if (exists) {
    return false;
  }
  not_assert(exists);
  let contents = await file_read(f_path);
  global_function_property_set(file_read_cached_initialize, f_path, contents);
  return true;
}
