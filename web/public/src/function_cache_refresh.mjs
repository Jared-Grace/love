import { file_delete } from "../../../love/public/src/file_delete.mjs";
import { invoke_cache_file_key_get } from "../../../love/public/src/invoke_cache_file_key_get.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_cache_name } from "../../../love/public/src/function_cache_name.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_import } from "./function_import.mjs";
export async function function_cache_refresh(f_name) {
  marker("1");
  const args = [];
  let fn = await function_import(f_name);
  let v3 = await function_cache_name(f_name);
  let f_name_cache = object_property_get(v3, "f_name_cache");
  let key_get = invoke_cache_file_key_get(fn, args);
  await file_delete(file_path);
  let result = await function_run(f_name_cache, args);
  return result;
}
