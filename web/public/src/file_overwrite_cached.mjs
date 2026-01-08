import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function file_overwrite_cached(f_path) {
  marker("1");
  let contents = global_function_property_get(file_overwrite_cached, f_path);
  let result = await file_overwrite(f_path, contents);
}
