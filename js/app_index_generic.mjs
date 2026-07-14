import { app_prefix_without } from "./app_prefix_without.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_replace_button_wide } from "./app_replace_button_wide.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_shared_font_size_small } from "./app_shared_font_size_small.mjs";
import { window_open_app_curried_right } from "./window_open_app_curried_right.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
export function app_index_generic(context, entries) {
  let root = property_get(context, "root");
  html_mobile_default(context);
  let hash = {};
  let open = window_open_app_curried_right(hash);
  function lambda3(entry) {
    let fn = property_get(entry, "app_fn");
    let without = app_prefix_without(fn);
    function lambda2() {
      open(fn);
    }
    let card = app_shared_container_blue(root);
    let component = app_replace_button_wide(card, without, lambda2);
    html_style_font_size(component, app_shared_font_size_small());
    let text = property_get(entry, "text");
    let has_text = text_empty_not_is(text);
    if (has_text) {
      let div = html_div_text_centered(card, text);
    }
  }
  each(entries, lambda3);
}
