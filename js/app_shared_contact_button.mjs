import { app_shared_button } from "./app_shared_button.mjs";
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
  let label = text_combine(emoji_email(), " Contact the developer");
  let button = app_shared_button(parent, label, on_click);
  return button;
}
