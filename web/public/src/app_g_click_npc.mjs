import { app_g_tutorial } from "../../../love/public/src/app_g_tutorial.mjs";
import { emoji_book_open } from "../../../love/public/src/emoji_book_open.mjs";
import { app_g_player_save } from "../../../love/public/src/app_g_player_save.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { app_g_conversation } from "../../../love/public/src/app_g_conversation.mjs";
import { app_g_container } from "../../../love/public/src/app_g_container.mjs";
import { app_g_p_text } from "../../../love/public/src/app_g_p_text.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_g_button_back } from "../../../love/public/src/app_g_button_back.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_g_overlay } from "../../../love/public/src/app_g_overlay.mjs";
export async function app_g_click_npc(
  div_map,
  npcs_matched,
  player,
  game_prefix,
) {
  marker("1");
  let overlay = app_g_overlay(div_map);
  function overlay_close() {
    app_g_player_save(player);
    html_remove(overlay);
  }
  html_style_assign(overlay, {
    display: "flex",
    flexDirection: "column",
    gap: "0px",
  });
  let prayer = object_property_get(player, "prayer");
  let conversation = object_property_get(prayer, "conversation");
  if (not(conversation)) {
    let container = app_g_container(overlay);
    app_g_p_text(
      container,
      emoji_pray() +
        " You remember that you have not prayed, yet, before your next conversation!",
    );
    let conversed = object_property_get(player, "conversed");
    if (not(conversed)) {
      app_g_p_text(
        container,
        " To pray, tap or click on yourself (You glow with white)",
      );
    }
    function lambda21() {
      overlay_close();
      let text = emoji_pray();
      const player_property = "conversed";
      const tutorial_property = "tutorial_converse";
      app_g_tutorial(player, player_property, div_map, tutorial_property, text);
    }
    app_g_button_back(overlay, lambda21);
  } else {
    let review = object_property_get(player, "review");
    let ne = list_empty_not_is(review);
    if (ne) {
      let container = app_g_container(overlay);
      app_g_p_text(
        container,
        emoji_book_open() + " You remember that you need to study!",
      );
      app_g_button_back(overlay, overlay_close);
    } else {
      app_g_conversation(
        prayer,
        npcs_matched,
        overlay,
        player,
        game_prefix,
        overlay_close,
      );
    }
  }
}
