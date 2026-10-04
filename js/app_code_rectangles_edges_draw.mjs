import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { app_code_highlight_color_fifth } from "./app_code_highlight_color_fifth.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_div } from "./html_div.mjs";
import { text_to } from "./text_to.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { app_code_explain_number_colored } from "./app_code_explain_number_colored.mjs";
import { range } from "./range.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_code_rectangles_edges_draw(
  parent,
  columns,
  rows,
  first,
  second,
  across,
  down,
) {
  arguments_assert(arguments, 7);
  ("a picture of two rectangles of squares with their edges numbered, and no squares marked beyond the ones both cover");
  let grid = app_code_rectangles_edges_marked_draw(
    parent,
    columns,
    rows,
    first,
    second,
    across,
    down,
    null,
  );
}
