import { app_g_container_text } from "./app_g_container_text.mjs";
import { app_g_menu_container } from "./app_g_menu_container.mjs";
import { fn_name } from "./fn_name.mjs";
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
  ("the tap-yourself menu (Pray / Study / New Game / Dev Tools): a heading card over bare buttons, top-anchored in the frame ",
    fn_name("app_g_menu_container"),
    " gives it, spaced only by the margin every control already carries. every screen you can reach FROM here wears this same look, including the pray sub-screen, rather than the menu borrowing the prayer TURN's speaker card.");
  let container = app_g_menu_container(overlay);
  async function close() {
    await app_g_view_set(null);
    html_remove(overlay);
  }
  app_g_container_text(container, "What would you like to do?");
  app_g_button_back(container, close);
  let left = emoji_pray();
  let text = text_combine(left, " Pray");
  function lambda7() {
    ("the pray sub-screen wears the SAME menu frame as the top menu — a back-to-menu button, the heading card, then the prayer button. it is reached from the menu, so it is still the menu talking, not a person taking a conversation turn.\n\nit asks 'What would you like to pray?' with no 'else': nothing has been prayed yet on this screen. 'what else' names a REMAINDER, so it belongs only to a multi-part prayer once a first part is behind you — see ",
      fn_name("g_prayer_prompt_more"),
      ".");
    let sub = app_g_menu_container(overlay);
    function to_menu() {
      app_g_menu(overlay, player);
    }
    app_g_button_back(sub, to_menu);
    app_g_container_text(sub, "What would you like to pray?");
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
