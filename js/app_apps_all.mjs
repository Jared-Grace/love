import { apps_names } from "./apps_names.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { app_replace_button_wide } from "./app_replace_button_wide.mjs";
import { app_shared_button_screen_green_style_assign } from "./app_shared_button_screen_green_style_assign.mjs";
import { window_open_app_curried_right } from "./window_open_app_curried_right.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
export async function app_apps_all(context) {
  let root = property_get(context, "root");
  html_mobile_default(context);
  let names = await apps_names();
  let hash = {};
  let lambda = window_open_app_curried_right(hash);
  function lambda3(name) {
    function lambda2() {
      lambda(name);
    }
    let card = app_shared_container(root);
    let component = app_replace_button_wide(card, name, lambda2);
    app_shared_button_screen_green_style_assign(component);
  }
  each(names, lambda3);
}
