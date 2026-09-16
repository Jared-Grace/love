import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
export function bless_crossing_claim(world, to) {
  arguments_assert(arguments, 2);
  ("Puts the walker's crossing on the world, so that every vehicle can see it. From here");
  ("until it is given back, no vehicle may take a square inside the band around it.");
  ("The claim is written on the WORLD rather than on the walker because the traffic is");
  ("what has to read it, and the traffic knows about the world and about itself. Reaching");
  ("from a vehicle to the player to ask where she is would work today and stop working");
  ("the first time anybody else crosses a road.");
  ("It holds the SQUARE she is crossing at rather than a yes or no, because the band is a");
  ("place on one street and not a state of the whole town. A plain flag would stop every");
  ("vehicle in the game each time somebody stepped off a kerb.");
  ("Nothing here checks that the band is empty. That is asked before the wait ends, and");
  ("asking it twice would only make it look as though this call could refuse - which it");
  ("cannot, because by the time it is made the walker is already stepping out.");
  property_set(world, "crossing", to);
}
