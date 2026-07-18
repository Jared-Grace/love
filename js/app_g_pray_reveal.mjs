import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_prayer_overlay } from "./app_g_prayer_overlay.mjs";
import { app_g_message_overlay } from "./app_g_message_overlay.mjs";
import { app_g_discern_prayed } from "./app_g_discern_prayed.mjs";
import { g_thanks_discernment } from "./g_thanks_discernment.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_remove } from "./html_remove.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_g_pray_reveal(container, correct, label, label_thanks, effect, discern) {
  "a pray button that walks the discernment prayer full circle: the first click ASKS God for discernment (marks `discern` prayed, waits on God, then effect(correct) reveals the discerned choice); the button then re-enables and relabels to a thanksgiving, so EACH later click THANKS God for the discernment He gave (1 Thess 5:18) with a freshly-varied prayer — thank as often as you like (gratitude is inexhaustible)";
  function disable() {
    html_style_assign(pray_b, {
      opacity: "0.5",
      "pointer-events": "none",
    });
  }
  function on_pray() {
    app_g_discern_prayed(discern);
    disable();
    let waiting = app_g_prayer_overlay();
    function answered() {
      html_remove(waiting);
      effect(correct);
      html_text_set(pray_b, label_thanks);
      html_style_assign(pray_b, {
        opacity: "1",
        "pointer-events": "auto",
      });
    }
    let delay = list_random_item([4000, 5000, 6000, 7000]);
    setTimeout(answered, delay);
  }
  function on_thanks() {
    app_g_message_overlay(emoji_pray(), g_thanks_discernment(), app_shared_color_green(), 3500);
  }
  function on_click() {
    if (discern.prayed) {
      on_thanks();
      return;
    }
    on_pray();
  }
  let pray_b = app_g_button_green(container, label, on_click);
  return pray_b;
}
