import { app_g_npc_img_get } from "./app_g_npc_img_get.mjs";
import { app_g_npc_img_set } from "./app_g_npc_img_set.mjs";
import { app_g_npc_cross_get } from "./app_g_npc_cross_get.mjs";
import { app_g_npc_cross_set } from "./app_g_npc_cross_set.mjs";
import { app_g_character_face } from "./app_g_character_face.mjs";
import { g_direction } from "./g_direction.mjs";
import { g_img_square_style_position_object } from "./g_img_square_style_position_object.mjs";
import { g_img_square_style_transition_delay } from "./g_img_square_style_transition_delay.mjs";
import { object_assign } from "./object_assign.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function app_g_day_follower_move(npc, to, delay) {
  "take one person walking behind the player one tile onward - they turn to face the way they are going, their picture slides there, and the cross over them goes with them";
  "two things are remembered by WHERE the person stands, their picture and their cross, so both have to be found before the person is moved and remembered again afterwards. finding them second would be looking for them at an address they no longer live at";
  "the delay is how long they stand still first, which is what puts one member of the line after another instead of all of them at once. it is written after the picture is placed, because placing it writes the whole transition over again";
  let img = app_g_npc_img_get(npc);
  let cross = app_g_npc_cross_get(npc);
  let direction = g_direction(npc, to);
  object_assign(npc, to);
  app_g_character_face(npc, img, direction);
  g_img_square_style_position_object(npc, img);
  g_img_square_style_transition_delay(img, delay);
  app_g_npc_img_set(npc, img);
  let b = null_is(cross);
  let crossed = not(b);
  if (crossed) {
    g_img_square_style_position_object(npc, cross);
    g_img_square_style_transition_delay(cross, delay);
    app_g_npc_cross_set(npc, cross);
  }
}
