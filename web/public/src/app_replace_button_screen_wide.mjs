import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { app_replace_button_screen } from "../../../love/public/src/app_replace_button_screen.mjs";
export function app_replace_button_screen_wide(
  context,
  screen_fn,
  parent,
  text,
) {
  let b = app_replace_button_screen(context, screen_fn, parent, text);
  html_width_full(b);
}
