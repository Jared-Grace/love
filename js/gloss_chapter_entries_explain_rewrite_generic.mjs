import { gloss_chapter_passages_collect_generic } from "./gloss_chapter_passages_collect_generic.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_set } from "./property_set.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { list_add } from "./list_add.mjs";
import { gloss_passage_entries_changed_set } from "./gloss_passage_entries_changed_set.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function gloss_chapter_entries_explain_rewrite_generic(
  chapter_code,
  fn,
  lambda$entry_is,
  lambda$explain_new,
) {
  "Writes a fresh explanation over every entry of one authored gloss chapter that answers to a given reading of an entry, and gives back the words that changed.";
  "$plain chapter_code";
  "the code is a chapter's name, like ROM15, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The two readings are kept apart because they answer different questions. One says which entries are being talked about; the other says what should stand there instead. Folding them together would mean every entry of the store had to be handed to a reading that only a handful of them concern.";
  "An explanation that comes back the same as the one already there counts as no change, so the chapter is only written when a word really moved. That is what stops a run over an already-repaired store rewriting every file it reads and burying the next reader in a diff that says nothing.";
  function passage_pass(passage) {
    let one = [passage];
    return one;
  }
  let read = await gloss_chapter_passages_collect_generic(
    chapter_code,
    fn,
    passage_pass,
  );
  let passages = property_get(read, "collected");
  let key = gloss_entry_explain_key();
  let changes = [];
  for (let passage of passages) {
    let entries = gloss_passage_entries(passage);
    let moved = [];
    for (let entry of entries) {
      let matched = lambda$entry_is(entry);
      if (matched) {
        let explain = property_get_or_null(entry, key);
        let fresh = lambda$explain_new(entry);
        let held = null_not_is(fresh);
        if (held) {
          let same = equal(fresh, explain);
          let changed = not(same);
          if (changed) {
            property_set(entry, key, fresh);
            let word = gloss_entry_word_read(entry);
            list_add(moved, word);
            list_add(changes, word);
          }
        }
      }
    }
    gloss_passage_entries_changed_set(passage, entries, moved);
  }
  let none = list_empty_is(changes);
  if (none) {
    return changes;
  }
  let object = property_get(read, "chapter");
  let contents = json_format_to(object);
  let file_path = property_get(read, "path");
  await file_overwrite_uncached(file_path, contents);
  return changes;
}
