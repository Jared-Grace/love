import { app_shared_game_npc_img_get } from "./app_shared_game_npc_img_get.mjs";
import { g_direction } from "./g_direction.mjs";
import { app_shared_game_npc_turn_note } from "./app_shared_game_npc_turn_note.mjs";
import { app_shared_game_character_turn_start } from "./app_shared_game_character_turn_start.mjs";
import { app_shared_game_npc_slide } from "./app_shared_game_npc_slide.mjs";
export function app_shared_game_npc_move(npc, to, delay) {
  "take one person one tile onward - they turn to face the way they are going, and everything they are made of slides there together";
  "asked for a person walking behind the player, and asked again for a person the player is trading places with";
  "the turn and the slide are two separate things said together here, because that is what WALKING is: somebody who takes a step faces the way the step went. Being moved by somebody else is the other case, and it asks for the slide on its own.";
  let img = app_shared_game_npc_img_get(npc);
  let direction = g_direction(npc, to);
  app_shared_game_npc_turn_note(npc, direction);
  app_shared_game_character_turn_start(npc, img, direction);
  app_shared_game_npc_slide(npc, to, delay);
}
