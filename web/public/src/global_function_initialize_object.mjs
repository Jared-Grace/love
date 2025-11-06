import { global_function_initialize } from "../../../love/public/src/global_function_initialize.mjs";
export function global_function_initialize_object(fn) {
  let value = global_function_initialize(fn, {});
  return value;
}
