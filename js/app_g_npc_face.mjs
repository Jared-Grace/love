import { app_g_npc_img_get } from "./app_g_npc_img_get.mjs";
import { app_g_character_face } from "./app_g_character_face.mjs";
export function app_g_npc_face(npc, direction) {
  "turn a person to look a given way, leaving them standing exactly where they are - their picture is swapped for the one drawn facing that way and nothing moves";
  "walking already turns somebody, so this is for the turns that are not a walk: a line that has come to a stop, and everybody in it looking at whoever they are following";
  let img = app_g_npc_img_get(npc);
  app_g_character_face(npc, img, direction);
}
