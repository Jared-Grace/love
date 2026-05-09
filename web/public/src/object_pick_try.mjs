import { object_pick } from "../../../love/public/src/object_pick.mjs";
import { list_intersect } from "../../../love/public/src/list_intersect.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
export function object_pick_try(object, property_names) {
  let properties = properties_get(object);
  let r = list_intersect(properties, property_names);
  let picked2 = object_pick(object2, property_names2);
  return picked;
}
