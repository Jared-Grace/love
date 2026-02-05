import { global_get } from "../../../love/public/src/global_get.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
export function global_function_set(fn, value) {
  let global = global_get();
  object_property_set(global, fn.name, value);
}
