import { app_code_explain_code_colored_inline } from "./app_code_explain_code_colored_inline.mjs";
import { html_div } from "./html_div.mjs";
export function app_code_explain_code_colored(texts, colors) {
  "a line of the writing showing one code chip whose pieces wear the colours given them, each text beside its colour, so a number in the code can wear the colour the picture and the writing give it";
  let chip = app_code_explain_code_colored_inline(texts, colors);
  function draw(box) {
    let line = html_div(box);
    chip(line);
  }
  return draw;
}
