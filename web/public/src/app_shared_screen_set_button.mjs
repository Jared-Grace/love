import { html_button } from "../../../love/public/src/html_button.mjs";
import { app_shared_screen_set_fn } from "../../../love/public/src/app_shared_screen_set_fn.mjs";
export function app_shared_screen_set_button(context, screen_fn, bar, text) {
  let lambda4 = app_shared_screen_set_fn(context, screen_fn);
  let component2 = html_button(bar, text, lambda4);
}
