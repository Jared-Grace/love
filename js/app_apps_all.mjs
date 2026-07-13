import { app_apps_all_main_fns } from "./app_apps_all_main_fns.mjs";
import { app_prefix_without } from "./app_prefix_without.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { app_replace_button_wide } from "./app_replace_button_wide.mjs";
import { app_shared_button_screen_green_style_assign } from "./app_shared_button_screen_green_style_assign.mjs";
import { window_open_app_curried_right } from "./window_open_app_curried_right.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
export function app_apps_all(context) {
  let root = property_get(context, "root");
  html_mobile_default(context);
  let fns = app_apps_all_main_fns();
  let hash = {};
  let lambda = window_open_app_curried_right(hash);
  function lambda3(fn) {
    let without = app_prefix_without(fn);
    function lambda2() {
      lambda(fn);
    }
    let card = app_shared_container(root);
    let component = app_replace_button_wide(card, without, lambda2);
    app_shared_button_screen_green_style_assign(component);
  }
  each(fns, lambda3);
}
