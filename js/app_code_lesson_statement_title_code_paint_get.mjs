import { html_text_code_breakable_add } from "./html_text_code_breakable_add.mjs";
import { app_code_lesson_title_code_tile } from "./app_code_lesson_title_code_tile.mjs";
import { app_code_lesson_title_code_breakable } from "./app_code_lesson_title_code_breakable.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_size } from "./text_size.mjs";
import { app_code_title_code_size_max } from "./app_code_title_code_size_max.mjs";
import { less_than_equal_assert_json } from "./less_than_equal_assert_json.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
export function app_code_lesson_statement_title_code_paint_get(code) {
  arguments_assert(arguments, 1);
  ("what paints one piece of a home title's code: the code in one dark tile");
  ("A title may show more than one piece side by side - the line of the lesson before, then what this lesson adds - and each piece is its own tile, so a narrow screen moves a whole piece to the next row rather than breaking one in the middle.");
  ("A piece longer than ",
    fn_name("app_code_title_code_size_max"),
    " throws when the lesson is built, so a long title is caught before anyone skims it.");
  let size = text_size(code);
  let max = app_code_title_code_size_max();
  less_than_equal_assert_json(size, max, {
    code,
  });
  function paint_code(parent) {
    let tile = app_code_lesson_title_code_tile(parent);
    let shown = app_code_lesson_title_code_breakable(code);
    html_text_code_breakable_add(tile, shown, html_span_text_content);
  }
  return paint_code;
}
