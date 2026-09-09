import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_list_size } from "./property_list_size.mjs";
export function gloss_chapter_found_count(chapter) {
  "$plain chapter";
  "How many findings one offending gloss chapter holds, taken off the chapter so that a whole reading's total can be asked for by name.";
  "Every reading that walks the gloss store for one kind of fault hands back a chapter at a time, each carrying the findings it met under the same one word, and every one of those readings then wants the total across all of them. So each declared the same one-line reader in its own middle, all three of them under the same local name.";
  ("It is the offender-shaped member of the small gloss readers kept beside each other, alongside ",
    fn_name("gloss_class_count"),
    ", ",
    fn_name("gloss_row_sightings"),
    " and ",
    fn_name("gloss_entries_count"),
    ". They stay apart rather than folding into one because the word the total is kept under is not the same word in any two of them.");
  ("It answers about the list, not about a tally written down beside it. A chapter that met nothing is either absent from the reading altogether or carries an empty list, and an empty list answers nothing rather than refusing.");
  arguments_assert(arguments, 1);
  let size = property_list_size(chapter, "found");
  return size;
}
