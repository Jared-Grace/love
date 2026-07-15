import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
export function g_direction(from, to) {
  let dx = subtract(property_get(to, "x"), property_get(from, "x"));
  if (dx === 1) {
    return "east";
  }
  if (dx === -1) {
    return "west";
  }
  let dy = subtract(property_get(to, "y"), property_get(from, "y"));
  if (dy === 1) {
    return "south";
  }
  return "north";
}
