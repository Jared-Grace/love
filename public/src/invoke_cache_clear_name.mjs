import { invoke_cache_clear } from "../../../love/public/src/invoke_cache_clear.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function invoke_cache_clear_name(fn, args) {
  marker("1");
  return invoke_cache_clear(fn, args);
}
