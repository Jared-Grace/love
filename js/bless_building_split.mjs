import { arguments_assert } from "./arguments_assert.mjs";
import { bless_building_families } from "./bless_building_families.mjs";
import { bless_family_splits } from "./bless_family_splits.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
export function bless_building_split(building) {
  arguments_assert(arguments, 1);
  ("How the building at this number shares its nine people out between its families.");
  ("How MANY families it has is read off the street first, because the arrangements to choose from depend on it - two doors can only be four and five, four doors can only be three twos and a three.");
  ("Taken in TURN by the building's own number rather than at random, for the same reason the material on its wall is: in turn, no two neighbours are arranged alike, and the street is the same street every time the world is made. Drawn at random it would be a different street on every reload, and a record of who has been prayed for would stop meaning anything the moment the page was refreshed.");
  ("Counted round rather than run off the end, so the number may be any building in the world and this still answers - which is the whole point of deriving rather than storing.");
  let families = bless_building_families(building);
  let splits = bless_family_splits(families);
  let split = list_get_wrap(splits, building);
  return split;
}
