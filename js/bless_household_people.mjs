import { arguments_assert } from "./arguments_assert.mjs";
import { bless_place_sizes } from "./bless_place_sizes.mjs";
import { property_get } from "./property_get.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { modulo } from "./modulo.mjs";
import { bless_building_split } from "./bless_building_split.mjs";
import { multiply } from "./multiply.mjs";
import { list_take } from "./list_take.mjs";
import { list_sum } from "./list_sum.mjs";
import { add } from "./add.mjs";
import { list_get } from "./list_get.mjs";
import { range_map } from "./range_map.mjs";
export function bless_household_people(household) {
  arguments_assert(arguments, 1);
  ("Everybody living in one family - between two and five people, as their building's own");
  ("arrangement has it.");
  ("This is the one rung of the ladder whose members are not simply the number multiplied");
  ("out, and everything above it still is. The building is found by dividing, the building");
  ("says how its nine are shared, and the family's share is read off that. So the answer");
  ("costs one division and a walk of at most four however far into the world the family sits.");
  ("The people of a family are still CONSECUTIVE, which is what keeps everything above this");
  ("working. They are a run inside their building's nine, and the runs of its families");
  ("lie end to end and fill it exactly - so the building's people are still its number times");
  ("nine, and nothing higher up had to learn that families vary.");
  let sizes = bless_place_sizes();
  let per_building = property_get(sizes, "building");
  let building = divide_floor(household, per_building);
  let within = modulo(household, per_building);
  let split = bless_building_split(building);
  let per_building_people = bless_building_people();
  let building_first = multiply(building, per_building_people);
  let before = list_take(split, within);
  let skipped = list_sum(before);
  let first = add(building_first, skipped);
  let size = list_get(split, within);
  function member(offset) {
    let id = add(first, offset);
    return id;
  }
  let members = range_map(size, member);
  return members;
}
