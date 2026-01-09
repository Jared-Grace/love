import { global_function_property_delete } from "../../../love/public/src/global_function_property_delete.mjs";
import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { global_function_get } from "../../../love/public/src/global_function_get.mjs";
import { file_read_cached } from "../../../love/public/src/file_read_cached.mjs";
export async function file_overwrite_cached(f_path) {
console.log(global_function_get(file_read_cached))
  let contents = global_function_property_get(file_read_cached, f_path);
  await file_overwrite(f_path, contents);
  global_function_property_delete(file_read_cached, f_path);
}
