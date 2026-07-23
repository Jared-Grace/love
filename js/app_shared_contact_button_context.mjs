import { property_get } from "./property_get.mjs";
import { app_shared_contact_button } from "./app_shared_contact_button.mjs";
export function app_shared_contact_button_context(context) {
  "a screen-based app clears its whole page on every navigation, so a way to reach the developer has to be re-added once each screen has drawn. Hand this to a context as its after-render hook and every screen ends with the contact button.";
  let root = property_get(context, "root");
  let app_fn = property_get(context, "app_fn");
  let button = app_shared_contact_button(root, app_fn);
  return button;
}
