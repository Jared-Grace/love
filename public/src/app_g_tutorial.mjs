import { g_icon } from "../../../love/public/src/g_icon.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { g_img_square_size_css } from "../../../love/public/src/g_img_square_size_css.mjs";
import { app_g_main } from "../../../love/public/src/app_g_main.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_g_tutorial(
  player,
  player_property,
  div_map,
  tutorial_property,
  emoji,
) {
  let already = object_property_get(player, player_property);
  if (not(already)) {
    let tutorial = g_icon(div_map, player, emoji);
    global_function_property_set(app_g_main, tutorial_property, tutorial);
    const square_size = `calc(` + g_img_square_size_css() + `*.4)`;
    html_style_assign(tutorial, {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontSize: square_size,
      animation: "upDown 1.25s infinite ease-in-out alternate",
    });
  }
}
