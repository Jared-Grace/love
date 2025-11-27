import { each_object } from "../../../love/public/src/each_object.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function object_includes(npc, clicked_coordinates) {
  let e = true;
  function lambda18(value, property) {
    let value2 = object_property_get(npc, property);
    if (equal_not(value, value2)) {
      e = false;
    }
  }
  each_object(clicked_coordinates, lambda18);
  return e;
}
