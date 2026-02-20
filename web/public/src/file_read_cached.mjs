import { not_assert } from "../../../love/public/src/not_assert.mjs";
import { global_function_property_exists } from "../../../love/public/src/global_function_property_exists.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
export async function file_read_cached(f_path) {
  let exists = global_function_property_exists(file_read_cached, f_path);
  if (exists) {
    let v2 = false;
    return v2;
  }
  not_assert(exists);
  let contents = await file_read(f_path);
  global_function_property_set(file_read_cached, f_path, contents);
  let v = true;
  return v;
}
