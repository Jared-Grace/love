import { not } from "./not.mjs";
import { app_shared_color_white } from "./app_shared_color_white.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { null_is } from "./null_is.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { html_div } from "./html_div.mjs";
export function app_code_square_edged(text, left_color, top_color) {
  "a square of the square grid showing the text with a thick bar of left_color down its left edge and of top_color along its top edge, either null for no bar, as a mark's drawing: in King steps a bar down the left says the step into the square moved a row, and a bar along the top that it moved a column, so a diagonal step shows both, asked by the human 2026-10-02";
  "The bars are the square's own left and top borders, so where both are drawn they meet on a diagonal seam, as the corner of a picture frame does, asked by the human the same day. A thin light line runs between each bar and the fill, and another along the seam, so the three colours stay apart. Not picked: inset shadows for the bars, which overlap at the corner instead of meeting on a seam.";
  "The seam is drawn from the inside corner outwards, as long as a bar is wide: the square's outer corner is rounded by as much as a bar is wide, so the seam ends on that curve rather than running past it.";
  let width = "0.3em";
  let light = app_shared_color_white();
  function draw(square) {
    html_div_text(square, text);
    let shadows = [];
    let b = null_is(left_color);
    if (not(b)) {
      html_style_assign(square, {
        "border-left": text_combine_multiple([width, " solid ", left_color]),
      });
      let combined = text_combine("inset 1px 0 0 0 ", light);
      shadows.push(combined);
    }
    let b2 = null_is(top_color);
    if (not(b2)) {
      html_style_assign(square, {
        "border-top": text_combine_multiple([width, " solid ", top_color]),
      });
      let combined2 = text_combine("inset 0 1px 0 0 ", light);
      shadows.push(combined2);
    }
    html_style_assign(square, {
      "box-shadow": list_join_comma_space(shadows),
    });
    let b3 = null_is(left_color);
    if (not(b3) && not(null_is(top_color))) {
      html_style_assign(square, {
        position: "relative",
      });
      let seam = html_div(square);
      html_style_assign(seam, {
        position: "absolute",
        left: "0",
        top: "0",
        width,
        height: "1px",
        background: light,
        "transform-origin": "0 0",
        transform: "rotate(225deg)",
      });
    }
  }
  return draw;
}
