import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
export function g_direction(from, to) {
  let left = property_get(to, "x");
  let right = property_get(from, "x");
  let dx = subtract(left, right);
  if (equal(dx, 1)) {
    let r = "east";
    return r;
  }
  if (equal(dx, -1)) {
    let r2 = "west";
    return r2;
  }
  let left2 = property_get(to, "y");
  let right2 = property_get(from, "y");
  let dy = subtract(left2, right2);
  if (equal(dy, 1)) {
    let r3 = "south";
    return r3;
  }
  let r4 = "north";
  return r4;
}
