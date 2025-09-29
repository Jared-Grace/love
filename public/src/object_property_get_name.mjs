import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function object_property_get_name(item) {
  let name = object_property_get(item, "name");
  return name;
}
