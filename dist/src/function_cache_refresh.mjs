import { invoke_cache_file_clear } from "../../../love/public/src/invoke_cache_file_clear.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_cache_name } from "../../../love/public/src/function_cache_name.mjs";
import { function_import } from "./function_import.mjs";
export async function function_cache_refresh(f_name) {
  const args = [];
  let fn = await function_import(f_name);
  let v3 = await function_cache_name(f_name);
  let f_name_cache = property_get(v3, "f_name_cache");
  await invoke_cache_file_clear(fn, args);
  let result = await function_run(f_name_cache, args);
  return result;
}
