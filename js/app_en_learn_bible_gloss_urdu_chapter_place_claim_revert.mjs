import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_chapter_backup_explains } from "./app_en_learn_bible_gloss_urdu_chapter_backup_explains.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { add } from "./add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { app_en_learn_bible_gloss_urdu_explain_meaning_parts } from "./app_en_learn_bible_gloss_urdu_explain_meaning_parts.mjs";
import { app_en_learn_bible_gloss_urdu_explain_occurrence_bound_is } from "./app_en_learn_bible_gloss_urdu_explain_occurrence_bound_is.mjs";
import { not } from "./not.mjs";
import { gloss_chapter_entries_explain_rewrite_generic } from "./gloss_chapter_entries_explain_rewrite_generic.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
export async function app_en_learn_bible_gloss_urdu_chapter_place_claim_revert(
  chapter_code,
  backup_folder,
) {
  "Puts one chapter's explanations back the way the author wrote them wherever the copying sweep left a sentence that is about the place it was taken from rather than about the word.";
  "$plain chapter_code";
  "the code is a chapter's name, like ACT12, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "$plain backup_folder";
  "the folder is the copy of the store taken before the sweep. It is read and never written.";
  "An empty sentence wastes a reader's minute; a sentence that says the verse ends here, standing in a verse that does not end here, tells them something untrue. So where the two are the only choices the empty one wins, and this is how the store gets back to it.";
  "Only an entry the sweep actually moved is touched. The author wrote place-bound explanations everywhere on purpose, and they are right where they were written; it is the copy of one that is wrong. Comparing against the backup is what tells those two apart, and nothing else can.";
  "The entries are matched to the backup by their position, counted as the walk goes. The walk asks the first reading of every entry in the order the chapter reads, and asks the second only of the entries the first one took, so the count kept here is the entry's own place in the chapter.";
  arguments_assert(arguments, 2);
  let before = await app_en_learn_bible_gloss_urdu_chapter_backup_explains(
    chapter_code,
    backup_folder,
  );
  let key = gloss_entry_explain_key();
  let separator = "۔ ";
  let at = 0;
  let held = null;
  function entry_revert_is(entry) {
    let index = at;
    at = add(at, 1);
    let explain = property_get_or_null(entry, key);
    if (null_is(explain)) {
      return false;
    }
    let was = before[index];
    if (null_is(was)) {
      return false;
    }
    let same = equal(was, explain);
    if (same) {
      return false;
    }
    let parts = app_en_learn_bible_gloss_urdu_explain_meaning_parts(explain);
    let meaning = parts.join(separator);
    let bound =
      app_en_learn_bible_gloss_urdu_explain_occurrence_bound_is(meaning);
    if (not(bound)) {
      return false;
    }
    held = was;
    return true;
  }
  function explain_before(entry) {
    return held;
  }
  let changes = await gloss_chapter_entries_explain_rewrite_generic(
    chapter_code,
    app_en_learn_bible_gloss_urdu_generate,
    entry_revert_is,
    explain_before,
  );
  return changes;
}
