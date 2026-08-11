import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_verify_view_highlight_lines(
  li_list,
  clear_all,
  token_spans,
  highlight,
  lines,
  row_comps,
  order_comps,
) {
  arguments_assert(arguments, 7);
  clear_all();
  function lambda6(li) {
    function lambda5(i) {
      html_style_background_color_set(token_spans[i], highlight);
    }
    property_get(lines[li], "indices").forEach(lambda5);
    if (row_comps[li]) {
      html_style_background_color_set(row_comps[li], highlight);
    }
    if (order_comps[li]) {
      html_style_background_color_set(order_comps[li], highlight);
    }
  }
  li_list.forEach(lambda6);
}
