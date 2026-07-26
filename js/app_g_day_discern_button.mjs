import { html_document_body } from "./html_document_body.mjs";
import { html_div } from "./html_div.mjs";
import { html_id_set } from "./html_id_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_width_full } from "./html_width_full.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_day_discern } from "./app_g_day_discern.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_day_discern_button(div_map) {
  "the day's discernment-prayer entry (#day_unbelievers): a PROMINENT full-width green BAR fixed across the bottom (styled like the quiz's 'pray for discernment' button, not a small floating pill), so it reads as the primary action. carries the id day-discern-bar so the gold guide-tile computation can EXCLUDE the strip it covers (else a guide tile could hide under it). clicking seeks the Spirit for the next person, absorbing the pre-conversation pray-gate into one prayer";
  let body = html_document_body();
  let holder = html_div(body);
  html_id_set(holder, "day-discern-bar");
  html_style_assign(holder, {
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    "z-index": "2000",
    padding: "0.5rem",
    "box-sizing": "border-box",
    background: "rgba(0, 0, 0, 0.35)",
  });
  function on_click() {
    app_g_day_discern(div_map);
  }
  let label = text_combine(emoji_pray(), " Pray: who's next?");
  let button = app_g_button_green(holder, label, on_click);
  html_width_full(button);
  html_style_assign(button, {
    "font-size": "1.3rem",
    padding: "0.9rem",
  });
}
