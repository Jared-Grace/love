import { app_g_tutorial_style } from "../../love/js/app_g_tutorial_style.mjs";
import { app_g_player_get } from "../../love/js/app_g_player_get.mjs";
import { g_icon } from "../../love/js/g_icon.mjs";
import { app_g } from "../../love/js/app_g.mjs";
import { global_function_property_set } from "../../love/js/global_function_property_set.mjs";
import { not } from "../../love/js/not.mjs";
import { property_get } from "../../love/js/property_get.mjs";
export async function app_g_tutorial(
  player_property,
  div_map,
  tutorial_property,
  emoji,
) {
  let player = await app_g_player_get();
  let already = property_get(player, player_property);
  if (not(already)) {
    let tutorial = g_icon(div_map, player, emoji);
    global_function_property_set(app_g, tutorial_property, tutorial);
    app_g_tutorial_style(tutorial);
  }
}
