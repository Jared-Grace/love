import { arguments_assert } from "./arguments_assert.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { list_filter } from "./list_filter.mjs";
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
  function road_not_is(tile) {
    let key = g_coordinates_key(tile);
    let off = property_exists_not(roads, key);
    return off;
  }
  let footway = list_filter(coordinates, road_not_is);
  return footway;
}
