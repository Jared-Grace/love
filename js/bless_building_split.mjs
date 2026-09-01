import { bless_household_splits } from "./bless_household_splits.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
export function bless_building_split(building) {
  "How the building at this number shares its nine people out between its three families.";
  "Taken in TURN by the building's own number rather than at random, for the same reason";
  "the material on its wall is: in turn, no two neighbours are arranged alike, and the";
  "street is the same street every time the world is made. Drawn at random it would be a";
  "different street on every reload, and a record of who has been prayed for would stop";
  "meaning anything the moment the page was refreshed.";
  "Counted round rather than run off the end, so the number may be any building in the";
  "world and this still answers - which is the whole point of deriving rather than storing.";
  let splits = bless_household_splits();
  let split = list_get_wrap(splits, building);
  return split;
}
