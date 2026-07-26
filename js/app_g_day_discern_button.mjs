import { html_document_body } from "./html_document_body.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_day_discern } from "./app_g_day_discern.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_day_discern_button(div_map) {
  "a fixed 'Pray: who's next?' button for the #day_unbelievers demo (bottom-centre, above the map) — the day's discernment-prayer entry. clicking it seeks the Spirit for the next person to talk to, absorbing the pre-conversation pray-gate into one prayer";
  let body = html_document_body();
  let holder = html_div(body);
  html_style_assign(holder, {
    position: "fixed",
    bottom: "1rem",
    left: "50%",
    transform: "translateX(-50%)",
    "z-index": "2000",
  });
  function on_click() {
    app_g_day_discern(div_map);
  }
  let left2 = emoji_pray();
  let label = text_combine(left2, " Pray: who's next?");
  app_g_button_green(holder, label, on_click);
}
