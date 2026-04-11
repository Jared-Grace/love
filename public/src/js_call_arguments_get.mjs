import { js_special_arguments } from "../../../love/public/src/js_special_arguments.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_call_arguments_get(e) {
  let property_name = js_special_arguments();
  let value = property_get(e, property_name);
  return value;
}
