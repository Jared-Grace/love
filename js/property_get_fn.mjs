import { property_get } from "./property_get.mjs";
export function property_get_fn(dictionary, property_name_get) {
  let property_name = property_name_get();
  let entry = property_get(dictionary, property_name);
  return entry;
}
