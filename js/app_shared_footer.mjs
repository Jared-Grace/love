import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_contact_button } from "./app_shared_contact_button.mjs";
import { app_shared_all_apps_button } from "./app_shared_all_apps_button.mjs";
export function app_shared_footer(parent) {
  "the foot of an app's page: the two ways out that belong to no app in particular - reach the developer, or go back to the page listing all the apps. Every app ends with this, so what stands there is decided once here rather than app by app.";
  "The apps that do NOT end with it are the ones that ARE that page - the index and the list of all apps, which would be offering a way to themselves - and the game, which paints its own screens edge to edge and has its own way back.";
  "The two sit inside a box of their own rather than being added to the page one after the other, because a screen that draws itself again has to take the previous foot away first, and one thing to take away cannot half-happen the way two can.";
  "Reaching the developer comes first and going to the apps last, so the last thing a thumb travelling down the page meets is the way onward rather than a message box it did not open the app to write.";
  "the whole foot comes under whatever the reader actually came for, so it keeps a gap above it - without one it sits tight against the end of the reading and reads as one more of the things there, and a thumb travelling to the last button lands on it by mistake";
  let footer = html_div(parent);
  let gap = app_shared_spaced_gap();
  html_style_margin_top(footer, gap);
  app_shared_contact_button(footer);
  app_shared_all_apps_button(footer);
  return footer;
}
