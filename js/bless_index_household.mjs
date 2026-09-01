import { arguments_assert } from "./arguments_assert.mjs";
import { bless_place_sizes } from "./bless_place_sizes.mjs";
import { property_get } from "./property_get.mjs";
import { multiply } from "./multiply.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { modulo } from "./modulo.mjs";
import { bless_building_split } from "./bless_building_split.mjs";
import { range } from "./range.mjs";
import { add } from "./add.mjs";
import { list_take } from "./list_take.mjs";
import { list_sum } from "./list_sum.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
export function bless_index_household(index) {
  arguments_assert(arguments, 1);
  ("Which family the person at this place in the line belongs to.");
  ("It is the one reading in this game that is not a division, and it is short on purpose.");
  ("A building always holds nine, so the building is a division; inside those nine the three");
  ("families are two to five each, so which of the three is a walk. Three steps, whether the");
  ("person is on the first street or a billion streets away.");
  ("It is worked out by asking how many of the family boundaries this person is already past");
  ("rather than by adding sizes up until the total is passed. The two agree, and this one");
  ("has no running total to be left holding - which matters because a running total is the");
  ("one shape here that could quietly be read after the walk had moved on.");
  ("The last boundary is the end of the building and nobody is ever past it, so it always");
  ("answers no. It is asked anyway rather than left out, because every family being asked");
  ("the same question is what stops this needing to know that there are three of them.");
  let sizes = bless_place_sizes();
  let per_building = property_get(sizes, "building");
  let per_household = property_get(sizes, "household");
  let per_building_people = multiply(per_building, per_household);
  let building = divide_floor(index, per_building_people);
  let within = modulo(index, per_building_people);
  let split = bless_building_split(building);
  let steps = range(per_building);
  function passed_is(step) {
    let count = add(step, 1);
    let head = list_take(split, count);
    let boundary = list_sum(head);
    let past = greater_than_equal(within, boundary);
    return past;
  }
  let position = list_filter_size(steps, passed_is);
  let building_first = multiply(building, per_building);
  let household = add(building_first, position);
  return household;
}
