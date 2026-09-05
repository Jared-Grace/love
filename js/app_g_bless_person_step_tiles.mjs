import { property_exists_not } from "./property_exists_not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { g_coordinates_neighbors_walkable_get } from "./g_coordinates_neighbors_walkable_get.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { bless_home_reaches } from "./bless_home_reaches.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { and } from "./and.mjs";
export function app_g_bless_person_step_tiles(world, person) {
  arguments_assert(arguments, 2);
  let player = property_get(world, "player");
  let taken = g_coordinates_key(player);
  ("The tiles the player is WALKING along count as taken too, for as long as the walk is");
  ("going on, and not merely the one they are standing on.");
  ("Standing on is enough while nobody is moving, and it is not enough during a walk. The");
  ("crowd is opened once, before the first step, and a walk is many steps long - so with");
  ("only the current tile held, everybody who stepped aside is free to wander back into the");
  ("lane while the player is still several tiles from it, and the player then arrives inside");
  ("somebody. Opening the way and then not keeping it open is the same as never opening it,");
  ("only later.");
  ("Nobody is left stuck by this. A person with no way off the lane simply stands still");
  ("until the walk ends and the lane is given back, which is what a person does when");
  ("somebody is walking past them.");
  let way = property_get_or_null(world, "way");
  let still = null_is(way);
  let held = {};
  if (not(still)) {
    held = way;
  }
  let neighbors_get = g_coordinates_neighbors_walkable_get(world);
  let neighbors = neighbors_get(person);
  function open_is(neighbor) {
    let tile = property_get(neighbor, "neighbor");
    let key = g_coordinates_key(tile);
    let free = equal_not(key, taken);
    let right = property_exists_not(held, key);
    let clear = and(free, right);
    return clear;
  }
  let open = list_filter(neighbors, open_is);
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
  ("If every way out is road the refusal is DROPPED for that step. Somebody who ended up on");
  ("the far side of the road is otherwise walled in forever, because they are still near");
  ("enough to home for the lost-and-far-away escape below never to fire. Letting them cross");
  ("back is the only reading that cannot strand a person.");
  let roads = property_get(world, "roads");
  function road_not_is(neighbor) {
    let tile = property_get(neighbor, "neighbor");
    let key = g_coordinates_key(tile);
    let off = property_exists_not(roads, key);
    return off;
  }
  let footway = list_filter(open, road_not_is);
  let walled = list_empty_is(footway);
  if (not(walled)) {
    open = footway;
  }
  let home = property_get(person, "home");
  let roam = property_get(person, "roam");
  function home_is(neighbor) {
    let tile = property_get(neighbor, "neighbor");
    let close = bless_home_reaches(home, roam, tile);
    return close;
  }
  let near = list_filter(open, home_is);
  let nowhere = list_empty_is(near);
  let inside = bless_home_reaches(home, roam, person);
  let strayed = not(inside);
  let lost = and(nowhere, strayed);
  let choices = near;
  if (lost) {
    choices = open;
  }
  let tiles = {};
  let r = {
    choices,
    tiles,
  };
  return r;
}
