import { html_style_background_color_set_or_remove_list } from "../../../love/public/src/html_style_background_color_set_or_remove_list.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { list_toggle } from "../../../love/public/src/list_toggle.mjs";
export function app_reply_button(list, item, root, text) {
  marker("1");
  let component = null;
  function lambda3() {
    list_toggle(list, item);
    html_style_background_color_set_or_remove_list(list, item, component);
  }
  component = html_button(root, text, lambda3);
  html_style_background_color_set_or_remove_list(list, item, component);
  return component;
}
