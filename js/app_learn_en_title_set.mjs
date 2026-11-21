import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_title_set } from "./html_title_set.mjs";
export function app_learn_en_title_set(store) {
  arguments_assert(arguments, 1);
  ("Names the browser tab in the reader's own language - Matuto ng Ingles for a Tagalog reader - taken from the chosen language's own function, so the tab is readable by the person it is for and a new language brings its title with it.");
  ("Only the tab. The app's own name, the one the list of apps and a shared link's preview show, names every language: that is a name somebody chose, not a fact this screen can read off the reader.");
  let title = property_get(store, "title");
  html_title_set(title);
}
