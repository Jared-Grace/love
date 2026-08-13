import { app_g_npc_img_get } from "./app_g_npc_img_get.mjs";
import { app_g_npc_cross_get } from "./app_g_npc_cross_get.mjs";
import { app_g_character_face } from "./app_g_character_face.mjs";
import { g_direction } from "./g_direction.mjs";
import { g_img_square_style_position_object } from "./g_img_square_style_position_object.mjs";
import { g_img_square_style_transition_delay } from "./g_img_square_style_transition_delay.mjs";
import { object_assign } from "./object_assign.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function app_g_npc_move(npc, to, delay) {
  "take one person one tile onward - they turn to face the way they are going, their picture slides there, and the cross over them goes with them";
  "asked for a person walking behind the player, and asked again for a person the player is trading places with";
  "two things are remembered about the person, their picture and their cross, and both are filed under WHO they are - so a step moves what is on the screen and nothing has to be filed again. it was not always so: while the filing was by tile, this had to find both before the move and put them back afterwards, and any other way of moving somebody left their picture behind on an empty tile";
  "the delay is how long they stand still first, which is what puts one member of the line after another instead of all of them at once. it is written after the picture is placed, because placing it writes the whole transition over again";
  let img = app_g_npc_img_get(npc);
  let cross = app_g_npc_cross_get(npc);
  let direction = g_direction(npc, to);
  object_assign(npc, to);
  app_g_character_face(npc, img, direction);
  g_img_square_style_position_object(npc, img);
  g_img_square_style_transition_delay(img, delay);
  let b = null_is(cross);
  let crossed = not(b);
  if (crossed) {
    g_img_square_style_position_object(npc, cross);
    g_img_square_style_transition_delay(cross, delay);
  }
}
