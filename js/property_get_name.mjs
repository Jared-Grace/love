import { property_get } from "./property_get.mjs";
export function property_get_name(item) {
  let name = property_get(item, "name");
  return name;
}
