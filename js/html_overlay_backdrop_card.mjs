import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { app_shared_color_black_dim } from "./app_shared_color_black_dim.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_z_max } from "./html_z_max.mjs";
import { html_div } from "./html_div.mjs";
export function html_overlay_backdrop_card() {
  "A card shown over the whole screen on a dimmed backdrop, centred, with nothing yet deciding how it closes. Returns the backdrop and the card, so each overlay built on it says for itself what closes it.";
  "The backdrop is fixed to the screen rather than placed in the page, so it opens over whatever part of the page the reader has scrolled to and nothing on the page moves.";
  arguments_assert(arguments, 0);
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
  let r = {
    backdrop,
    card,
  };
  return r;
}
