import { arguments_assert } from "./arguments_assert.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
import { bless_pavements } from "./bless_pavements.mjs";
export function bless_block_pavement(index) {
  arguments_assert(arguments, 1);
  "What the pavement of the block at this place in the world is made of.";
  "Taken in TURN, for the same reason a building's front is: in turn, no two blocks in a";
  "row can wear the same ground, and the world is the same world every time it is made.";
  "Counted round rather than run off the end, so the world may grow to any number of blocks";
  "and this still answers - two blocks further on would simply be paved as the first was,";
  "which is what a town does anyway.";
  let items = bless_pavements();
  let item = list_get_wrap(items, index);
  return item;
}
