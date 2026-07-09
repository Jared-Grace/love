import { abs } from "../../../love/public/src/abs.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
export function g_distance(coordinates, item) {
  let x1 = property_get(coordinates, "x");
  let y1 = property_get(coordinates, "y");
  let x2 = property_get(item, "x");
  let y2 = property_get(item, "y");
  let distance = text_combine(abs(subtract(x2, x1)), abs(subtract(y2, y1)));
  return distance;
}
