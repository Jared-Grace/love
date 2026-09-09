import { gloss_chapter_passages_collected_write } from "./gloss_chapter_pointers_dangling_repair_span_scratch.mjs";
import { gloss_chapter_passages_collect_generic } from "./gloss_chapter_passages_collect_generic.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_explains_word_wording } from "./gloss_explains_word_wording.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { gloss_passage_entries_changed_set } from "./gloss_passage_entries_changed_set.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function gloss_chapter_pointers_dangling_repair(
  chapter_code,
  fn,
  lambda$pointer_is,
  wordings,
) {
  "Give a real explanation to every word in one authored gloss chapter whose first explanation only points the reader back at a word met earlier, when nothing earlier in the chapter said anything about it - answering with the words it repaired.";
  "$plain chapter_code";
  "the code is a chapter's name, like ROM01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "Only the first pointer of a chain is written over, and the chapter is walked in reading order so that it can be told apart from the rest. A word explained once and pointed back at four times afterwards is good writing: the four are short because the one is there. Repairing the head is what makes the other four true, so writing over all five would spend five sentences to buy nothing and would bury the reader.";
  "A word the store has never written a real explanation for anywhere is left exactly as it stands. There is nothing honest to put there, and a wording invented to fill the hole would read the same as one that was authored.";
  "The chapter is only written back to disk when something in it moved, because a store this size is read by other people while a sweep runs and a file whose bytes did not need to move should not move.";
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
  let said = {};
  let changes = [];
  for (let passage of passages) {
    let entries = gloss_passage_entries(passage);
    let moved = [];
    for (let entry of entries) {
      let explain = property_get_or_null(entry, key);
      let written = null_not_is(explain);
      if (written) {
        let word = gloss_entry_word_read(entry);
        let folded = text_lower_to(word);
        let pointer = lambda$pointer_is(explain);
        if (pointer) {
          let earlier = property_get_or_null(said, folded);
          let alone = null_is(earlier);
          if (alone) {
            let wording = gloss_explains_word_wording(wordings, word);
            let held = null_not_is(wording);
            if (held) {
              property_set(entry, key, wording);
              list_add(moved, folded);
              list_add(changes, folded);
              property_set(said, folded, 1);
            }
          }
        }
        let says = not(pointer);
        if (says) {
          property_set(said, folded, 1);
        }
      }
    }
    gloss_passage_entries_changed_set(passage, entries, moved);
  }
  let none = list_empty_is(changes);
  if (none) {
    return changes;
  }
  await gloss_chapter_passages_collected_write(read);
  return changes;
}
