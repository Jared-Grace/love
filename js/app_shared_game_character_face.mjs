import { app_shared_game_character_picture_set } from "./app_shared_game_character_picture_set.mjs";
import { g_character_face_set } from "./g_character_face_set.mjs";
export function app_shared_game_character_face(character, img, direction) {
  g_character_face_set(character, direction);
  app_shared_game_character_picture_set(character, img, direction);
}
