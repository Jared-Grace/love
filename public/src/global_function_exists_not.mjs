import { global_function_exists } from "../../../love/public/src/global_function_exists.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function global_function_exists_not(fn) {
  marker("1");
  return global_function_exists(fn);
}
