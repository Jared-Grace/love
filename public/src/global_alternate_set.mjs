import { global_function_set } from "../../../love/public/src/global_function_set.mjs";
export function global_alternate_set(value) {
  global_function_set(global_alternate_set, value);
}
