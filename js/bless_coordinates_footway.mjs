import { arguments_assert } from "./arguments_assert.mjs";
import { g_coordinates_outside_index } from "./g_coordinates_outside_index.mjs";
export function bless_coordinates_footway(coordinates, roads) {
  arguments_assert(arguments, 2);
  ("The ground somebody on foot may be SET DOWN on: every square of land except the road.");
  ("The kerb was already kept at every step a person takes, and it was never asked at the");
  ("moment they were first stood somewhere. A front door is four rows from the kerb and a");
  ("resident may go six, so the road is well inside the ring a person is placed in - and a");
  ("share of the crowd was simply born standing in the traffic. A rule kept from the second");
  ("step onwards is not a rule; the first step is where the crowd is actually put.");
  ("Somebody already on the road is let off the kerb so they can get away from the cars,");
  ("which means a person placed there does not merely start in the road - they are the one");
  ("kind of person allowed to go on walking down it.");
  ("The choosing itself is said in one place for the whole repo, because a crowd being");
  ("parted keeps the same kerb from the other side and asks the same question of the map.");
  ("What is left here is the NAME: the ground a person may be set down on is called the");
  ("footway, and a caller says that rather than saying the road twice.");
  let footway = g_coordinates_outside_index(coordinates, roads);
  return footway;
}
