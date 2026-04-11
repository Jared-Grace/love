import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_call_arguments_get(e) {
  let value = property_get(e, "arguments");
  return value;
}
