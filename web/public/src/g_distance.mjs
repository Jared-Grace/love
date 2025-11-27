import { abs } from "../../../love/public/src/abs.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function g_distance(clicked_coordinates, item) {
  let x3 = object_property_get(clicked_coordinates, "x");
  let y3 = object_property_get(clicked_coordinates, "y");
  let x2 = object_property_get(item, "x");
  let y2 = object_property_get(item, "y");
  let distance = abs(x2 - x3) + abs(y2 - y3);
  return distance;
}
