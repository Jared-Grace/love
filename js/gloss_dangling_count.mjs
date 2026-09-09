import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_dangling_count(counted) {
  "$plain counted";
  "How many pointers a counted gloss record leaves dangling - pointing at a word the store never explains - taken off the record so that a sum or a ranking can be asked for by name.";
  "A pointer dangles when one gloss sends a reader back to a word met earlier and no entry was ever written for that word. Three readings stand on that number and each carried its own one-line copy of this reader under its own local name: one adds it up over the chapters of a store, one ranks the chapters of a store by it, and the gate above them adds it up over the stores.";
  ("It is the pointer-shaped member of the small gloss readers kept beside each other, alongside ",
    fn_name("gloss_class_count"),
    ", ",
    fn_name("gloss_row_sightings"),
    ", ",
    fn_name("gloss_entries_count"),
    " and ",
    fn_name("gloss_chapter_found_count"),
    ". They stay apart rather than folding into one because the word the total is kept under is not the same word in any two of them.");
  ("What comes back is a number and never the pointers themselves. Which words were pointed at is kept under its own word beside this one, so asking which dangle stays a different question from asking how many do.");
  ("It is a number that was written down, not a list being measured. Whatever counted the pointers had already decided what counts as one, and this reads back the figure that reader arrived at rather than arriving at its own.");
  arguments_assert(arguments, 1);
  let dangling = property_get(counted, "dangling");
  return dangling;
}
