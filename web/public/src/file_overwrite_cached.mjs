import { global_function_property_delete } from "../../../love/public/src/global_function_property_delete.mjs";
import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
import { file_read_cached } from "../../../love/public/src/file_read_cached.mjs";
import { file_overwrite_uncached } from "../../../love/public/src/file_overwrite_uncached.mjs";
export async function file_overwrite_cached(f_path) {
  let contents = await global_function_property_get(file_read_cached, f_path);
  await file_overwrite_uncached(f_path, contents);
  global_function_property_delete(file_read_cached, f_path);
}
