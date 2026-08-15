import { app_shared_mobile_default_font_size } from "./app_shared_mobile_default_font_size.mjs";
import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { app_index_card } from "./app_index_card.mjs";
import { window_open_app_curried_right } from "./window_open_app_curried_right.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
export function app_index_generic(context, entries) {
  let root = property_get(context, "root");
  app_shared_mobile_default_font_size(context);
  let hash = {};
  let open = window_open_app_curried_right(hash);
  function lambda3(entry) {
    let fn = property_get(entry, "app_fn");
    let without = app_shared_name_prefix_without(fn);
    function lambda2() {
      open(fn);
    }
    let text = property_get(entry, "text");
    app_index_card(root, without, text, lambda2);
  }
  each(entries, lambda3);
}
