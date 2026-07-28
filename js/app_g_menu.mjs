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
  html_clear(overlay);
  async function close() {
    await app_g_view_set(null);
    html_remove(overlay);
  }
  app_g_button_back(overlay, close);
  let left = emoji_pray();
  let text = text_combine(left, " Pray");
  function lambda7() {
    app_g_menu_clear_back(overlay, player);
    app_g_container_text(overlay, "What prayer would you like to pray?");
    async function lambda22() {
      let prayer = property_get(player, "prayer");
      property_set(prayer, "conversation", true);
      await app_g_player_save(player);
      close();
    }
    let text = g_prayer_conversation();
    app_g_button_green(overlay, text, lambda22);
  }
  app_g_button_uncolored(overlay, text, lambda7);
  app_g_study(player, overlay, close);
  app_g_new_game(overlay, player);
  app_g_button_uncolored(overlay, "🛠 Dev Tools", app_g_dev_tools_open);
}
