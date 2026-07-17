import { app_g_menu_clear_back } from "./app_g_menu_clear_back.mjs";
import { app_g_container_text } from "./app_g_container_text.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_button_uncolored } from "./app_g_button_uncolored.mjs";
import { app_g_game_initialize } from "./app_g_game_initialize.mjs";
import { window_reload } from "./window_reload.mjs";
import { emoji_restart } from "./emoji_restart.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_new_game(overlay, player) {
  let text = text_combine(emoji_restart(), " New game");
  function open() {
    app_g_menu_clear_back(overlay, player);
    app_g_container_text(
      overlay,
      "Start a new game? This will erase your current progress",
    );
    async function confirm() {
      await app_g_game_initialize();
      window_reload();
    }
    let text_confirm = text_combine(emoji_restart(), " Yes, start a new game");
    app_g_button_green(overlay, text_confirm, confirm);
  }
  app_g_button_uncolored(overlay, text, open);
}
