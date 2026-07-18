import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_prayer_overlay } from "./app_g_prayer_overlay.mjs";
import { app_g_discern_prayed } from "./app_g_discern_prayed.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_remove } from "./html_remove.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_g_pray_reveal(container, correct, label, effect, discern) {
  "prayer overlay: a pray button that marks `discern` prayed, then after a random delay (waiting on God) applies effect(correct) — God answering the discernment (effect = glow+raise for gold Scripture, or gold+glow+raise when God-led words become His word)";
  function on_pray() {
    app_g_discern_prayed(discern);
    html_style_assign(pray_b, {
      opacity: "0.5",
      "pointer-events": "none",
    });
    let waiting = app_g_prayer_overlay();
    function answered() {
      html_remove(waiting);
      effect(correct);
    }
    let delay = list_random_item([4000, 5000, 6000, 7000]);
    setTimeout(answered, delay);
  }
  let pray_b = app_g_button_green(container, label, on_pray);
  return pray_b;
}
