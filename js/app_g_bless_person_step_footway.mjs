import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function app_g_bless_person_step_footway(world, open) {
  arguments_assert(arguments, 2);
  ("The ways out of a tile that do not step into the road, out of the ways that were open.");
  ("Nobody out on the street steps into the ROAD. Cars drive along it, and a pavement that");
  ("people wander off is a pavement that stops reading as one - the whole point of a kerb is");
  ("that the crowd stays on one side of it.");
  ("Taken off the choices rather than off the map, because the road is real ground and the");
  ("player walks over it. It is the one way between the two streets, so making it solid would");
  ("cut the world in half. What is refused here is a decision an NPC makes, and the player");
  ("makes none of them.");
  ("Walkers were already held to the footway by their leash and residents were not: a front");
  ("door is four rows from the kerb and a resident may go six, so it was the people who live");
  ("here who were standing in the traffic.");
  ("IF EVERY WAY OUT IS ROAD THE REFUSAL IS DROPPED, and what came in is handed straight");
  ("back. Somebody who ended up on the far side of the road is otherwise walled in forever,");
  ("because they are still near enough to home for the lost-and-far-away escape to never");
  ("fire. Letting them cross back is the only reading that cannot strand a person.");
  let roads = property_get(world, "roads");
  function road_not_is(neighbor) {
    let tile = property_get(neighbor, "neighbor");
    let key = g_coordinates_key(tile);
    let off = property_exists_not(roads, key);
    return off;
  }
  let footway = list_filter(open, road_not_is);
  let walled = list_empty_is(footway);
  if (walled) {
    return open;
  }
  return footway;
}
