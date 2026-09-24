import { app_shared_row_reading } from "./app_shared_row_reading.mjs";
import { html_flex_share_equally } from "./html_flex_share_equally.mjs";
import { app_shared_footer_box } from "./app_shared_footer_box.mjs";
import { html_style_gap_em } from "./html_style_gap_em.mjs";
import { app_shared_contact_button } from "./app_shared_contact_button.mjs";
import { app_shared_all_apps_button } from "./app_shared_all_apps_button.mjs";
export function app_shared_footer(parent) {
  "the foot of an app's page: the two ways out that belong to no app in particular - reach the developer, or go back to the page listing all the apps. Every app ends with this, so what stands there is decided once here rather than app by app.";
  "The apps that do NOT end with it are the ones that ARE that page - the index and the list of all apps, which would be offering a way to themselves - the game, which paints its own screens edge to edge and has its own way back, and the message app, which has the shorter foot next door for the reason written there.";
  "Reaching the developer comes first and going to the apps last, so the last thing a thumb travelling down the page meets is the way onward rather than a message box it did not open the app to write.";
  "The two stand side by side in one row rather than stacked, because one line is less to scroll past than two, and on a short page the pair sits at the bottom of the screen where a thumb already rests.";
  "They share the row equally, whatever their words, for the same reason the arrows of a bible chapter do: buttons dividing only what is left over differ by however much their words differ, which reads as one of them being the important one.";
  "The row is pointed the way the reader reads, so reaching the developer comes first and going to the apps last in that reader's own direction.";
  let footer = app_shared_footer_box(parent);
  let row = app_shared_row_reading(footer);
  html_style_gap_em(row, "0.5");
  let contact = app_shared_contact_button(row);
  let all_apps = app_shared_all_apps_button(row);
  let buttons = [contact, all_apps];
  html_flex_share_equally(buttons);
  return footer;
}
