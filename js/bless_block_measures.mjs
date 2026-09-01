import { bless_building_storeys_cycle } from "./bless_building_storeys_cycle.mjs";
import { list_get } from "./list_get.mjs";
import { bless_building_columns } from "./bless_building_columns.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bless_building_shape } from "./bless_building_shape.mjs";
import { property_get } from "./property_get.mjs";
import { bless_place_sizes } from "./bless_place_sizes.mjs";
import { bless_building_families_cycle } from "./bless_building_families_cycle.mjs";
import { multiply } from "./multiply.mjs";
import { list_take } from "./list_take.mjs";
import { list_sum } from "./list_sum.mjs";
import { multiply_add } from "./multiply_add.mjs";
import { range_map } from "./range_map.mjs";
import { subtract } from "./subtract.mjs";
export function bless_block_measures() {
  arguments_assert(arguments, 0);
  ("Every number one street of the prayer game is laid out from - how deep a building stands, what goes between two of them, how many stand in the row, how many doors each one has, how wide each one is, how far along each one starts, and how long the whole row comes to.");
  ("★ TWO READINGS OF THE SAME STREET WERE EACH WORKING THESE OUT FOR THEMSELVES. One lays the buildings down and the other says how much ground the row needs, and both began with the same run of lines asking the picture of a house how big it is and the list of places how many houses there are. Two copies of an arithmetic do not break, they drift: the day a house is drawn wider, whichever of the two was not remembered goes on being green while laying the last building outside the ground.");
  ("THERE IS NO LONGER ONE WIDTH OR ONE STRIDE, and that is what this had to learn. Buildings have two, three or four doors, so each has its own width and each starts wherever the one before it finished. A single stride multiplied by a position was right while every building was the same, and would now lay the third one on top of the second.");
  ("Where a building starts is the widths of the ones before it added up, plus one alley for each of them. It is worked out by adding up from the beginning each time rather than by carrying a running total along, because a running total is the one shape here that could quietly be read after the walk had moved on. Five buildings makes that a few additions.");
  ("HOW LONG THE ROW COMES TO is the one number nothing else could work out for itself. It is every width plus the alleys between them - not the last building's start plus its width, though the two agree, because said that way it is a sum of the parts rather than a reading taken off one end.");
  ("HOW MANY BUILDINGS is still asked of the ladder rather than counted off the doors, so the thing the player looks at and the thing the prayer counts cannot disagree. The list of door counts is the same length, and says so itself.");
  let shape = bless_building_shape();
  let depth = property_get(shape, "depth");
  let gap = property_get(shape, "gap");
  let slab = property_get(shape, "family_width");
  let sizes = bless_place_sizes();
  let count = property_get(sizes, "block");
  let cycle = bless_building_families_cycle();
  let storeys_cycle = bless_building_storeys_cycle();
  ("How wide a building is, is its families divided between its FLOORS and not its families");
  ("laid out along the ground. A house with four families on two floors is two columns wide");
  ("and a house with four on one floor is four, and the two hold exactly the same people. So");
  ("the width has to be asked for with both numbers in hand; either one alone answers a");
  ("different question.");
  function width_at(index) {
    let families = list_get(cycle, index);
    let storeys = list_get(storeys_cycle, index);
    let columns = bless_building_columns(families, storeys);
    let width = multiply(columns, slab);
    return width;
  }
  let widths = range_map(count, width_at);
  function offset_at(index) {
    let before = list_take(widths, index);
    let across = list_sum(before);
    let at = multiply_add(index, gap, across);
    return at;
  }
  let offsets = range_map(count, offset_at);
  let across_all = list_sum(widths);
  let gaps = subtract(count, 1);
  let span = multiply_add(gaps, gap, across_all);
  let r = {
    depth,
    gap,
    count,
    cycle,
    storeys_cycle,
    widths,
    offsets,
    span,
  };
  return r;
}
