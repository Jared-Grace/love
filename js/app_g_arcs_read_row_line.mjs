import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_arcs_read_row_counted_held } from "./app_g_arcs_read_row_counted_held.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_g_arcs_lines_moved_said } from "./app_g_arcs_lines_moved_said.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div_text } from "./html_div_text.mjs";
export function app_g_arcs_read_row_line(
  bench,
  moved_count,
  base_source,
  person,
  parent,
) {
  arguments_assert(arguments, 5);
  let chapter_code = property_get(bench, "chapter_code");
  let status_set = property_get(bench, "status_set");
  let status_working = property_get(bench, "status_working");
  let render = property_get(bench, "render");
  let said = app_g_arcs_read_row_counted_held(moved_count, base_source, person);
  let approved = property_get(person, "approved");
  let approved_moved_count = property_get(person, "approved_moved_count");
  let approval_said = ", and it has not been approved yet";
  if (approved) {
    approval_said = ", and you approved it as it is worded now";
    let approved_moved = not_equal(approved_moved_count, 0);
    if (approved_moved) {
      let counted_approved = app_g_arcs_lines_moved_said(approved_moved_count);
      approval_said = text_combine_multiple([
        ", and ",
        counted_approved,
        " since you approved it",
      ]);
    }
  }
  said = text_combine_multiple([said, approval_said]);
  let row = html_div(parent);
  html_style_assign(row, {
    display: "flex",
    "flex-wrap": "wrap",
    "align-items": "center",
    gap: "0.5rem",
    "margin-top": "0.4rem",
  });
  let line = html_div_text(row, said);
  let r = {
    chapter_code,
    status_set,
    status_working,
    render,
    row,
    line,
  };
  return r;
}
