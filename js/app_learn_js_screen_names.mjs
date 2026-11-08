import { app_learn_js_screens } from "./app_learn_js_screens.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function app_learn_js_screen_names() {
  "The name each screen of the code app is remembered and linked to by.";
  "Read off the screens themselves rather than written down again, because the name a link carries is the name of the function that draws the screen - a screen renamed is a screen whose word in a link changed with it, and a second list would go on offering the old one.";
  let screens = app_learn_js_screens();
  let names = list_map_property(screens, "name");
  return names;
}
