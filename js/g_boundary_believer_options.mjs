import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { g_boundary_know_better } from "./g_boundary_know_better.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
export function g_boundary_believer_options(r, met) {
  arguments_assert(arguments, 2);
  let armour = property_get(r, "armour");
  let combined = property_get(r, "combined");
  let contextual = [combined];
  if (not(met)) {
    let r28 = list_random_item([
      "It's good to meet another believer. ",
      "Praise God, a brother in the Lord. ",
    ]);
    let r32 = g_boundary_know_better();
    let r29 = list_random_item([r32, "Give me a little time on that one."]);
    let combined13 = text_combine_multiple([r28, r29]);
    contextual = [combined13];
  }
  let options = list_concat(armour, contextual);
  return options;
}
