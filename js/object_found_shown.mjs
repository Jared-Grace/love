import { arguments_assert } from "./arguments_assert.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { object_pick } from "./object_pick.mjs";
export function object_found_shown(object, count) {
  "The first so many things named in an object, handed back beside how many were named in it altogether.";
  "Shortening an answer and saying how long it really was belong together, because either one alone misleads. A short list on its own reads as the whole of a thing, and a bare number is not an answer. Held side by side they are read against each other, and a cut can never be mistaken for a complete finding.";
  arguments_assert(arguments, 2);
  let names = properties_get(object);
  let found = names.length;
  let shown_names = list_slice_count(names, 0, count);
  let shown = object_pick(object, shown_names);
  let r = {
    found,
    shown,
  };
  return r;
}
