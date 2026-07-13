import { html_button } from "./html_button.mjs";
import { app_shared_style_control_inline } from "./app_shared_style_control_inline.mjs";
import { app_shared_button_toggle_style } from "./app_shared_button_toggle_style.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_toggle } from "./list_toggle.mjs";
export function app_reply_button(list, item, root, text) {
  let component = null;
  function style() {
    let chosen = list_includes(list, item);
    app_shared_button_toggle_style(chosen, component);
  }
  function lambda() {
    list_toggle(list, item);
    style();
  }
  component = html_button(root, text, lambda);
  app_shared_style_control_inline(component);
  style();
  return component;
}
