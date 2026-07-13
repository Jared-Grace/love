import { app_index_main_fns } from "./app_index_main_fns.mjs";
import { app_prefix_without } from "./app_prefix_without.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { app_replace_button_wide } from "./app_replace_button_wide.mjs";
import { app_shared_button_screen_green_style_assign } from "./app_shared_button_screen_green_style_assign.mjs";
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
    let card = app_shared_container(root);
    let component = app_replace_button_wide(card, without, lambda2);
    app_shared_button_screen_green_style_assign(component);
    let text = property_get(a, "text");
    let div = html_div_text_centered(card, text);
  }
  each(fns, lambda3);
}
