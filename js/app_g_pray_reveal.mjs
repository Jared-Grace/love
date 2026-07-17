import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_prayer_overlay } from "./app_g_prayer_overlay.mjs";
import { app_shared_glow_correct } from "./app_shared_glow_correct.mjs";
import { app_shared_correct_gold } from "./app_shared_correct_gold.mjs";
import { g_z } from "./g_z.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_remove } from "./html_remove.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_g_pray_reveal(container, correct, label) {
  "prayer overlay: a pray button that, after a random delay (waiting on God), reveals the correct choice with glow + gold + raise";
  function reveal() {
    app_shared_glow_correct(correct);
    app_shared_correct_gold(correct);
    html_style_assign(correct, {
      position: "relative",
      "z-index": g_z("raised"),
    });
  }
  function on_pray() {
    html_style_assign(pray_b, {
      opacity: "0.5",
      "pointer-events": "none",
    });
    let delay = list_random_item([1000, 2000, 3000, 4000]);
    setTimeout(reveal, delay);
  }
  let pray_b = app_g_button_green(container, label, on_pray);
  return pray_b;
}
