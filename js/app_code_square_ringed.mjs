import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_square_ringed(text, ring_color) {
  "a square of the square grid showing the text with a thick ring of ring_color just inside its edge, as a mark's drawing: the fill stays free for a colour of its own, so a square can say two things at once - in Grid steps, that it is on the path, by the blue ring, and whether it was a step down or a step right, by the fill, asked by the human 2026-10-02";
  function draw(square) {
    html_div_text(square, text);
    html_style_assign(square, {
      "box-shadow": text_combine("inset 0 0 0 0.25em ", ring_color),
    });
  }
  return draw;
}
