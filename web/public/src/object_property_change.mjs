import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function object_property_change(o, property, change) {
  let objection = object_property_get(o, property);
  objection = change(objection);
  object_property_set(o, property, objection);
  return objection;
}
