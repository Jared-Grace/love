import { json_to } from "./json_to.mjs";
import { property_get } from "./property_get.mjs";
export function g_coordinates_key(coordinates) {
  let x = property_get(coordinates, "x");
  let y = property_get(coordinates, "y");
  let key = json_to({
    x,
    y,
  });
  return key;
}
