import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_g_conversation_key } from "./app_g_conversation_key.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_container_text } from "./app_g_container_text.mjs";
import { app_g_study } from "./app_g_study.mjs";
import { app_g_new_game } from "./app_g_new_game.mjs";
import { app_g_menu_clear_back } from "./app_g_menu_clear_back.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_button_uncolored } from "./app_g_button_uncolored.mjs";
import { app_g_button_back } from "./app_g_button_back.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_player_save } from "./app_g_player_save.mjs";
import { html_clear } from "./html_clear.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine } from "./text_combine.mjs";
import { g_prayer_conversation } from "./g_prayer_conversation.mjs";
import { app_g_dev_tools_open } from "./app_g_dev_tools_open.mjs";
export function app_g_menu(overlay, player) {
  "the tap-yourself menu (Pray / Study / New Game / Dev Tools). the buttons live in a VERTICALLY-CENTERED column with a heading, not top-anchored in the bare overlay: you open this by tapping your own character in the middle of the map, so the options meet your eyes and finger where you already tapped — otherwise a player taps the dim centre, hits nothing, and never realises it is a menu. the heading names it a menu the same way the conversation turns do.";
  html_clear(overlay);
  let column = html_div(overlay);
  html_style_assign(column, {
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "stretch",
    gap: "0.6rem",
    "min-height": "100%",
    "box-sizing": "border-box",
  });
  async function close() {
    await app_g_view_set(null);
    html_remove(overlay);
  }
  app_g_container_text(column, "What would you like to do?");
  app_g_button_back(column, close);
  let left = emoji_pray();
  let text = text_combine(left, " Pray");
  function lambda7() {
    app_g_menu_clear_back(overlay, player);
    app_g_container_text(overlay, "What prayer would you like to pray?");
    async function lambda22() {
      let prayer = property_get(player, "prayer");
      let property_name = app_g_conversation_key();
      property_set(prayer, property_name, true);
      await app_g_player_save(player);
      close();
    }
    let text = g_prayer_conversation();
    app_g_button_green(overlay, text, lambda22);
  }
  app_g_button_uncolored(column, text, lambda7);
  app_g_study(player, column, close);
  app_g_new_game(column, player);
  app_g_button_uncolored(column, "🛠 Dev Tools", app_g_dev_tools_open);
}
