import { file_read_curried } from "../../../love/public/src/file_read_curried.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { global_function_property_lambda_info_async } from "../../../love/public/src/global_function_property_lambda_info_async.mjs";
export async function file_read_cached_initialize(f_path) {
  "this function was refactored, but not manually tested";
  let lambda2 = file_read_curried(f_path);
  let r = await global_function_property_lambda_info_async(
    file_read_cached_initialize,
    f_path,
    lambda2,
  );
  let exists = property_get(r, "exists");
  return exists;
}
