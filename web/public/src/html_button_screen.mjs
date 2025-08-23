import {app_screen_set} from "./app_screen_set.mjs";
import {html_button} from "./html_button.mjs";
export function html_button_screen(parent, text, context, screen_name) {
  html_button(parent, text, lambda);
  function lambda() {
    app_screen_set(context, screen_name);
  }
}
