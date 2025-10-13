import { global_function_initialize } from "../../../love/public/src/global_function_initialize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function reply_last() {
  let last = global_function_initialize(reply_last, {});
  marker("1");
  return last;
}
