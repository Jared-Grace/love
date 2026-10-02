import { app_code_span_text_highlight_color } from "./app_code_span_text_highlight_color.mjs";
export function app_code_explain_word_colored(text, color) {
  "a word of the writing in a colour of the picture: the letters coloured and bold, with no background, asked by the human 2026-10-01 - a background is kept for code, such as the row and column numbers, so a filled tile always means code and coloured letters mean English. Bold, because thin coloured letters read faintly. Not picked: a filled tile in the reading font, which looked like code";
  function draw(line) {
    app_code_span_text_highlight_color(line, text, color);
  }
  return draw;
}
