import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_main_full } from "./app_shared_name_main_full.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function apps_names_way_in_missing_generic(names, f_names) {
  "Of a list of app names and a list of the function names that exist, the apps neither spelling of a way in is written for.";
  "IT IS APART FROM ITS CALLER SO THAT BOTH ANSWERS CAN BE SHOWN. The caller hands it every app there is and every function there is, and on a repo in good order that pairing can only ever come back empty - so the caller alone proves nothing about whether a fault would be noticed at all, and a check nobody has seen say no is not known to be a check. Handed two lists chosen by whoever is asking, it can be shown finding a fault and shown finding none, on inputs written down beside it.";
  "A way in is either spelling. The combined one is preferred where it exists and the prefixed one stands in where it does not, so an app is only named here when neither is written.";
  arguments_assert(arguments, 2);
  let missing = [];
  for (let a of names) {
    let combined = app_shared_name_main_full(a);
    let prefixed = app_shared_name_prefixed(a);
    let one = list_includes(f_names, combined);
    let two = list_includes(f_names, prefixed);
    if (one) {
      continue;
    }
    if (two) {
      continue;
    }
    list_add(missing, a);
  }
  let sorted = list_sort_text(missing);
  return sorted;
}
