import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
import { app_shared_footer_box } from "./app_shared_footer_box.mjs";
import { app_shared_contact_button } from "./app_shared_contact_button.mjs";
import { app_shared_all_apps_button } from "./app_shared_all_apps_button.mjs";
export function app_shared_footer(parent) {
  "the foot of an app's page: the two ways out that belong to no app in particular - reach the developer, or go back to the page listing all the apps. Every app ends with this, so what stands there is decided once here rather than app by app.";
  "The apps that do NOT end with it are the ones that ARE that page - the index and the list of all apps, which would be offering a way to themselves - the game, which paints its own screens edge to edge and has its own way back, and the message app, which has the shorter foot next door for the reason written there.";
  "Reaching the developer comes first and going to the apps last, so the last thing a thumb travelling down the page meets is the way onward rather than a message box it did not open the app to write.";
  "The two stand apart by the same gap any two stacked buttons stand apart by, asked for here because this is the thing that stacks them. The first one already has that room above it from the box it is in; the second had only the hair's width a wide button carries for standing beside a neighbour, so beside the buttons of the screen above it read as touching.";
  let footer = app_shared_footer_box(parent);
  app_shared_contact_button(footer);
  let all_apps = app_shared_all_apps_button(footer);
  app_shared_button_gap_above(all_apps);
  return footer;
}
