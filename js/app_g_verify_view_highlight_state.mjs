import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_g_verify_view_highlight_state(lines) {
  arguments_assert(arguments, 1);
  let covered = {};
  function lambda2(l) {
    function lambda(i) {
      covered[i] = true;
    }
    property_get(l, "indices").forEach(lambda);
  }
  lines.forEach(lambda2);
  let token_spans = [];
  let row_comps = [];
  let order_comps = [];
  function background_clear(component) {
    html_style_background_color_set(component, "");
  }
  function clear_all() {
    token_spans.forEach(background_clear);
    function lambda3(r) {
      if (r) {
        background_clear(r);
      }
    }
    row_comps.forEach(lambda3);
    function lambda4(r) {
      if (r) {
        background_clear(r);
      }
    }
    order_comps.forEach(lambda4);
  }
  let r2 = {
    covered,
    token_spans,
    row_comps,
    order_comps,
    clear_all,
  };
  return r2;
}
