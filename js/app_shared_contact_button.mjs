import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_email } from "./emoji_email.mjs";
import { app_shared_name_prefix_without_fn } from "./app_shared_name_prefix_without_fn.mjs";
import { app_shared_contact_overlay } from "./app_shared_contact_overlay.mjs";
export function app_shared_contact_button(parent, app_fn) {
  "every app can offer a way to reach the developer without reinventing it: opens an in-app contact screen (a panel over the app, so the reader never leaves the PWA), pre-filled '<this app> app: ' so a reply knows which app the person is writing about.";
  let from = app_shared_name_prefix_without_fn(app_fn);
  function on_click() {
    app_shared_contact_overlay(from);
  }
  let left = emoji_email();
  let label = text_combine(left, " Contact the developer");
  ("full width, because every app adds this alone at the foot of the page rather than beside other buttons - so the one shape it is ever drawn in is decided here once instead of by each app remembering to widen it. an app that ever does put it in a row with other buttons is the one that overrides the width, and it still receives the button back to do that with");
  let button = app_shared_button_wide(parent, label, on_click);
  return button;
}
