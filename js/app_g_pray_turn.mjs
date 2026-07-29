import { petitions_choose } from "./petitions_choose.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_g_prayer_menu_overlay } from "./app_g_prayer_menu_overlay.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { g_prayer_petition } from "./g_prayer_petition.mjs";
import { list_size } from "./list_size.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { positive_is } from "./positive_is.mjs";
import { not } from "./not.mjs";
import { each } from "./each.mjs";
import { app_g_message_overlay } from "./app_g_message_overlay.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_clear } from "./html_clear.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_pray_turn(prayer_texts, on_part, on_done) {
  ("the conversation-closing PRAYER turn as its own overlay (gratitude-style, DRY via ",
    app_g_prayer_menu_overlay.name,
    "): prompt 'What would you like to pray to God?' + a green button per prayer. the choices are the turns' `prayer_text`s (contextual intercession, composed 'God, <ask> <text>, Amen'; falls back to generic if the conversation had none). the player prays EACH one — tapping a prayer prays it (a brief overlay) and REMOVES it, calling on_part for that prayed part — and only when ALL are prayed does it call on_done (interceding fully for the person, not just one request)");
  let overlay = app_g_prayer_menu_overlay();
  let chosen = petitions_choose(prayer_texts);
  function make_item(petition) {
    let item = {
      text: g_prayer_petition(petition),
    };
    return item;
  }
  let remaining = list_map(chosen, make_item);
  function render() {
    html_clear(overlay);
    let i = list_size(remaining);
    let b = positive_is(i);
    let empty = not(b);
    if (empty) {
      html_remove(overlay);
      on_done();
      return;
    }
    let container = app_g_container_player(overlay);
    app_g_p_text(container, "What would you like to pray to God?");
    function add_item(item) {
      let text = property_get(item, "text");
      let v = emoji_pray();
      let label = text_combine_multiple([v, " ", text]);
      function on_pick() {
        function keep(other) {
          let neq = not_equal(other, item);
          return neq;
        }
        remaining = list_filter(remaining, keep);
        on_part();
        let color = app_shared_color_green_light();
        let emoji_text = emoji_pray();
        app_g_message_overlay(emoji_text, text, color, 3500, render);
      }
      app_g_button_green(container, label, on_pick);
    }
    each(remaining, add_item);
  }
  render();
  return overlay;
}
