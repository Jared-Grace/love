import { html_element } from "./html_element.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
// The chooser screen: a heading + one wide button per example. Clicking a title
// loads just that example (on_select is called with its index).
export function examples_menu_dom(parent, examples, on_select) {
  let heading = html_element(parent, "h1");
  html_text_set(heading, "Transform examples");
  html_style_set(heading, "font-size", "1.6rem");
  let index = 0;
  for (let example of examples) {
    let title = property_get(example, "title");
    let chosen = index;
    function on_click() {
      on_select(chosen);
    }
    let button = app_shared_button_wide(parent, title, on_click);
    html_style_set(button, "margin-bottom", "0.5rem");
    html_style_set(button, "text-align", "left");
    index = index + 1;
  }
}
