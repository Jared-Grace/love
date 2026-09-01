import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { bless_place_sizes } from "./bless_place_sizes.mjs";
import { property_get } from "./property_get.mjs";
import { equal_assert } from "./equal_assert.mjs";
export function bless_building_cycle_per_block_checked(cycle) {
  arguments_assert(arguments, 1);
  ("One run of per-building numbers, handed back only once it has been proved to be exactly as long as a block has buildings.");
  ("EVERY SUCH RUN IS COUNTED ROUND, so the sixth building is read as the first. That is what makes every block the same street, and it only holds while the run is the length of a block - one entry longer and the second block is a different street from the first, while the part of the game that draws a street only ever knows where a building stands in the row.");
  ("THE PROOF IS MADE HERE RATHER THAN BESIDE EACH RUN, because it is one claim about the shape of the place and not a fact about doors or about floors. Written out beside each run, a third run added later is a third copy of it, and the copy that gets forgotten is the one that draws a house the prayer believes is a different house.");
  ("IT STOPS THE GAME ON THE SPOT rather than handing back something wrong. Either number changed without the other draws a picture that disagrees with the addresses, and that disagreement is invisible in the drawing.");
  let size = list_size(cycle);
  let sizes = bless_place_sizes();
  let per_block = property_get(sizes, "block");
  equal_assert(size, per_block);
  return cycle;
}
