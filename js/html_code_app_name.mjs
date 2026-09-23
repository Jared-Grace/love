import { fn_name } from "./fn_name.mjs";
import { app_shared_names } from "./app_shared_names.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { app_shared_title } from "./app_shared_title.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
export function html_code_app_name(title_text) {
  "$plain title_text";
  "The short name of the app a generated page belongs to, worked back from the title a person reads in the browser tab.";
  (fn_name("html_code"),
    " puts ",
    fn_name("app_shared_title"),
    "(name) into the title, and that turns a short name into a plain name, and a sentence after it for the apps that have been given one. Reading the page back has to undo the same step, or the sentence gets used as the name: measured 2026-08-23, regenerating a page that way asked for the description and the card picture of an app called Bible - read it in your own language, got nothing for either, and wrote a page with no social tags at all.");
  ("An app with no name of its own is called by its short name already, so a title that matches no app is the name. Every app that has a title other than its short name has a name, so the list of names is the whole of what to undo.");
  let names_given = app_shared_names();
  let names = object_property_names(names_given);
  let found = title_text;
  function lambda(name) {
    let title = app_shared_title(name);
    let same = equal(title, title_text);
    if (same) {
      found = name;
    }
  }
  each(names, lambda);
  return found;
}
