import { global_function_exists } from "../../../love/public/src/global_function_exists.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function global_function_exists_not(fn) {
  marker("1");
  let exists = global_function_exists(fn);
  return exists;
}
