import { object_property_delete } from "./object_property_delete.mjs";
import { each } from "./each.mjs";
import { object_properties } from "./object_properties.mjs";
export function object_properties_delete(obj) {
  each(object_properties(obj), (p) => object_property_delete(obj, p));
}
