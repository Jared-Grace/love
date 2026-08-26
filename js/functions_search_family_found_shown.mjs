import { arguments_assert } from "./arguments_assert.mjs";
import { properties_get } from "./properties_get.mjs";
import { functions_search_family_or_null } from "./functions_search_family_or_null.mjs";
import { object_found_shown } from "./object_found_shown.mjs";
import { object_family_first } from "./object_family_first.mjs";
export function functions_search_family_found_shown(all, count, search) {
  "A search's answer cut down to a screenful and said beside how many there were in all, with the family every name it found belongs to written above both when there is one.";
  "The family is written above the names rather than under them, and that is the whole reason this is not simply one more word on the end. A reader goes down a list of names and stops at the first that looks right, so a warning sitting under the list is read after the reading it exists to change.";
  "The word is left off entirely when there is nothing to warn about, so an ordinary answer reads exactly as it always did, and the word being there is itself the whole of the warning.";
  arguments_assert(arguments, 3);
  let names = properties_get(all);
  let family = functions_search_family_or_null(names, search);
  let counted = object_found_shown(all, count);
  let r = object_family_first(family, counted);
  return r;
}
