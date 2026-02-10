import { property_get } from "../../../love/public/src/property_get.mjs";
export function object_property_get_name(item) {
  let name = property_get(item, "name");
  return name;
}
