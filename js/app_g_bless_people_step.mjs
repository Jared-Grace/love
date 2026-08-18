import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { multiply } from "./multiply.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { random } from "./random.mjs";
import { app_g_npc_move } from "./app_g_npc_move.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { g_coordinates_neighbors_walkable_get } from "./g_coordinates_neighbors_walkable_get.mjs";
export function app_g_bless_people_step(world) {
  arguments_assert(arguments, 1);
  ("Everybody in the crowd takes one step, to a next-door tile they can actually stand on, or");
  ("stays where they are when there is nowhere to go.");
  ("Where a person may step is the gospel game's own answer, asked again for each person");
  ("rather than once for the crowd. That question reads where everybody is standing right");
  ("now, so asking it once and reusing the answer would let two people who were both offered");
  ("the same empty tile both take it, and they would end the step standing inside each other.");
  ("Asked afresh, the first one to move has already filled it by the time the second is");
  ("offered anywhere.");
  ("The player's tile is taken out by hand, because the crowd is what that question knows");
  ("about and the player is not one of them. Left in, somebody would eventually walk onto the");
  ("square the player is standing on and the player would be inside the crowd instead of");
  ("among it.");
  ("Each person waits a different fraction of a moment before setting off. Given the same");
  ("instruction at the same instant they would otherwise all move as one body, which reads as");
  ("a formation rather than as a street.");
  let npcs = property_get(world, "npcs");
  let player = property_get(world, "player");
  let taken = g_coordinates_key(player);
  function person_step(person) {
    let neighbors_get = g_coordinates_neighbors_walkable_get(world);
    let neighbors = neighbors_get(person);
    function open_is(neighbor) {
      let tile = property_get(neighbor, "neighbor");
      let key = g_coordinates_key(tile);
      let occupied = equal(key, taken);
      let open = not(occupied);
      return open;
    }
    let open = list_filter(neighbors, open_is);
    let nowhere = list_empty_is(open);
    if (nowhere) {
      return;
    }
    let chosen = list_random_item(open);
    let to = property_get(chosen, "neighbor");
    let delay = multiply(random(), 0.5);
    app_g_npc_move(person, to, delay);
  }
  each(npcs, person_step);
}
