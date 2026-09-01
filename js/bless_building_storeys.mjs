import { arguments_assert } from "./arguments_assert.mjs";
import { bless_building_storeys_cycle } from "./bless_building_storeys_cycle.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
export function bless_building_storeys(building) {
  arguments_assert(arguments, 1);
  ("How many floors the building at this number stands - one, or two.");
  ("Read off the repeating run by the building's own number, counted round rather than run");
  ("off the end, so the number may be any building in the world and this still answers.");
  ("That is the whole point of deriving a street instead of storing one.");
  let cycle = bless_building_storeys_cycle();
  let storeys = list_get_wrap(cycle, building);
  return storeys;
}
