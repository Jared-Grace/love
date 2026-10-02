import { html_div } from "./html_div.mjs";
import { function_is } from "./function_is.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_explain_said(pieces) {
  "a line of writing whose row and column words and numbers wear the colours of the grid's headings, asked by the human 2026-10-01, so the sentence and the picture can be read against each other. Each piece is plain writing, or a function drawing a coloured word or number";
  function draw(box) {
    let line = html_div(box);
    for (let piece of pieces) {
      if (function_is(piece)) {
        piece(line);
      } else {
        html_span_text(line, piece);
      }
    }
  }
  return draw;
}
