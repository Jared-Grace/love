import { html_span_code_dark_colored } from "./html_span_code_dark_colored.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_code_explain_number_colored(text, color) {
  "a row or column number of the writing as the grid draws its headings: a code chip filled with that heading's colour";
  function draw(line) {
    let chip = html_span_code_dark_colored(line, [text], [color]);
    html_style_background_color_set(chip, color);
  }
  return draw;
}
