import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_explain_roots_named } from "./gloss_explain_roots_named.mjs";
import { gloss_chapters_entries_explained_generic } from "./gloss_chapters_entries_explained_generic.mjs";
export async function gloss_chapters_roots_named_entries_generic(
  fn,
  entry_read,
) {
  "$plain fn";
  "Walks every entry of one gloss store that carries an explanation, works out which roots that explanation names in any wording at all, and hands each entry to the caller with those roots already found.";
  "The sibling of this asks the narrow question of the same sentences - which roots are stated outright - and the two share the walk underneath and differ in one line. Which of them a reading wants is a real choice and not a detail: the narrow reader answers only where somebody wrote the word root, so it is silent about a sentence saying a word is built on another, and the wide one reads both at the cost of reading more shapes than it can be sure of.";
  "Seven readings had this walk written out inside them a line at a time and then differed only in what they did with the roots, which is the same story the narrow sibling tells about the nine that sat on it. That is one walk and sixteen questions.";
  "The whole entry is handed over beside the roots rather than the word pulled out of it here, for the reason the shared walk gives: the readings disagree about what a missing word means, and pulling it out would have to settle that for all of them.";
  "How many chapters were walked comes back, and beside it how many entries were met, both exactly as the shared walk reported them.";
  arguments_assert(arguments, 2);
  function entry_look(found) {
    let chapter_code = property_get(found, "chapter_code");
    let entry = property_get(found, "entry");
    let explain = property_get(found, "explain");
    let named = gloss_explain_roots_named(explain);
    let row = {
      chapter_code,
      entry,
      explain,
      named,
    };
    entry_read(row);
  }
  let walked = await gloss_chapters_entries_explained_generic(fn, entry_look);
  return walked;
}
