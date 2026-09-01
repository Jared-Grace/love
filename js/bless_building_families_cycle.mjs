import { arguments_assert } from "./arguments_assert.mjs";
export function bless_building_families_cycle() {
  arguments_assert(arguments, 0);
  ("How many families live in each building along the street, given as a short run that repeats - the first building has three doors, the next two, the next four, the next three, and then it begins again.");
  ("Buildings all the same size is the thing about this street a player notices is untrue. Real terraces have a narrow house beside a wide one, and a row of identical fronts reads as machinery rather than as somewhere people live. Two, three and four doors give fronts six, nine and twelve squares across, which is a difference visible from the far pavement without any of them being a different KIND of thing.");
  ("A repeating run rather than a random draw, so the street is the same street every time the world is made. Drawn at random, a record of who has been prayed for would stop meaning anything the moment the page was reloaded.");
  ("It is short and it is written down rather than worked out, so a building's number tells you its doors by a remainder - and a family's building is still arithmetic, because a whole turn of this run holds a fixed number of families however far into the world you are.");
  ("Every entry is between two and four. One would be a family the prayer finishes in a single breath, and five doors at three squares each is a front fifteen wide, which thins the crowd on the pavement in front of it - the pavement holds nine people per house whatever the house looks like, so a wider house is a thinner street.");
  ("It averages three because the street was tuned with three, and the run is chosen to keep that average rather than to be interesting on its own.");
  let cycle = [3, 2, 4, 3];
  return cycle;
}
