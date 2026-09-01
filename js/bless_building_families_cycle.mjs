import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { bless_place_sizes } from "./bless_place_sizes.mjs";
import { property_get } from "./property_get.mjs";
import { equal_assert } from "./equal_assert.mjs";
export function bless_building_families_cycle() {
  arguments_assert(arguments, 0);
  ("How many doors each building along a street has, read in turn - the first has three, the second two, the third four, and the last two have three each.");
  ("Buildings all the same size is the one thing about this street a player notices is untrue. Real terraces have a wide house next to a narrow one, and a row of identical fronts reads as machinery rather than as somewhere anybody lives.");
  ("A repeating RUN rather than a random draw, so the street is the same street on every reload. Drawn fresh each time, a record of who has been prayed for would stop meaning anything the moment the page was refreshed.");
  ("Every entry is between two and four. One door would be a building the prayer finishes in a single family, which is a rung that does nothing; five would be fifteen tiles of frontage, a house wider than the alley between two blocks and a street with far fewer of them on it.");
  ("It AVERAGES three, which is what keeps the street the street that was tuned. Nine people live behind every building however many doors it has, so the crowd on the pavement does not change at all; what changes is how long the pavement is, and that is the sum of these five widths.");
  ("There are exactly as many entries here as there are buildings on a block, and that is not a coincidence to be tidied away - it is what lets the picture and the addresses agree without either one being told which block it is looking at. Counted round, building number five is the sixth entry read as the first, so the first building of every block has the same number of doors as the first building of the first block. A run of any other length would make the second block a different street from the first, and the part of the game that draws a street only ever knows where a building stands in the row.");
  ("The assertion below is that agreement, made unmissable. Change either number without the other and the game stops on the spot, rather than drawing a house with three doors that the prayer believes has two.");
  let cycle = [3, 2, 4, 3, 3];
  let size = list_size(cycle);
  let sizes = bless_place_sizes();
  let per_block = property_get(sizes, "block");
  equal_assert(size, per_block);
  return cycle;
}
