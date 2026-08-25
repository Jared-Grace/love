import { arguments_assert } from "./arguments_assert.mjs";
import { object_found_shown } from "./object_found_shown.mjs";
import { properties_get } from "./properties_get.mjs";
import { functions_search_family_or_null } from "./functions_search_family_or_null.mjs";
import { property_set } from "./property_set.mjs";
export function functions_search_found_shown_family(all, count, search) {
  "A search's answer cut down to a screenful and said beside how many there were in all, carrying one more word when every name it found begins with something longer than what was asked for.";
  "The word is left off entirely when there is nothing to warn about, so an ordinary answer reads exactly as it always did and the word being there is itself the whole of the warning.";
  arguments_assert(arguments, 3);
  let r = object_found_shown(all, count);
  let names = properties_get(all);
  let family = functions_search_family_or_null(names, search);
  if (family) {
    property_set(r, "family", family);
  }
  return r;
}
