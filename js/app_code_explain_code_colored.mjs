import { html_div } from "./html_div.mjs";
import { html_span_code_dark_colored } from "./html_span_code_dark_colored.mjs";
export function app_code_explain_code_colored(texts, colors) {
  "a line of the writing showing one code chip whose pieces wear the colours given them, each text beside its colour, so a number in the code can wear the colour the picture and the writing give it";
  function draw(box) {
    let line = html_div(box);
    html_span_code_dark_colored(line, texts, colors);
  }
  return draw;
}
