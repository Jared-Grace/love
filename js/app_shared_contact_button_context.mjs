import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_remove } from "./html_remove.mjs";
import { object_merge } from "./object_merge.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_contact_button } from "./app_shared_contact_button.mjs";
export function app_shared_contact_button_context(context) {
  "a screen-based app clears its whole page on every navigation, so a way to reach the developer has to be re-added once each screen has drawn. Hand this to a context as its after-render hook and every screen ends with the contact button.";
  let root = property_get(context, "root");
  let app_fn = property_get(context, "app_fn");
  ("two renders can overlap — a slow screen may still be loading when the next render clears the page — so take away the button the previous render left before adding this one, and the reader never sees it offered twice");
  let previous = property_get_or_null(context, "contact_button");
  let had_previous = null_not_is(previous);
  if (had_previous) {
    html_remove(previous);
  }
  let button = app_shared_contact_button(root, app_fn);
  object_merge(context, {
    contact_button: button,
  });
  return button;
}
