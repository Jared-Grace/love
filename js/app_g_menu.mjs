import { app_g_menu_container } from "./app_g_menu_container.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { app_g_conversation_key } from "./app_g_conversation_key.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_study } from "./app_g_study.mjs";
import { app_g_new_game } from "./app_g_new_game.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_button_uncolored } from "./app_g_button_uncolored.mjs";
import { app_g_button_back } from "./app_g_button_back.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_player_save } from "./app_g_player_save.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine } from "./text_combine.mjs";
import { g_prayer_conversation } from "./g_prayer_conversation.mjs";
import { app_g_dev_tools_open } from "./app_g_dev_tools_open.mjs";
export function app_g_menu(overlay, player) {
  ("the tap-yourself menu (Pray / Study / New Game / Dev Tools). heading and buttons sit in ONE ",
    fn_name("app_g_container_player"),
    " card — the SAME container the conversation / prayer screens use, so the buttons carry the same tight spacing rather than the wider flex gap this used to add. the card is wrapped in a VERTICALLY-CENTERED column, not top-anchored in the bare overlay: you open this by tapping your own character in the middle of the map, so the options meet your eyes and finger where you already tapped — otherwise a player taps the dim centre, hits nothing, and never realises it is a menu. the heading names it a menu the same way the conversation turns do.");
  let container = app_g_menu_container(overlay);
  async function close() {
    await app_g_view_set(null);
    html_remove(overlay);
  }
  app_g_p_text(container, "What would you like to do?");
  app_g_button_back(container, close);
  let left = emoji_pray();
  let text = text_combine(left, " Pray");
  function lambda7() {
    "the pray sub-screen wears the SAME centered menu card as the top menu (not a bare top-anchored overlay): its own frame, a back-to-menu button, the heading, then the prayer button.";
    let sub = app_g_menu_container(overlay);
    function to_menu() {
      app_g_menu(overlay, player);
    }
    app_g_button_back(sub, to_menu);
    app_g_p_text(sub, "What else would you like to pray?");
    async function lambda22() {
      let prayer = property_get(player, "prayer");
      let property_name = app_g_conversation_key();
      property_set(prayer, property_name, true);
      await app_g_player_save(player);
      close();
    }
    let text = g_prayer_conversation();
    app_g_button_green(sub, text, lambda22);
  }
  app_g_button_uncolored(container, text, lambda7);
  app_g_study(player, container, close);
  app_g_new_game(container, player);
  app_g_button_uncolored(container, "🛠 Dev Tools", app_g_dev_tools_open);
}
