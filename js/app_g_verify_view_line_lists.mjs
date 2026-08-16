import { app_g_verify_view_lines_in_sermon_order } from "./app_g_verify_view_lines_in_sermon_order.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_verify_view_label_new } from "./app_g_verify_view_label_new.mjs";
import { app_g_verify_view_panel_flush } from "./app_g_verify_view_panel_flush.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { app_g_verify_view_row_new } from "./app_g_verify_view_row_new.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_font_set } from "./html_font_set.mjs";
import { html_style_flex } from "./html_style_flex.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_g_verify_view_highlight_lines } from "./app_g_verify_view_highlight_lines.mjs";
import { html_on } from "./html_on.mjs";
export function app_g_verify_view_line_lists(
  container,
  small_gap,
  lines,
  border,
  tokens,
  serif,
  clear_all,
  token_spans,
  highlight,
  row_comps,
  order_comps,
) {
  arguments_assert(arguments, 11);
  app_g_verify_view_label_new("BY PASSAGE ORDER", container, small_gap);
  let cov = app_g_verify_view_panel_flush(container);
  function lambda10(l, li) {
    return li;
  }
  let order = lines.map(lambda10);
  function lambda11(a, b) {
    let value = property_get(lines[a], "indices");
    let ma = Math.min.apply(null, value);
    let value3 = property_get(lines[b], "indices");
    let mb = Math.min.apply(null, value3);
    let r = subtract(ma, mb) || subtract(a, b);
    return r;
  }
  order.sort(lambda11);
  function lambda14(li, k) {
    let l = lines[li];
    let eq = equal(k, 0);
    let row = app_g_verify_view_row_new(cov, eq, small_gap, border);
    function lambda12(i) {
      let r3 = tokens[i];
      return r3;
    }
    let words = property_get(l, "indices").map(lambda12).join(" ");
    let words_el = html_span_text(row, words);
    html_font_set(words_el, serif);
    html_style_flex(words_el, "0 0 42%");
    app_shared_text_deemphasized(words_el);
    let text = property_get(l, "text");
    html_span_text(row, text);
    function lambda13() {
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
    html_on(row, "mouseenter", lambda13);
    html_on(row, "mouseleave", clear_all);
    row_comps[li] = row;
  }
  order.forEach(lambda14);
  app_g_verify_view_label_new("IN SERMON ORDER", container, small_gap);
  app_g_verify_view_lines_in_sermon_order(
    container,
    small_gap,
    border,
    clear_all,
    token_spans,
    highlight,
    lines,
    row_comps,
    order_comps,
  );
}
