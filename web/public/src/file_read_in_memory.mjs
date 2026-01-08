import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function file_read_in_memory(f_path) {
  marker("1");
  let contents = await file_read(f_path);
  global_function_property_set(file_read_in_memory, f_path, contents);
  let result = await file_overwrite(f_path, after);
}
