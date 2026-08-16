import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_verify_view_panel_flush } from "./app_g_verify_view_panel_flush.mjs";
import { equal } from "./equal.mjs";
import { app_g_verify_view_row_new } from "./app_g_verify_view_row_new.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_style_flex } from "./html_style_flex.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_verify_view_highlight_lines } from "./app_g_verify_view_highlight_lines.mjs";
import { html_on } from "./html_on.mjs";
export function app_g_verify_view_lines_in_sermon_order(
  container,
  small_gap,
  border,
  clear_all,
  token_spans,
  highlight,
  lines,
  row_comps,
  order_comps,
) {
  arguments_assert(arguments, 9);
  let ord = app_g_verify_view_panel_flush(container);
  function lambda16(l, li) {
    let eq = equal(li, 0);
    let row = app_g_verify_view_row_new(ord, eq, small_gap, border);
    let text = String(li + 1);
    let n = html_span_text(row, text);
    app_shared_text_deemphasized(n);
    html_style_flex(n, "0 0 1.2em");
    html_style_set(n, "font-variant-numeric", "tabular-nums");
    let text3 = property_get(l, "text");
    html_span_text(row, text3);
    function lambda15() {
      app_g_verify_view_highlight_lines(
        [li],
        clear_all,
        token_spans,
        highlight,
        lines,
        row_comps,
        order_comps,
      );
    }
    html_on(row, "mouseenter", lambda15);
    html_on(row, "mouseleave", clear_all);
    order_comps[li] = row;
  }
  lines.forEach(lambda16);
}
