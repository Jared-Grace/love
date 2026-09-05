import { arguments_assert } from "./arguments_assert.mjs";
import { bless_building_cycle_blocks_checked } from "./bless_building_cycle_blocks_checked.mjs";
export function bless_building_alley_cycle() {
  arguments_assert(arguments, 0);
  ("How wide the alley to the east of each building is, read in turn across the whole run of streets - one tile, then two, then one, then two on the first road, then two, one, one, two on the next.");
  ("Every alley being the same width is a smaller version of every building being the same width, and it reads the same way. A row whose gaps are all identical is a row that was stamped out rather than built up, and the eye finds a repeated gap faster than it finds a repeated house, because a gap is a plain stripe of ground with nothing in it to look at.");
  ("Only ONE and TWO. Nought would weld two buildings into one long front and take away the very thing an alley is for; three is wide enough to walk down, and a gap somebody can walk down is a second street, which this game does not have. So the choice is between the narrowest gap that still separates and the widest that still refuses to be a road.");
  ("A repeating RUN rather than a random draw, for the reason every other run here is one: the street has to be the same street on every reload, or a record of who has been prayed for stops meaning anything the moment the page is refreshed.");
  ("The run is LONGER THAN ONE STREET, so the second road is spaced differently from the first rather than being the first road again. That is the same reason the door counts and the floor counts are written out for two streets rather than one.");
  ("Each street's alleys ADD UP to the same six, and that is deliberate. The alleys are part of how long a road is, so two roads whose alleys summed differently would differ in length for two reasons at once - the houses on them and the gaps between them - and neither could be read off the other. Held equal, the length of a road still says exactly what the houses on it are, and what these numbers change is only where the gaps fall.");
  ("THE LAST ENTRY OF EACH STREET IS NEVER READ, and that is not a fault. A building's alley is the one to its east, and the last building on a road has no eastern neighbour on that road - the next building along is on another block entirely. The entry is kept rather than left out so that this run is numbered the same way as every other run keyed by a building: by the building's own number in the world, with a whole street's worth of entries per street.");
  ("The length is proved rather than trusted, in the one place every such run is proved: a run that is not a whole number of streets long stops the game rather than sliding a street window along itself.");
  let cycle = [1, 2, 1, 2, 1, 2, 1, 1, 2, 1];
  let r = bless_building_cycle_blocks_checked(cycle);
  return r;
}
