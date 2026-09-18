import { arguments_assert } from "./arguments_assert.mjs";
import { g_direction } from "./g_direction.mjs";
import { app_shared_game_npc_turn_ready } from "./app_shared_game_npc_turn_ready.mjs";
import { app_shared_game_npc_move } from "./app_shared_game_npc_move.mjs";
import { app_shared_game_npc_slide } from "./app_shared_game_npc_slide.mjs";
export function app_shared_game_npc_shove(npc, to, delay) {
  arguments_assert(arguments, 3);
  ("Moves somebody one tile who did not choose to go - shoved aside by a crowd opening, or traded places with by the player - and turns them to face the way they went only if they have rested long enough since their last turn.");
  ("A turn a person CHOSE already waits out that rest, standing where they are until it is over. A turn nobody chose cannot wait, because the moving is not optional: the player is walking through and the tile has to be given up now. So the two halves are split - the moving happens whatever, and the turning is what is dropped.");
  ("Without that, the rest was kept everywhere a person turns of their own accord and nowhere they are turned by somebody else, and the whole point of the rest is that turns do not come one on top of another. A quarter turn is a quarter turn; two run together sweep half a circle and three sweep three quarters, and the eye reads one long spin rather than three separate shoves. Nobody was ever asked to turn that far - each turn on its own is already the short way round - so the fault was never in how far one turn goes, it was in how close together two of them come.");
  ("Dropped rather than delayed, and dropped is the whole of the difference. A turn held over and paid later is the same twirl a moment further on; a person who slides aside still facing up the street is somebody who was pushed, which is what actually happened to them.");
  let direction = g_direction(npc, to);
  let ready = app_shared_game_npc_turn_ready(npc, direction);
  if (ready) {
    app_shared_game_npc_move(npc, to, delay);
    return;
  }
  app_shared_game_npc_slide(npc, to, delay);
}
