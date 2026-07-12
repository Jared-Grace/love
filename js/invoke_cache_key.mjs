import { property_get } from "./property_get.mjs";
import { json_to } from "./json_to.mjs";
export function invoke_cache_key(fn, args) {
  let name = property_get(fn, "name");
  let j = json_to([name, args]);
  return j;
}
