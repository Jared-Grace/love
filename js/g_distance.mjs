import { abs } from "./abs.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { subtract } from "./subtract.mjs";
export function g_distance(coordinates, item) {
  let x1 = property_get(coordinates, "x");
  let y1 = property_get(coordinates, "y");
  let x2 = property_get(item, "x");
  let y2 = property_get(item, "y");
  let distance = text_combine(abs(subtract(x2, x1)), abs(subtract(y2, y1)));
  return distance;
}
