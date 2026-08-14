import { g_coordinates_apart } from "./g_coordinates_apart.mjs";
import { add } from "./add.mjs";
import { abs } from "./abs.mjs";
import { property_get } from "./property_get.mjs";
export function g_distance(coordinates, item) {
  "How many steps apart two places are when a step goes along one axis at a time, which is the only way anything moves on this grid.";
  let apart = g_coordinates_apart(coordinates, item);
  let x_apart = property_get(apart, "x");
  let y_apart = property_get(apart, "y");
  let x_away = abs(x_apart);
  let y_away = abs(y_apart);
  let distance = add(x_away, y_away);
  return distance;
}
