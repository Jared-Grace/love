import { invoke_cache_file_clear } from "./invoke_cache_file_clear.mjs";
import { function_run } from "./function_run.mjs";
import { property_get } from "./property_get.mjs";
import { function_cache_name } from "./function_cache_name.mjs";
import { function_import } from "./function_import.mjs";
export async function function_cache_refresh(f_name) {
  let args = [];
  let fn = await function_import(f_name);
  let v = await function_cache_name(f_name);
  let f_name_cache = property_get(v, "f_name_cache");
  await invoke_cache_file_clear(fn, args);
  let result = await function_run(f_name_cache, args);
  return result;
}
