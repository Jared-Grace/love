import { html_width_full } from "./html_width_full.mjs";
import { app_shared_screen_set_button } from "./app_shared_screen_set_button.mjs";
export function app_replace_button_screen_wide(
  context,
  screen_fn,
  parent,
  text,
) {
  let b = app_shared_screen_set_button(parent, context, screen_fn, text);
  html_width_full(b);
}
