import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_entries_count(tallied) {
  "$plain tallied";
  "How many gloss entries a tallied record stands for, taken off the record so that a ranking or a sum can be asked for by name.";
  "Every reading that gathers gloss entries under something - a book, a chapter, a root, a pair of words, a chapter of another tongue - keeps the running total under the same one word, and then declares the same one-line reader in its own middle to get it back out. Six readings were each carrying their own copy of it under five different local names.";
  ("It is the third of the small gloss readers kept beside each other: ",
    fn_name("gloss_class_count"),
    " reads the count off a gathered class, ",
    fn_name("gloss_row_sightings"),
    " reads the sightings off a gathered row, and this one reads the entries off whatever the entries were tallied under. They stay apart rather than folding into one because the word the total is kept under is not the same word, and a single reader would have had to guess which of the three it had been handed.");
  ("What is handed in is never the entries themselves - it is the thing they were counted for. A record holding a list of entries is a different shape and is not what this answers about.");
  arguments_assert(arguments, 1);
  let entries = property_get(tallied, "entries");
  return entries;
}
