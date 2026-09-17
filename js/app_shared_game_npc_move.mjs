import { app_shared_game_npc_img_get } from "./app_shared_game_npc_img_get.mjs";
import { app_shared_game_npc_elements } from "./app_shared_game_npc_elements.mjs";
import { g_direction } from "./g_direction.mjs";
import { object_assign } from "./object_assign.mjs";
import { app_shared_game_npc_turn_note } from "./app_shared_game_npc_turn_note.mjs";
import { app_shared_game_character_turn_start } from "./app_shared_game_character_turn_start.mjs";
import { app_shared_game_npc_place } from "./app_shared_game_npc_place.mjs";
import { g_img_square_style_transition_delay } from "./g_img_square_style_transition_delay.mjs";
import { each } from "./each.mjs";
export function app_shared_game_npc_move(npc, to, delay) {
  "take one person one tile onward - they turn to face the way they are going, and everything they are made of slides there together";
  "asked for a person walking behind the player, and asked again for a person the player is trading places with";
  "what a person is made of is filed under WHO they are, so a step moves what is on the screen and nothing has to be filed again. it was not always so: while the filing was by tile, this had to find each part before the move and put it back afterwards, and any other way of moving somebody left their picture behind on an empty tile";
  "the parts are asked for as one list rather than named here one at a time. named, this knew about a picture and a cross, and a light added later would have been left standing on the tile the person walked off - the mover has no way to notice a part it was never told about, so the list is asked of the person instead";
  "the delay is how long they stand still first, which is what puts one member of the line after another instead of all of them at once. it is written after the parts are placed, because placing one writes the whole transition over again";
  let img = app_shared_game_npc_img_get(npc);
  let elements = app_shared_game_npc_elements(npc);
  let direction = g_direction(npc, to);
  object_assign(npc, to);
  app_shared_game_npc_turn_note(npc, direction);
  app_shared_game_character_turn_start(npc, img, direction);
  app_shared_game_npc_place(npc);
  function element_delay(element) {
    g_img_square_style_transition_delay(element, delay);
  }
  each(elements, element_delay);
}
