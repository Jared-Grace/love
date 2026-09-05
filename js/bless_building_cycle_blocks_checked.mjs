import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { bless_place_sizes } from "./bless_place_sizes.mjs";
import { property_get } from "./property_get.mjs";
import { modulo } from "./modulo.mjs";
import { equal_assert } from "./equal_assert.mjs";
export function bless_building_cycle_blocks_checked(cycle) {
  arguments_assert(arguments, 1);
  ("One run of per-building numbers, handed back only once it has been proved to be a whole number of streets long.");
  ("EVERY SUCH RUN IS COUNTED ROUND, so a run one street long makes every street the same street, and a run two streets long makes the second block a different place from the first and the third block the first one again. That is where the difference between one road and the next comes from: not from anything the drawing decides, but from the run being longer than a single block.");
  ("A WHOLE NUMBER OF STREETS is what is required, rather than any length at all. Counted round, a run of any length would still draw something - but a street would be a window sliding along the run rather than an entry in it, so adding one number to the end would re-cut every street after it instead of adding a street. Kept to whole streets, the run reads as a list of roads, and a person who wants one more road writes one more road's worth of numbers.");
  ("THE PROOF IS MADE HERE RATHER THAN BESIDE EACH RUN, because it is one claim about the shape of the place and not a fact about doors or about floors. Written out beside each run, a third run added later is a third copy of it, and the copy that gets forgotten is the one that draws a house the prayer believes is a different house.");
  ("IT STOPS THE GAME ON THE SPOT rather than handing back something wrong. A run of the wrong length is a mistake about the world, not a picture worth looking at.");
  let size = list_size(cycle);
  let sizes = bless_place_sizes();
  let per_block = property_get(sizes, "block");
  let over = modulo(size, per_block);
  equal_assert(over, 0);
  return cycle;
}
