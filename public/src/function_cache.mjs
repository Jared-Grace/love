import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function function_cache(f_name) {
  let f_name_cache = function_name_combine(f_name, "cache");
  marker("1");
}
