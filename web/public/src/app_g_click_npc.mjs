import { app_g_conversation } from "../../../love/public/src/app_g_conversation.mjs";
import { app_g_container } from "../../../love/public/src/app_g_container.mjs";
import { app_g_p_text } from "../../../love/public/src/app_g_p_text.mjs";
import { html_click_none } from "../../../love/public/src/html_click_none.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_g_button_back } from "../../../love/public/src/app_g_button_back.mjs";
import { g_rows_count } from "../../../love/public/src/g_rows_count.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { g_img_square_style_position } from "../../../love/public/src/g_img_square_style_position.mjs";
import { app_g_refresh } from "../../../love/public/src/app_g_refresh.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { app_karate_container_background_color } from "../../../love/public/src/app_karate_container_background_color.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_g_overlay } from "../../../love/public/src/app_g_overlay.mjs";
export function app_g_click_npc(
  div,
  npcs_matched,
  tutorial,
  body,
  player,
  game_prefix,
) {
  marker("1");
  let overlay = app_g_overlay(body);
  let prayer = object_property_get(player, "prayer");
  let conversation = object_property_get(prayer, "conversation");
  if (conversation) {
    app_g_conversation(prayer, npcs_matched, overlay, player, game_prefix);
  } else {
    let container = app_g_container(overlay);
    html_style_assign(container, {
      "background-color": app_karate_container_background_color() + "bc",
    });
    app_g_p_text(
      container,
      emoji_pray() +
        " You remember that you have not prayed, yet, before your next conversation!",
    );
    app_g_p_text(
      container,
      " To pray, tap or click on yourself (You glow with white)",
    );
    function lambda21() {
      overlay_close();
      let conversed = object_property_get(player, "conversed");
      if (conversed) {
        return;
      }
      tutorial = html_div(div);
      html_click_none(tutorial);
      global_function_property_set(app_g_refresh, "tutorial", tutorial);
      g_img_square_style_position(tutorial, player, "tutorial");
      let text = emoji_pray();
      html_text_set(tutorial, text);
      let rows = g_rows_count();
      const square_size =
        `calc(` + `max(100vh / ${rows}, 100vw / ${rows})` + `*.4)`;
      html_style_assign(tutorial, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: square_size,
        animation: "upDown 1.25s infinite ease-in-out alternate",
      });
    }
    app_g_button_back(overlay, lambda21);
  }
  return tutorial;
  function overlay_close() {
    html_remove(overlay);
  }
}
