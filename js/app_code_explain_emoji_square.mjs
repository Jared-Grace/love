import { html_span_text } from "./html_span_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_code_explain_emoji_square(text, color) {
  "a picture character of the writing, such as the start face or the finish flag, on a small square of the colour its square has in the grid picture, rounded at the corners as the grid's squares are, asked by the human 2026-10-02, so the sentence and the picture can be read against each other. Not picked: a circle, which the human offered as the other choice, because the picture the sentence points at is drawn in squares";
  function draw(line) {
    let span = html_span_text(line, text);
    html_style_assign(span, {
      display: "inline-flex",
      "align-items": "center",
      "justify-content": "center",
      width: "1.5em",
      height: "1.5em",
      "border-radius": "0.2em",
      "vertical-align": "middle",
    });
    html_style_background_color_set(span, color);
  }
  return draw;
}
