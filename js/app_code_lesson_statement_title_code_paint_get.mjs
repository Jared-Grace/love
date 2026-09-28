import { text_space_zero_width } from "./text_space_zero_width.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_space_nb } from "./text_space_nb.mjs";
import { text_replace } from "./text_replace.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_size } from "./text_size.mjs";
import { app_code_title_code_size_max } from "./app_code_title_code_size_max.mjs";
import { less_than_equal_assert_json } from "./less_than_equal_assert_json.mjs";
import { html_span_code_dark } from "./html_span_code_dark.mjs";
import { html_display_inline_block } from "./html_display_inline_block.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
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
    let tile = html_span_code_dark(parent);
    html_display_inline_block(tile);
    html_style_white_space(tile, "pre-line");
    ("the spaces in the code are made ordinary ones, so a piece wider than a whole row breaks between its tokens - let rest = / Math.floor(n / 10); - rather than inside one, at the human's request, 2026-09-28. The tile is an inline block, so a piece that fits on a row still moves to the next row whole, as above; the spaces only come into play once the piece is wider than the row. Before, every space was one that does not break, and the title's break-anywhere rule, the last resort for a line that fits nowhere, cut through the middle of a token - the 10 was split into 1 and 0)");
    let nb = text_space_nb();
    let spaced = text_replace(code, nb, " ");
    ("a place to break is also left just after every opening bracket, because a call and its first argument are written with no space between them - Math.floor(chair / columns) has none before chair, so the break-anywhere rule cut Math.floor itself in two. Just after the bracket keeps the name whole and the bracket with it, at the human's request, 2026-09-28. After a dot was the other choice, and was left out: it would split a number like 3.14 as readily as a name");
    let zero = text_space_zero_width();
    let opened = text_combine_multiple(["(", zero]);
    let shown = text_replace(spaced, "(", opened);
    html_span_text_content(tile, shown);
  }
  return paint_code;
}
