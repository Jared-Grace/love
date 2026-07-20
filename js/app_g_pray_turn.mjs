import { app_g_prayer_menu_overlay } from "./app_g_prayer_menu_overlay.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { g_prayers_conversation } from "./g_prayers_conversation.mjs";
import { g_prayer_petition } from "./g_prayer_petition.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_take } from "./list_take.mjs";
import { list_size } from "./list_size.mjs";
import { positive_is } from "./positive_is.mjs";
import { each } from "./each.mjs";
import { app_g_message_overlay } from "./app_g_message_overlay.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
import { html_remove } from "./html_remove.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_pray_turn(prayer_texts, on_done) {
  "the conversation-closing PRAYER turn as its own overlay (gratitude-style, DRY via app_g_prayer_menu_overlay): prompt 'What would you like to pray to God?' + a green button per prayer. the choices are the turns' `prayer_text`s (contextual intercession, composed 'God, please <text>, Amen'); if the conversation had none, fall back to generic g_prayers_conversation. picking one prays it (a brief overlay), removes this overlay, then calls on_done";
  let overlay = app_g_prayer_menu_overlay();
  let container = app_g_container_player(overlay);
  app_g_p_text(container, "What would you like to pray to God?");
  let petitions = petitions_choose(prayer_texts);
  function add(petition) {
    let text = g_prayer_petition(petition);
    let label = text_combine_multiple([emoji_pray(), " ", text]);
    function on_pick() {
      html_remove(overlay);
      let color = app_shared_color_green_light();
      app_g_message_overlay(emoji_pray(), text, color, 3500, on_done);
    }
    app_g_button_green(container, label, on_pick);
  }
  each(petitions, add);
  return overlay;
}
function petitions_choose(prayer_texts) {
  let contextual = positive_is(list_size(prayer_texts));
  if (contextual) {
    return prayer_texts;
  }
  let generic = g_prayers_conversation();
  list_shuffle(generic);
  let some = list_take(generic, 4);
  return some;
}
