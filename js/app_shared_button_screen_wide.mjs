import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_button_widen } from "./html_button_widen.mjs";
import { app_shared_screen_set_button } from "./app_shared_screen_set_button.mjs";
export function app_shared_button_screen_wide(
  context,
  screen_fn,
  parent,
  text,
) {
  ("widened the same way ",
    app_shared_button_wide.name,
    " widens its own button, rather than by width alone: the two make the same kind of button and stack in the same column, so a difference between them shows up as one of them sitting off to the side");
  let b = app_shared_screen_set_button(parent, context, screen_fn, text);
  html_button_widen(b);
  return b;
}
