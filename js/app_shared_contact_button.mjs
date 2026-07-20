import { app_shared_button } from "./app_shared_button.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_email } from "./emoji_email.mjs";
import { window_open_app } from "./window_open_app.mjs";
import { app_shared_name_prefix_without_fn } from "./app_shared_name_prefix_without_fn.mjs";
import { fn_name } from "./fn_name.mjs";
export function app_shared_contact_button(parent, app_fn) {
  "a way for every app to reach the developer, without each app reinventing it: opens the message app (its own screen, one shared inbox) with the box pre-filled '<this app> app: ', so a reply knows which app the person is writing about. Reached by app name (a string), never by importing the message app, so this stays an app-agnostic shared component.";
  let from = app_shared_name_prefix_without_fn(app_fn);
  function on_click() {
    let hash = {
      from,
    };
    window_open_app(fn_name("app_message"), hash);
  }
  let label = text_combine(emoji_email(), " Contact the developer");
  let button = app_shared_button(parent, label, on_click);
  return button;
}
