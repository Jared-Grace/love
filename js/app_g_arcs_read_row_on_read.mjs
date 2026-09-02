import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_arcs_read_row_line } from "./app_g_arcs_read_row_line.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { app_g_arc_read_mark } from "./app_g_arc_read_mark.mjs";
export function app_g_arcs_read_row_on_read(person, bench, parent, nickname) {
  arguments_assert(arguments, 4);
  let base_source = property_get(person, "base_source");
  let moved_count = property_get(person, "moved_count");
  let r3 = app_g_arcs_read_row_line(
    bench,
    moved_count,
    base_source,
    person,
    parent,
  );
  let line = property_get(r3, "line");
  let row = property_get(r3, "row");
  let render = property_get(r3, "render");
  let status_working = property_get(r3, "status_working");
  let status_set = property_get(r3, "status_set");
  let chapter_code = property_get(r3, "chapter_code");
  html_style_assign(line, {
    "font-size": app_shared_font_size_label(),
    opacity: "0.55",
  });
  async function on_read() {
    let r = await app_g_arc_read_mark(
      nickname,
      status_working,
      chapter_code,
      status_set,
      render,
    );
    return r;
  }
  let r2 = {
    row,
    render,
    status_working,
    status_set,
    chapter_code,
    on_read,
  };
  return r2;
}
