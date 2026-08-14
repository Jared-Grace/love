import { app_shared_titles } from "./app_shared_titles.mjs";
import { null_is } from "./null_is.mjs";
import { property_or_null } from "./property_or_null.mjs";
export function app_shared_title(app_name) {
  "$plain app_name";
  "What an app calls itself where a person reads it - the browser tab, and the heading on a card built from a shared link.";
  "An app that has not been given one is called by its own short name, which is what every app was called before this existed.";
  let titles = app_shared_titles();
  let found = property_or_null(titles, app_name);
  if (null_is(found)) {
    return app_name;
  }
  return found;
}
