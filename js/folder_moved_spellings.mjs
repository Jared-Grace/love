import { arguments_assert } from "./arguments_assert.mjs";
import { folder_spellings } from "./folder_spellings.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_get } from "./list_get.mjs";
export function folder_moved_spellings(before, after) {
  "For a folder that has been given a new home, every way of writing the old place paired with the same way of writing the new one.";
  "The two sides are asked of the same function, so they come back in the same order and the same number, and pairing them by position is safe by construction rather than by care. Adding a third way of writing a folder is then one edit in that one function, and both sides of every pair learn it together.";
  arguments_assert(arguments, 2);
  let befores = folder_spellings(before);
  let afters = folder_spellings(after);
  function lambda(one, index) {
    let other = list_get(afters, index);
    let pair = {
      before: one,
      after: other,
    };
    return pair;
  }
  let pairs = list_map_index(befores, lambda);
  return pairs;
}
