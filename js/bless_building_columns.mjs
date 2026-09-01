import { arguments_assert } from "./arguments_assert.mjs";
import { divide_ceil } from "./divide_ceil.mjs";
export function bless_building_columns(families, storeys) {
  arguments_assert(arguments, 2);
  ("How many doors wide a building is - how many slabs of front it needs to hold this many");
  ("families at this many floors.");
  ("A column is a slab of front three squares across with one door in the middle of it, and");
  ("it holds ONE family per floor. So a one-storey building needs a column for every family");
  ("in it and is as wide as it ever was, and a two-storey building needs half as many and is");
  ("half as wide. That halving is the whole of what a second floor buys: the same nine");
  ("people behind the same house, standing on half the street.");
  ("It rounds UP, and the odd family that forces the rounding lives on the ground with");
  ("nobody above it. Rounded down, the last family would have no wall to be behind at all.");
  ("A column can therefore be short of an upstairs, and that is drawn rather than hidden -");
  ("the wall above it simply has no window in it, which says the house has a floor up there");
  ("with nobody home on this side of it.");
  ("The doors count the GROUND floor and the windows count the one above, so the two");
  ("together still say how many families live here without a word being written. It is the");
  ("doors alone that stopped being the whole answer, and a second floor is exactly the thing");
  ("that made them stop.");
  let columns = divide_ceil(families, storeys);
  return columns;
}
