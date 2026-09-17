import { app_shared_game_npc_img_get } from "./app_shared_game_npc_img_get.mjs";
import { app_shared_game_character_turn } from "./app_shared_game_character_turn.mjs";
export async function app_g_npc_face(npc, direction) {
  "turn a person to look a given way, leaving them standing exactly where they are - their picture is swapped for the one drawn facing that way and nothing moves";
  "walking already turns somebody, so this is for the turns that are not a walk: a line that has come to a stop, and everybody in it looking at whoever they are following";
  let img = app_shared_game_npc_img_get(npc);
  await app_shared_game_character_turn(npc, img, direction);
}
