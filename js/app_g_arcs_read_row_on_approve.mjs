import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { app_g_arc_read_mark } from "./app_g_arc_read_mark.mjs";
import { app_shared_button_inline } from "./app_shared_button_inline.mjs";
import { app_g_arc_approve_worded } from "./app_g_arc_approve_worded.mjs";
export function app_g_arcs_read_row_on_approve(r3, line, nickname, row) {
  arguments_assert(arguments, 4);
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
  app_shared_button_inline(row, "mark read", on_read);
  async function on_approve() {
    let r2 = await app_g_arc_approve_worded(
      nickname,
      status_working,
      chapter_code,
      status_set,
      render,
    );
    return r2;
  }
  return on_approve;
}
