import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
export async function gloss_chapter_word_explains_counted(
  chapter_code,
  fn,
  lambda$pointer_is,
) {
  "How many times each word in one authored gloss chapter is given each explanation that says something, rather than pointing the reader back at a word met earlier.";
  "$plain chapter_code";
  "the code is a chapter's name, like ROM01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "A pointer is left out rather than counted, because the answer exists to find a wording a dangling pointer can be given, and a pointer is the thing being repaired. Counting one would let a chapter full of pointers vote for a pointer as the settled wording.";
  "The same word is met with a capital at the head of a sentence and without one in the middle, and they are one word wanting one explanation, so the counting folds the case away.";
  function entries_pass(entries) {
    return entries;
  }
  let entries = await gloss_chapter_entries_collect_generic(
    chapter_code,
    fn,
    entries_pass,
  );
  let key = gloss_entry_explain_key();
  let counted = {};
  for (let entry of entries) {
    let explain = property_get_or_null(entry, key);
    let written = null_not_is(explain);
    if (written) {
      let pointer = lambda$pointer_is(explain);
      let says = not(pointer);
      if (says) {
        let word = gloss_entry_word_read(entry);
        let folded = text_lower_to(word);
        let wordings = property_get_or_null(counted, folded);
        let fresh = null_is(wordings);
        if (fresh) {
          wordings = {};
          property_set(counted, folded, wordings);
        }
        let seen = property_get_or_null(wordings, explain);
        let before = 0;
        let again = null_not_is(seen);
        if (again) {
          before = seen;
        }
        let value = add(before, 1);
        property_set(wordings, explain, value);
      }
    }
  }
  return counted;
}
