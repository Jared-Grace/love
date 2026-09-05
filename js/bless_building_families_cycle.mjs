import { arguments_assert } from "./arguments_assert.mjs";
import { bless_building_cycle_blocks_checked } from "./bless_building_cycle_blocks_checked.mjs";
export function bless_building_families_cycle() {
  arguments_assert(arguments, 0);
  ("How many doors each building has, read in turn across the whole run of streets - three, two, four, three, three on the first road, then two, four, three, four, two on the next.");
  ("Buildings all the same size is the one thing about this street a player notices is untrue. Real terraces have a wide house next to a narrow one, and a row of identical fronts reads as machinery rather than as somewhere anybody lives.");
  ("A repeating RUN rather than a random draw, so the street is the same street on every reload. Drawn fresh each time, a record of who has been prayed for would stop meaning anything the moment the page was refreshed.");
  ("Every entry is between two and four. One door would be a building the prayer finishes in a single family, which is a rung that does nothing; five would be fifteen tiles of frontage, a house wider than the alley between two blocks and a street with far fewer of them on it.");
  ("The run is LONGER THAN ONE STREET, and that is what makes the second road a different place from the first rather than a second copy of it. It used to be exactly one street long, so the same five houses stood in the same order on every block, and walking to the next block arrived nowhere new. Nothing in the drawing decides that; the difference is here, in how many numbers are written down.");
  ("Every street AVERAGES three doors a building, which is what keeps each of them the street that was tuned. Nine people live behind every building however many doors it has, so the crowd on the pavement does not change at all; what changes is how long the pavement is, and that is the sum of one street's five widths. So the five numbers of a road are chosen to add to fifteen, not merely to differ from the road before.");
  ("No building faces its own number on the road before it. Two streets can be made of the same five sizes shuffled and read as the same street rearranged, which is nearly as flat as reading as the same street; changed one by one down the row, each house is somewhere the player has not stood.");
  ("The length is proved rather than trusted, in the one place every such run is proved: a run that is not a whole number of streets long stops the game rather than sliding a street window along itself.");
  let cycle = [3, 2, 4, 3, 3, 2, 4, 3, 4, 2];
  let r = bless_building_cycle_blocks_checked(cycle);
  return r;
}
