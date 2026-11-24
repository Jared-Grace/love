import { arguments_assert } from "./arguments_assert.mjs";
import { apps_pages_language_table } from "./apps_pages_language_table.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_map } from "./list_map.mjs";
export function apps_pages_language(a_name) {
  "$plain a_name";
  "The extra pages one app has besides its own - one per language it speaks to - each with its address name and the title and description it shows in that language. Most apps have none and get an empty list.";
  "★ ONE APP, SEVERAL PAGES. Each page loads the same script as the app's own page and differs only in the words a shared link shows, so it is part of that app rather than an app of its own: built with it, sent with it, and recorded with it. Every place that asks what an app is made of, or which pages are apps, asks here, so they cannot disagree about it.";
  "The page's name is the app's name, then the language code - so it reads as a deeper address of that app, the way every name here is a route.";
  arguments_assert(arguments, 1);
  let table = apps_pages_language_table();
  let has = property_exists(table, a_name);
  if (not(has)) {
    let r = [];
    return r;
  }
  let pages_get = property_get(table, a_name);
  let own = pages_get();
  function lambda(page) {
    let code = property_get(page, "code");
    let name = text_combine_multiple([a_name, "_", code]);
    let title = property_get(page, "title");
    let description = property_get(page, "description");
    let named = {
      app: a_name,
      code,
      name,
      title,
      description,
    };
    return named;
  }
  let pages = list_map(own, lambda);
  return pages;
}
