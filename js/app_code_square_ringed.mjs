import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_div_text } from "./html_div_text.mjs";
export function app_code_square_ringed(text, fill_color) {
  "a square of the square grid drawn as a ring: the mark's own colour fills the square and shows as a thick ring round its edge, and a smaller rounded square of fill_color inside holds the text, so a square can say two things at once - in Grid steps, that it is on the path, by the blue ring, and whether it was a step down or a step right, by the fill, asked by the human 2026-10-02";
  "The inside is a square of its own with rounded corners, asked by the human the same day. Not picked: an inset shadow for the ring, whose inside corners come out almost square, because an inset shadow's inner edge takes the square's rounding less the ring's width";
  function draw(square) {
    let inner = html_div(square);
    html_style_assign(inner, {
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      width: "calc(100% - 0.5em)",
      height: "calc(100% - 0.5em)",
      "border-radius": "0.25em",
    });
    html_style_background_color_set(inner, fill_color);
    html_div_text(inner, text);
  }
  return draw;
}
