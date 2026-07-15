import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_tutorial_study } from "./app_g_tutorial_study.mjs";
import { app_g_tutorial } from "./app_g_tutorial.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { app_g_player_save } from "./app_g_player_save.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { not } from "./not.mjs";
import { app_g_conversation } from "./app_g_conversation.mjs";
import { app_g_container_text } from "./app_g_container_text.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { app_g_button_back } from "./app_g_button_back.mjs";
import { html_remove } from "./html_remove.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_overlay } from "./app_g_overlay.mjs";
import { text_combine } from "./text_combine.mjs";
export async function app_g_click_npc(div_map, npcs_matched) {
  let player = await app_g_player_get();
  let overlay = app_g_overlay(div_map);
  async function overlay_close() {
    await app_g_player_save(player);
    html_remove(overlay);
  }
  let review = property_get(player, "review");
  let ne = list_empty_not_is(review);
  if (ne) {
    app_g_container_text(
      overlay,
      text_combine(emoji_book_open(), " You remember that you need to study!"),
    );
    app_g_button_back(overlay, overlay_close);
    let studied = property_get(player, "studied");
    if (not(studied)) {
      await app_g_tutorial_study(div_map);
    }
  } else {
    let prayer = property_get(player, "prayer");
    let conversation = property_get(prayer, "conversation");
    if (not(conversation)) {
      let container = app_g_container_text(
        overlay,
        text_combine(
          emoji_pray(),
          " You remember that you have not prayed, yet, before your next conversation!",
        ),
      );
      let conversed = property_get(player, "conversed");
      if (not(conversed)) {
        app_g_p_text(
          container,
          " To pray, tap or click on yourself (You glow with white)",
        );
      }
      async function on_back() {
        await overlay_close();
        let text = emoji_pray();
        let player_property = "conversed";
        let tutorial_property = "tutorial_converse";
        await app_g_tutorial(player_property, div_map, tutorial_property, text);
      }
      app_g_button_back(overlay, on_back);
    } else {
      await app_g_conversation(
        prayer,
        npcs_matched,
        overlay,
        overlay_close,
        div_map,
      );
    }
  }
}
