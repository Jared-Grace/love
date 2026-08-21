import { app_shared_footer_box } from "./app_shared_footer_box.mjs";
import { app_shared_contact_button } from "./app_shared_contact_button.mjs";
import { app_shared_all_apps_button } from "./app_shared_all_apps_button.mjs";
export function app_shared_footer(parent) {
  "the foot of an app's page: the two ways out that belong to no app in particular - reach the developer, or go back to the page listing all the apps. Every app ends with this, so what stands there is decided once here rather than app by app.";
  "The apps that do NOT end with it are the ones that ARE that page - the index and the list of all apps, which would be offering a way to themselves - the game, which paints its own screens edge to edge and has its own way back, and the message app, which has the shorter foot next door for the reason written there.";
  "Reaching the developer comes first and going to the apps last, so the last thing a thumb travelling down the page meets is the way onward rather than a message box it did not open the app to write.";
  let footer = app_shared_footer_box(parent);
  app_shared_contact_button(footer);
  app_shared_all_apps_button(footer);
  return footer;
}
