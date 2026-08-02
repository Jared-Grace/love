import { arguments_assert } from "./arguments_assert.mjs";
import { storage_browser_object_names } from "./storage_browser_object_names.mjs";
import { js_free_names } from "./js_free_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { not } from "./not.mjs";
export function js_storage_browser_objects(ast) {
  "Which of the browser's own stores this file speaks to itself, rather than through a function whose whole job is to speak to it.";
  "Every reading that watches a stored word starts from the names of the functions that store it, so a file going straight to the browser is not read by any of them. The word it keeps is then published onto somebody's disk with nothing at all looking at it, and the repo reads as if it were in order - which is the same hole the query part of a page address sat in until it was given one door.";
  "The names read but bound nowhere are what is asked, which is the reading the import repair already trusts. Two things fall out of that for free: a store handed to something else whole - to be asked its length, or its key at a place - counts the same as one spoken to in front of a dot, and a field of somebody's own object that happens to be spelled the same way does not count at all.";
  "The answer is which stores, not how many times. A file either speaks to a store itself or it does not, and counting the lines would make an ordinary tidy-up read as a change.";
  arguments_assert(arguments, 1);
  let wanted = storage_browser_object_names();
  let free = js_free_names(ast);
  let found = [];
  for (let name of free) {
    let known = list_includes(wanted, name);
    if (not(known)) {
      continue;
    }
    list_add_unique(found, name);
  }
  found.sort();
  return found;
}
