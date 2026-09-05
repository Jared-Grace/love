import { arguments_assert } from "./arguments_assert.mjs";
import { g_tiles_roofs } from "./g_tiles_roofs.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
export function bless_block_roof(index) {
  arguments_assert(arguments, 1);
  ("What the roofs of the block at this place in the world are made of.");
  ("One material for the whole street, the same way a pavement is one material for the");
  ("whole street. The buildings inside it do not each ask - a roof that changed from house");
  ("to house would be competing with the fronts, which are the thing a player reads one");
  ("house off, and two things varying at once is a street that reads as noise.");
  ("Taken in TURN rather than drawn, so no two blocks in a row are roofed alike and the");
  ("world is the same world every time it is made.");
  ("Counted round rather than run off the end, so the world may grow to any number of");
  ("blocks and this still answers.");
  let items = g_tiles_roofs();
  let item = list_get_wrap(items, index);
  return item;
}
