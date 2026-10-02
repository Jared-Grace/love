import { not } from "./not.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { null_is } from "./null_is.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export function app_code_square_edged(text, left_color, top_color) {
  "a square of the square grid showing the text with a thick bar of left_color down its left edge and of top_color along its top edge, either null for no bar, as a mark's drawing: in King steps a bar down the left says the step into the square moved a row, and a bar along the top that it moved a column, so a diagonal step shows both, asked by the human 2026-10-02";
  function draw(square) {
    html_div_text(square, text);
    let shadows = [];
    let b = null_is(left_color);
    if (not(b)) {
      let combined = text_combine("inset 0.3em 0 0 0 ", left_color);
      shadows.push(combined);
    }
    let b2 = null_is(top_color);
    if (not(b2)) {
      let combined2 = text_combine("inset 0 0.3em 0 0 ", top_color);
      shadows.push(combined2);
    }
    html_style_assign(square, {
      "box-shadow": list_join_comma_space(shadows),
    });
  }
  return draw;
}
