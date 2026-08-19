import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { not } from "./not.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_npc_move } from "./app_g_npc_move.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { g_coordinates_neighbors_walkable_get } from "./g_coordinates_neighbors_walkable_get.mjs";
import { g_direction } from "./g_direction.mjs";
import { g_direction_opposite } from "./g_direction_opposite.mjs";
import { bless_walk_ways } from "./bless_walk_ways.mjs";
export function app_g_bless_person_step(world, person) {
  arguments_assert(arguments, 2);
  ("One person takes one step - onward if they can, round whoever is in the way if they");
  ("cannot, back the way they came if there is nowhere else, and nowhere at all when they");
  ("are boxed in.");
  ("They keep a HEADING, which is where they are trying to go, and it is not the same");
  ("thing as the way they are facing. Facing is where their picture is looking, which is");
  ("wherever they last stepped; heading survives a step round somebody and is what makes");
  ("them carry on the same way afterwards. A crowd of people who each pick a fresh");
  ("direction every step has no forward and no backward in it, and a pavement with no");
  ("forward and backward on it is not a pavement.");
  ("Stepping round is therefore NOT a change of mind, and the heading is left alone for");
  ("it. Turning back IS one, so that one is written down - otherwise somebody who reached");
  ("a shore would turn round, immediately try their old heading again, and stand there");
  ("bouncing off the water for the rest of the game.");
  ("Where a person may step is the gospel game's own answer, asked again for each person");
  ("rather than once for the crowd. That question reads where everybody is standing right");
  ("now, so asking it once and reusing the answer would let two people who were both");
  ("offered the same empty tile both take it, and they would end the step standing inside");
  ("each other.");
  ("The player's tile is taken out by hand, because the crowd is what that question knows");
  ("about and the player is not one of them. Left in, somebody would eventually walk onto");
  ("the square the player is standing on and the player would be inside the crowd instead");
  ("of among it.");
  ("Nobody walks out of their own life. A tile too far from home is refused before the");
  ("directions are even looked at, which is what keeps the people who live at a door near");
  ("that door and the people out walking on the pavement. Without it every address in the");
  ("game would be true for about a minute and then be a lie, because the twelve people the");
  ("prayer calls one building would have wandered off in twelve directions.");
  ("Somebody standing outside their own reach is let go anywhere instead, because that");
  ("person can only have got there by being set down there when their doorstep was full -");
  ("and held to a rule they already break, they would never take a step again. Loose, they");
  ("wander until they meet the street they belong to, and are kept from then on.");
  let player = property_get(world, "player");
  let taken = g_coordinates_key(player);
  let neighbors_get = g_coordinates_neighbors_walkable_get(world);
  let neighbors = neighbors_get(person);
  function open_is(neighbor) {
    let tile = property_get(neighbor, "neighbor");
    let key = g_coordinates_key(tile);
    let free = equal_not(key, taken);
    return free;
  }
  let open = list_filter(neighbors, open_is);
  let home = property_get(person, "home");
  let roam = property_get(person, "roam");
  function home_is(neighbor) {
    let tile = property_get(neighbor, "neighbor");
    let near = bless_home_reaches(home, roam, tile);
    return near;
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
  function tile_note(neighbor) {
    let tile = property_get(neighbor, "neighbor");
    let direction = g_direction(person, tile);
    property_set(tiles, direction, tile);
  }
  each(choices, tile_note);
  let heading = property_get(person, "heading");
  let ways = bless_walk_ways(heading);
  function way_open_is(option) {
    let is = property_exists(tiles, option);
    return is;
  }
  let ways_open = list_filter(ways, way_open_is);
  let way = list_get_or_null(ways_open, 0);
  let boxed = not(way);
  if (boxed) {
    return;
  }
  let back = g_direction_opposite(heading);
  let turned = equal(way, back);
  if (turned) {
    property_set(person, "heading", back);
  }
  let to = property_get(tiles, way);
  app_g_npc_move(person, to, 0);
}
