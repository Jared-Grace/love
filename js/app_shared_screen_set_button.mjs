import { app_replace_button } from "./app_replace_button.mjs";
import { app_shared_screen_later } from "./app_shared_screen_later.mjs";
export function app_shared_screen_set_button(parent, context, screen_fn, text) {
  let f = app_shared_screen_later(context, screen_fn);
  let b = app_replace_button(parent, text, f);
  return b;
}
