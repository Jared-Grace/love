import { html_overlay_backdrop_card } from "./html_overlay_backdrop_card.mjs";
import { property_get } from "./property_get.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_on_click } from "./html_on_click.mjs";
export function html_overlay_card_fixed() {
  "A card shown over the whole screen on a dimmed backdrop, centred, which a tap anywhere closes. Returns the card to draw into.";
  "A tap inside the card closes it too, because the tap reaches the backdrop the card sits in; a press inside the card that must not close it stops its own tap.";
  let r = html_overlay_backdrop_card();
  let backdrop = property_get(r, "backdrop");
  let card = property_get(r, "card");
  function close() {
    html_remove(backdrop);
  }
  html_on_click(backdrop, close);
  return card;
}
