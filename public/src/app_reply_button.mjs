import { marker } from "../../../love/public/src/marker.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { html_style_background_color_set_or_remove } from "../../../love/public/src/html_style_background_color_set_or_remove.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { list_toggle } from "../../../love/public/src/list_toggle.mjs";
export function app_reply_button(list, item, root, text) {
  marker("1");
  function lambda3() {
    list_toggle(list, item);
    let chosen = list_includes(list, item);
    html_style_background_color_set_or_remove(chosen, component, "lightgreen");
  }
  let component = null;
  component = html_button(root, text, lambda3);
  return component;
}
