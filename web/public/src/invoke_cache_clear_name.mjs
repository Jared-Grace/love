import { function_import } from "../../../love/public/src/function_import.mjs";
import { invoke_cache_clear } from "../../../love/public/src/invoke_cache_clear.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function invoke_cache_clear_name(f_name, args) {
  let imported_fn = await function_import(f_name);
  marker("1");
  let v = invoke_cache_clear(fn, args);
  return v;
}
