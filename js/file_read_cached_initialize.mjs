import { file_read_curried } from "./file_read_curried.mjs";
import { property_get } from "./property_get.mjs";
import { global_function_property_lambda_info_async } from "./global_function_property_lambda_info_async.mjs";
export async function file_read_cached_initialize(f_path) {
  "this function was refactored, but not manually tested";
  let lambda = file_read_curried(f_path);
  let r = await global_function_property_lambda_info_async(
    file_read_cached_initialize,
    f_path,
    lambda,
  );
  let exists = property_get(r, "exists");
  return exists;
}
