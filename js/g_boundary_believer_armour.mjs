import { arguments_assert } from "./arguments_assert.mjs";
import { g_boundary_believer_neighbor } from "./g_boundary_believer_neighbor.mjs";
import { property_get } from "./property_get.mjs";
import { g_boundary_believer_combined } from "./g_boundary_believer_combined.mjs";
export function g_boundary_believer_armour(softener, door) {
  arguments_assert(arguments, 2);
  let r2 = g_boundary_believer_neighbor(softener);
  let neighbor = property_get(r2, "neighbor");
  let heart = property_get(r2, "heart");
  let r3 = g_boundary_believer_combined(r2, heart, neighbor, door);
  let combined = property_get(r3, "combined");
  let armour = property_get(r3, "armour");
  let r = {
    combined,
    armour,
  };
  return r;
}
