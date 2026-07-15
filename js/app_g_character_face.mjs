import { g_character_img_url } from "./g_character_img_url.mjs";
import { html_src_set } from "./html_src_set.mjs";
import { g_character_face_set } from "./g_character_face_set.mjs";
export function app_g_character_face(character, img, direction) {
  g_character_face_set(character, direction);
  let src = g_character_img_url(character);
  html_src_set(img, src);
}
