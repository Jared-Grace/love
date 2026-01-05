import { function_is } from "../../../love/public/src/function_is.mjs";
import { invoke_cache_clear } from "../../../love/public/src/invoke_cache_clear.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function invoke_cache_clear_name(fn, args) {
  let fi2 = function_is(f);
  marker("1");
  let v = invoke_cache_clear(fn, args);
  return v;
}
