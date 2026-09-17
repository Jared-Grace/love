import { property_difference } from "./property_difference.mjs";
import { equal } from "./equal.mjs";
export function g_direction(from, to) {
  let dx = property_difference(to, from, "x");
  if (equal(dx, 1)) {
    let r = "east";
    return r;
  }
  if (equal(dx, -1)) {
    let r2 = "west";
    return r2;
  }
  let dy = property_difference(to, from, "y");
  if (equal(dy, 1)) {
    let r3 = "south";
    return r3;
  }
  let r4 = "north";
  return r4;
}
