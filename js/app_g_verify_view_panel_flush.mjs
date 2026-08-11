import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_base } from "./app_shared_container_base.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_style_overflow_hidden } from "./html_style_overflow_hidden.mjs";
export function app_g_verify_view_panel_flush(container) {
  arguments_assert(arguments, 1);
  let p = app_shared_container_base(container);
  html_style_padding_x(p, "0");
  html_style_padding_y(p, "0");
  html_style_overflow_hidden(p);
  return p;
}
