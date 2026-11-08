import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_title_set } from "./html_title_set.mjs";
export function app_learn_en_title_set(language) {
  arguments_assert(arguments, 1);
  ("Names the browser tab after the one language the English is being explained in - English Bible in Tagalog - because the title the page is built with names every language this app explains in, and a reader's tab should name only the one they read.");
  ("Only the tab. The app's own name, the one the list of apps and a shared link's preview show, names every language: that is a name somebody chose, not a fact this screen can read off the reader.");
  let name = property_get(language, "name");
  let title = text_combine_multiple(["English Bible in ", name]);
  html_title_set(title);
}
