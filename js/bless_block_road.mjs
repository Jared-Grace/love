import { arguments_assert } from "./arguments_assert.mjs";
import { bless_roads } from "./bless_roads.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
export function bless_block_road(index) {
  arguments_assert(arguments, 1);
  ("What the road along the front of the block at this place in the world is surfaced with.");
  ("Counted round rather than run off the end, so the world may grow to more blocks than there are surfaces and this still answers. It is the same reading the pavement and the roof are given, asked the same way and for the same reason: two blocks the player can see at once should not be the same place twice, and two far apart may be.");
  let roads = bless_roads();
  let road = list_get_wrap(roads, index);
  return road;
}
