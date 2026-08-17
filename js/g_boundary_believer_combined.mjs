import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { g_boundary_seen_again } from "./g_boundary_seen_again.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { g_boundary_rather_not } from "./g_boundary_rather_not.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_boundary_believer_combined(r2, heart, neighbor, door) {
  arguments_assert(arguments, 4);
  let soul = property_get(r2, "soul");
  let by_door = {
    heart,
    soul,
    neighbor,
  };
  let armour = by_door[door];
  if (not(armour)) {
    armour = heart;
  }
  let r30 = g_boundary_seen_again();
  let r26 = list_random_item([r30, "Always good to see you. "]);
  let r31 = g_boundary_rather_not();
  let r27 = list_random_item([
    r31,
    "That one I'd like to keep to myself a while longer.",
  ]);
  let combined = text_combine_multiple([r26, r27]);
  let r = {
    armour,
    combined,
  };
  return r;
}
