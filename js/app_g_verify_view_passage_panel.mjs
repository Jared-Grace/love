import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_base } from "./app_shared_container_base.mjs";
import { html_font_set } from "./html_font_set.mjs";
import { app_g_verify_passage_font_size } from "./app_g_verify_passage_font_size.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_line_height } from "./html_style_line_height.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { not } from "./not.mjs";
import { app_shared_text_warning_color } from "./app_shared_text_warning_color.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { app_g_verify_view_highlight_lines } from "./app_g_verify_view_highlight_lines.mjs";
import { html_on } from "./html_on.mjs";
import { html_span_space } from "./html_span_space.mjs";
export function app_g_verify_view_passage_panel(
  container,
  serif,
  covered,
  lines,
  clear_all,
  token_spans,
  highlight,
  row_comps,
  order_comps,
  tokens,
) {
  arguments_assert(arguments, 10);
  let passage_panel = app_shared_container_base(container);
  html_font_set(passage_panel, serif);
  let value = app_g_verify_passage_font_size();
  html_style_font_size(passage_panel, value);
  html_style_line_height(passage_panel, "1.95");
  function lambda9(t, i) {
    let span = html_span_text(passage_panel, t);
    let border_radius = app_shared_border_radius();
    html_border_radius(span, border_radius);
    html_style_padding(span, "0 0.06em");
    html_style_set(span, "transition", "background-color .12s");
    if (not(covered[i])) {
      html_style_set(
        span,
        "text-decoration",
        "underline dashed " + app_shared_text_warning_color(),
      );
      html_style_set(span, "text-underline-offset", "0.2em");
    }
    function lambda8() {
      let lis = [];
      function lambda7(l, li) {
        let a = property_get(l, "indices").indexOf(i);
        if (greater_than_equal(a, 0)) {
          lis.push(li);
        }
      }
      lines.forEach(lambda7);
      app_g_verify_view_highlight_lines(
        lis,
        clear_all,
        token_spans,
        highlight,
        lines,
        row_comps,
        order_comps,
      );
    }
    html_on(span, "mouseenter", lambda8);
    html_on(span, "mouseleave", clear_all);
    token_spans[i] = span;
    html_span_space(passage_panel);
  }
  tokens.forEach(lambda9);
}
