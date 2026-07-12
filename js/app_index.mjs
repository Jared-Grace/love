import { app_index_main_fns } from "./app_index_main_fns.mjs";
import { app_prefix_without } from "./app_prefix_without.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { html_p } from "./html_p.mjs";
import { html_button_wide } from "./html_button_wide.mjs";
import { window_open_app_curried_right } from "./window_open_app_curried_right.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
export function app_index(context) {
  let root = property_get(context, "root");
  html_mobile_default(context);
  let fns = app_index_main_fns();
  let hash = {};
  let lambda = window_open_app_curried_right(hash);
  function lambda3(a) {
    let fn = property_get(a, "app_fn");
    let without = app_prefix_without(fn);
    function lambda2() {
      lambda(fn);
    }
    let p = html_p(root);
    let component = html_button_wide(p, without, lambda2);
    let text = property_get(a, "text");
    let div = html_div_text_centered(p, text);
  }
  each(fns, lambda3);
}
