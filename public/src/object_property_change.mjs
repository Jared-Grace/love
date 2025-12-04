import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function object_property_change(npc, property, change) {
  let objection = object_property_get(npc, property);
  objection = change(objection);
  object_property_set(npc, property, objection);
}
