import { arguments_assert } from "./arguments_assert.mjs";
import { bless_building_shape } from "./bless_building_shape.mjs";
import { property_get } from "./property_get.mjs";
import { bless_place_members } from "./bless_place_members.mjs";
import { list_size } from "./list_size.mjs";
import { list_map } from "./list_map.mjs";
import { bless_building_families } from "./bless_building_families.mjs";
import { bless_building_storeys } from "./bless_building_storeys.mjs";
import { list_get } from "./list_get.mjs";
import { bless_building_columns } from "./bless_building_columns.mjs";
import { multiply } from "./multiply.mjs";
import { range_map } from "./range_map.mjs";
import { list_take } from "./list_take.mjs";
import { list_sum } from "./list_sum.mjs";
import { multiply_add } from "./multiply_add.mjs";
import { subtract } from "./subtract.mjs";
export function bless_block_measures(block) {
  arguments_assert(arguments, 1);
  ("Every number ONE named block of the prayer game is laid out from - how deep a building");
  ("stands, what goes between two of them, how many stand in the row, how many doors and");
  ("how many floors each one has, how wide each one is, how far along each one starts, and");
  ("how long the whole row comes to.");
  ("★ TWO READINGS OF THE SAME STREET WERE EACH WORKING THESE OUT FOR THEMSELVES. One lays");
  ("the buildings down and the other says how much ground the row needs, and both began");
  ("with the same run of lines asking the picture of a house how big it is and the list of");
  ("places how many houses there are. Two copies of an arithmetic do not break, they drift:");
  ("the day a house is drawn wider, whichever of the two was not remembered goes on being");
  ("green while laying the last building outside the ground.");
  ("★ IT IS ASKED OF A NAMED BLOCK NOW, and that is what lets one street differ from the");
  ("next. It used to take nothing and answer for every block alike, reading the runs of");
  ("door counts and floor counts straight off their front - so the sixth building was the");
  ("first read again, every street was the same five houses in the same order, and a player");
  ("who walked to the second block arrived somewhere that only the colour of the ground");
  ("said was anywhere new.");
  ("WHICH BUILDINGS THIS BLOCK HOLDS is asked of the ladder rather than counted out here,");
  ("and each one is then asked how many doors and floors it has by its own number in the");
  ("world. That is the same question, asked the same way, that the prayer asks when it wants");
  ("to know who lives behind a door - so the picture and the addresses cannot come apart,");
  ("because there are no longer two readings to come apart. It also settles the count: the");
  ("ladder hands back exactly as many buildings as it says a block holds.");
  ("THERE IS NO ONE WIDTH OR ONE STRIDE. Buildings have two, three or four doors over one or");
  ("two floors, so each has its own width and each starts wherever the one before it");
  ("finished. A single stride multiplied by a position was right while every building was");
  ("the same, and would now lay the third one on top of the second.");
  ("Where a building starts is the widths of the ones before it added up, plus one alley for");
  ("each of them. It is worked out by adding up from the beginning each time rather than by");
  ("carrying a running total along, because a running total is the one shape here that could");
  ("quietly be read after the walk had moved on. Five buildings makes that a few additions.");
  ("HOW LONG THE ROW COMES TO is the one number nothing else could work out for itself. It");
  ("is every width plus the alleys between them - not the last building's start plus its");
  ("width, though the two agree, because said that way it is a sum of the parts rather than");
  ("a reading taken off one end. It is a fact about THIS block and not about the game, since");
  ("two streets holding different houses are different lengths.");
  let shape = bless_building_shape();
  let depth = property_get(shape, "depth");
  let gap = property_get(shape, "gap");
  let slab = property_get(shape, "family_width");
  let numbers = bless_place_members("block", block);
  let count = list_size(numbers);
  let families = list_map(numbers, bless_building_families);
  let storeys = list_map(numbers, bless_building_storeys);
  ("How wide a building is, is its families divided between its FLOORS and not its families");
  ("laid out along the ground. A house with four families on two floors is two columns wide");
  ("and a house with four on one floor is four, and the two hold exactly the same people. So");
  ("the width has to be asked for with both numbers in hand; either one alone answers a");
  ("different question.");
  function width_at(index) {
    let doors = list_get(families, index);
    let floors = list_get(storeys, index);
    let columns = bless_building_columns(doors, floors);
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
    families,
    storeys,
    widths,
    offsets,
    span,
  };
  return r;
}
