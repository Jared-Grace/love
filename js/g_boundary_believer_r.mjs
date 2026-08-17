import { arguments_assert } from "./arguments_assert.mjs";
import { g_boundary_believer_armour } from "./g_boundary_believer_armour.mjs";
import { g_boundary_believer_options } from "./g_boundary_believer_options.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function g_boundary_believer_r(softener, door, met) {
  arguments_assert(arguments, 3);
  let r2 = g_boundary_believer_armour(softener, door);
  let options = g_boundary_believer_options(r2, met);
  let r = list_random_item(options);
  return r;
}
