import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { text_includes } from "./text_includes.mjs";
import { app_code_lesson_statement_title_code_dots_paint_get } from "./app_code_lesson_statement_title_code_dots_paint_get.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_line_dots_draw(parts) {
  arguments_assert(arguments, 1);
  ("a line of writing for a lesson's explain list, text and code taking turns as in any other line, where a code part holding three dots draws them in the placeholder grey the home titles give them - so 1 + 2 + 3 + ... + 100 reads as a run with a gap in it, not as three characters of code. Asked for by the human, 2026-09-27");
  function draw(box) {
    let line = html_div(box);
    function part_draw(part, index) {
      if (text_empty_is(part)) {
        return;
      }
      let left = modulo(index, 2);
      let is_code = equal(left, 1);
      if (not(is_code)) {
        html_span_text(line, part);
        return;
      }
      if (text_includes(part, "...")) {
        let paint = app_code_lesson_statement_title_code_dots_paint_get(part);
        paint(line);
        return;
      }
      let chip = html_span_text(line, part);
      html_style_code_dark_nowrap(chip);
    }
    each_index(parts, part_draw);
    return line;
  }
  return draw;
}
