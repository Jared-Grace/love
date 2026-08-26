import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { object_merge } from "./object_merge.mjs";
export function object_family_first(family, object) {
  "An answer with the family that all of its names share written above it, when there is one, and exactly the answer itself when there is not.";
  "The word goes first because it is a warning, and a warning read after the thing it warns about has already been read is not a warning. An answer to a search is a list of names, and the eye goes down that list and stops at the first one that looks right; a word sitting under the list arrives too late to have changed what the reader did with the names above it.";
  "Nothing whatever is added when there is no family, so an ordinary answer reads exactly as it always did, and the word being there is itself the whole of the warning.";
  arguments_assert(arguments, 2);
  let none = not(family);
  if (none) {
    return object;
  }
  let r = {
    family,
  };
  object_merge(r, object);
  return r;
}
