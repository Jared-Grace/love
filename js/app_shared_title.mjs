import { app_shared_name } from "./app_shared_name.mjs";
import { app_shared_taglines } from "./app_shared_taglines.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_title(app_name) {
  "$plain app_name";
  "What an app calls itself where a person reads it - the browser tab, and the heading on a card built from a shared link.";
  "Its name, from the one list of names, and then what it does when it has been given a line for that. The name is never written here, so the tab and the front page cannot call the same app two different things.";
  let name = app_shared_name(app_name);
  let taglines = app_shared_taglines();
  let tagline = property_or_null(taglines, app_name);
  if (null_is(tagline)) {
    return name;
  }
  let title = text_combine_multiple([name, " - ", tagline]);
  return title;
}
