import { arguments_assert } from "./arguments_assert.mjs";
import { bless_building_alley_cycle } from "./bless_building_alley_cycle.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
export function bless_building_alley(building) {
  arguments_assert(arguments, 1);
  ("How wide the alley to the east of the building at this number is.");
  ("Read off the repeating run by the building's own number, counted round rather than run off the end, so the number may be any building in the world and this still answers. That is the same reading the door count and the floor count are given, asked the same way, so a building's gap belongs to the building rather than to the place it happens to stand.");
  let cycle = bless_building_alley_cycle();
  let alley = list_get_wrap(cycle, building);
  return alley;
}
