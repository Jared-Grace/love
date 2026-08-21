import { app_shared_footer_box } from "./app_shared_footer_box.mjs";
import { app_shared_all_apps_button } from "./app_shared_all_apps_button.mjs";
export function app_shared_footer_all_apps(parent) {
  "the foot of a page for an app that is ITSELF a way to reach the developer: the way back to all the apps, and nothing beside it.";
  "The message app is the one that wants this. Offering to reach the developer there would open a panel over a page that already does exactly that, and the panel keeps its own copy of what has been written, so the reader would be shown a second history of their own messages that does not match the one they are looking at.";
  let footer = app_shared_footer_box(parent);
  app_shared_all_apps_button(footer);
  return footer;
}
