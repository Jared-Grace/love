import { app_index_main_fns } from "../../../love/public/src/app_index_main_fns.mjs";
import { app_prefix_without } from "../../../love/public/src/app_prefix_without.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
import { html_div_text_centered } from "../../../love/public/src/html_div_text_centered.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { html_button_wide } from "../../../love/public/src/html_button_wide.mjs";
import { window_open_app_curried_right } from "../../../love/public/src/window_open_app_curried_right.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_index_main(context) {
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
