import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_code_dark } from "./html_span_code_dark.mjs";
import { html_display_inline_block } from "./html_display_inline_block.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
export function app_code_lesson_statement_title_code_paint_get(code) {
  arguments_assert(arguments, 1);
  ("what paints one piece of a home title's code: the code in one dark tile");
  ("A title may show more than one piece side by side - the line of the lesson before, then what this lesson adds - and each piece is its own tile, so a narrow screen moves a whole piece to the next row rather than breaking one in the middle.");
  function paint_code(parent) {
    let tile = html_span_code_dark(parent);
    html_display_inline_block(tile);
    html_style_white_space(tile, "pre-line");
    html_span_text_content(tile, code);
  }
  return paint_code;
}
