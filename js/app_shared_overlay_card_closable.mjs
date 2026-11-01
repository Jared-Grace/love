import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_overlay_backdrop_card } from "./html_overlay_backdrop_card.mjs";
import { property_get } from "./property_get.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { emoji_x_red } from "./emoji_x_red.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_close_text } from "./app_shared_close_text.mjs";
export function app_shared_overlay_card_closable() {
  "A card over the whole screen that stays open while the reader uses it, and closes only when they ask: an X at its top corner, a Close button at its foot, or a tap on the dimmed backdrop outside it. Returns the part of the card between the two, to draw into.";
  "A TAP INSIDE THE CARD DOES NOT CLOSE IT, asked for by the human 2026-11-01, so a reader can open one choice after another from it - each opens in a new tab - without tapping the word again each time.";
  "TWO WAYS OUT THAT CAN BE SEEN, so nobody is left stuck: a tap on the backdrop is invisible, and a card taller than the screen hides whichever end is scrolled away, so there is a way out at each end.";
  arguments_assert(arguments, 0);
  let r = html_overlay_backdrop_card();
  let backdrop = property_get(r, "backdrop");
  let card = property_get(r, "card");
  function close() {
    html_remove(backdrop);
  }
  let element = html_component_element_get(backdrop);
  function on_backdrop(event) {
    if (equal(event.target, element)) {
      close();
    }
  }
  html_on_click(backdrop, on_backdrop);
  let top = html_div(card);
  html_style_assign(top, {
    "text-align": "end",
  });
  let x = emoji_x_red();
  app_shared_button(top, x, close);
  let body = html_div(card);
  let text = app_shared_close_text();
  app_shared_button(card, text, close);
  return body;
}
