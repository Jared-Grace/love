import { html_on_transitionend } from "./html_on_transitionend.mjs";
import { g_img_square_style_position_object_later } from "./g_img_square_style_position_object_later.mjs";
export async function app_g_player_move_animate(player, player_img_c) {
  let properties = ["left", "top"];
  let on_transition_begin = g_img_square_style_position_object_later(
    player,
    player_img_c,
  );
  await html_on_transitionend(properties, player_img_c, on_transition_begin);
}
