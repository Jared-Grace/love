import { app_shared_game_npc_img_get } from "./app_shared_game_npc_img_get.mjs";
import { app_shared_game_character_turn_start } from "./app_shared_game_character_turn_start.mjs";
export function app_g_npc_face(npc, direction) {
  "turn a person to look a given way, leaving them standing exactly where they are - their picture turns through the in-between facings until it looks that way, and nothing moves";
  "walking already turns somebody, so this is for the turns that are not a walk: a line that has come to a stop, and everybody in it looking at whoever they are following";
  let img = app_shared_game_npc_img_get(npc);
  app_shared_game_character_turn_start(npc, img, direction);
}
