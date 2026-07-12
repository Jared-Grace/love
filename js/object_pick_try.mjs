import { object_pick } from "./object_pick.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { properties_get } from "./properties_get.mjs";
export function object_pick_try(object, property_names) {
  let properties = properties_get(object);
  let intersection = list_intersect(property_names, properties);
  let picked = object_pick(object, intersection);
  return picked;
}
