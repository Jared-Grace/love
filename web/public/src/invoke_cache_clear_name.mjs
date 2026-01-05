import { function_import } from "../../../love/public/src/function_import.mjs";
import { invoke_cache_clear } from "../../../love/public/src/invoke_cache_clear.mjs";
export async function invoke_cache_clear_name(f_name) {
  let imported_fn = await function_import(f_name);
  invoke_cache_clear(imported_fn, []);
}
