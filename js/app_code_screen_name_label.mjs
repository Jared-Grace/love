import { app_code_screen_name_short } from "./app_code_screen_name_short.mjs";
export function app_code_screen_name_label(screen_name) {
  "How a screen is worded on a button offering it to a reader whose link named a screen that does not exist.";
  "The app's own name is taken off the front of it. A reader looking at one app's page already knows which app they are on, and reading it back to them in front of every choice leaves the one word that differs sitting at the end of five near-identical buttons.";
  let said = app_code_screen_name_short(screen_name);
  return said;
}
