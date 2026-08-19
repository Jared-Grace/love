import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_person_step_ways_open } from "./app_g_bless_person_step_ways_open.mjs";
import { property_get } from "./property_get.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { not } from "./not.mjs";
export function app_g_bless_person_step_boxed(world, person) {
  arguments_assert(arguments, 2);
  let r = app_g_bless_person_step_ways_open(world, person);
  let ways_open = property_get(r, "ways_open");
  let heading = property_get(r, "heading");
  let tiles = property_get(r, "tiles");
  let way = list_get_or_null(ways_open, 0);
  let boxed = not(way);
  return {
    heading,
    tiles,
    way,
    boxed,
  };
}
