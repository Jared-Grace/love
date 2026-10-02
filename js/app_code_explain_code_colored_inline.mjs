import { html_span_code_dark_colored } from "./html_span_code_dark_colored.mjs";
export function app_code_explain_code_colored_inline(texts, colors) {
  "one code chip inside a line of the writing, whose pieces wear the colours given them, each text beside its colour, so a worked check such as 0 <= 2 && 2 < 3 can sit in a sentence with is true after it";
  function draw(line) {
    html_span_code_dark_colored(line, texts, colors);
  }
  return draw;
}
