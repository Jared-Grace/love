import { window_go_app } from "./window_go_app.mjs";
import { app_shared_mobile_default_font_size } from "./app_shared_mobile_default_font_size.mjs";
import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { app_index_card } from "./app_index_card.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
export function app_index_generic(context, entries) {
  let root = property_get(context, "root");
  app_shared_mobile_default_font_size(context);
  let hash = {};
  ("an app opens in the tab that is already here rather than beside it. The browser's own back button is then the way back to this page, instead of a tab the reader has to find and close - which on a phone is much the more expensive of the two.");
  ("It also opened the tab that could not be typed into. Measured on a phone: a box in a tab this page had opened received keyup for every letter and never keydown, so nothing was ever entered, while the same page reached by its own address took every letter. The letters were being lost before the page saw them, so no code here could have caught it or fixed it.");
  function lambda3(entry) {
    let fn = property_get(entry, "app_fn");
    let without = app_shared_name_prefix_without(fn);
    function lambda2() {
      window_go_app(fn, hash);
    }
    let text = property_get(entry, "text");
    app_index_card(root, without, text, lambda2);
  }
  each(entries, lambda3);
}
