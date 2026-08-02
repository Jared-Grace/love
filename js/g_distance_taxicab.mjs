import { numbers_apart } from "./numbers_apart.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
export function g_distance_taxicab(a, b) {
  "numeric Manhattan distance |dx|+|dy| between two {x,y} coords, as a real NUMBER for comparing / sorting nearest. (the plain string-distance helper instead CONCATENATES |dx| and |dy| into a string — good only for a same-tile check, never for magnitude — so it cannot find the nearest npc.)";
  let left = property_get(b, "x");
  let right = property_get(a, "x");
  let dx = numbers_apart(left, right);
  let left2 = property_get(b, "y");
  let right2 = property_get(a, "y");
  let dy = numbers_apart(left2, right2);
  let d = add(dx, dy);
  return d;
}
