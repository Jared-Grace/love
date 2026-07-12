import { html_style_background_color_set_or_remove_list } from "./html_style_background_color_set_or_remove_list.mjs";
import { html_button } from "./html_button.mjs";
import { list_toggle } from "./list_toggle.mjs";
export function app_reply_button(list, item, root, text) {
  let component = null;
  function lambda() {
    list_toggle(list, item);
    html_style_background_color_set_or_remove_list(component, list, item);
  }
  component = html_button(root, text, lambda);
  html_style_background_color_set_or_remove_list(component, list, item);
  return component;
}
