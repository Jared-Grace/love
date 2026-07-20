import { app_g_prayer_menu_overlay } from "./app_g_prayer_menu_overlay.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { g_prayers_conversation } from "./g_prayers_conversation.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_take } from "./list_take.mjs";
import { each } from "./each.mjs";
import { app_g_message_overlay } from "./app_g_message_overlay.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
import { html_remove } from "./html_remove.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_pray_turn(on_done) {
  "the conversation-closing PRAYER turn as its own full-screen overlay, laid out like the gratitude menu (DRY, via app_g_prayer_menu_overlay): a player container + prompt 'What would you like to pray to God?' + a green button per GENERIC prayer choice; picking one prays it (a brief prayer overlay), removes this overlay, then calls on_done. content is placeholder — contextual prayers (for THIS person's needs) reviewed later";
  let overlay = app_g_prayer_menu_overlay();
  let container = app_g_container_player(overlay);
  app_g_p_text(container, "What would you like to pray to God?");
  let prayers = g_prayers_conversation();
  list_shuffle(prayers);
  let some = list_take(prayers, 4);
  function add(prayer) {
    let emoji = property_get(prayer, "emoji");
    let text = property_get(prayer, "text");
    let label = text_combine_multiple([emoji, " ", text]);
    function on_pick() {
      html_remove(overlay);
      let color = app_shared_color_green_light();
      app_g_message_overlay(emoji_pray(), text, color, 3500, on_done);
    }
    app_g_button_green(container, label, on_pick);
  }
  each(some, add);
  return overlay;
}
