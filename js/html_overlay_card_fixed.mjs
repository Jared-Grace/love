import { html_body_div } from "./html_body_div.mjs";
import { app_shared_color_black_dim } from "./app_shared_color_black_dim.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_z_max } from "./html_z_max.mjs";
import { html_div } from "./html_div.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_on_click } from "./html_on_click.mjs";
export function html_overlay_card_fixed() {
  "A card shown over the whole screen on a dimmed backdrop, centred, which a tap anywhere closes. Returns the card to draw into.";
  "The backdrop is fixed to the screen rather than placed in the page, so it opens over whatever part of the page the reader has scrolled to and nothing on the page moves.";
  "A tap inside the card closes it too, because the tap reaches the backdrop the card sits in; a press inside the card that must not close it stops its own tap.";
  let backdrop = html_body_div();
  let dim = app_shared_color_black_dim();
  html_style_assign(backdrop, {
    position: "fixed",
    inset: "0",
    background: dim,
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    padding: "1em",
    "box-sizing": "border-box",
    "z-index": html_z_max(),
  });
  let card = html_div(backdrop);
  html_style_assign(card, {
    background: "Canvas",
    color: "CanvasText",
    "border-radius": "0.5em",
    padding: "1em",
    width: "100%",
    "max-width": "30em",
    "max-height": "100%",
    "overflow-y": "auto",
    "box-sizing": "border-box",
    "text-align": "center",
  });
  function close() {
    html_remove(backdrop);
  }
  html_on_click(backdrop, close);
  return card;
}
