import { global_function_property_exists } from "../../../love/public/src/global_function_property_exists.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function file_read_cached(f_path) {
  marker("1");
  let exists = global_function_property_exists(file_read_cached, f_path);at
  let contents = await file_read(f_path);
  global_function_property_set(file_read_cached, f_path, contents);
}
