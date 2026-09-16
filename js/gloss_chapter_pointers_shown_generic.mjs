import { gloss_chapter_passages_collect_all } from "./gloss_chapter_passages_collect_all.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { list_first } from "./list_first.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { gloss_passage_entries_pointers_filled } from "./gloss_passage_entries_pointers_filled.mjs";
import { list_size } from "./list_size.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { list_add } from "./list_add.mjs";
import { list_get } from "./list_get.mjs";
export async function gloss_chapter_pointers_shown_generic(chapter_code, fn) {
  "Every place in one stored gloss chapter where the page now shows a different explanation than the words stored there - the verse, the word, what was stored, and what the reader is shown instead.";
  "$plain chapter_code";
  "the code is a chapter's name, like MAT05, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "It reads the store and writes nothing back. This is how a person who cannot read the language can still be told where to look: it names the verse and the English word, so the row can be found on the page and the two lines compared by their length alone.";
  let read = await gloss_chapter_passages_collect_all(chapter_code, fn);
  let passages = property_get(read, "collected");
  let key = gloss_entry_explain_key();
  let shown = [];
  for (let passage of passages) {
    let verse_numbers = property_get(passage, "verse_numbers");
    let verse = list_first(verse_numbers);
    let entries = gloss_passage_entries(passage);
    let filled = gloss_passage_entries_pointers_filled(
      entries,
      passages,
      passage,
    );
    let size = list_size(entries);
    for (let place = 0; place < size; place++) {
      let entry = list_get(entries, place);
      let row = list_get(filled, place);
      let before = property_get_or_null(entry, key);
      let after = property_get_or_null(row, key);
      let changed = not(equal(before, after));
      if (changed) {
        let word = gloss_entry_word_read(entry);
        let r = {
          verse,
          word,
          before,
          after,
        };
        list_add(shown, r);
      }
    }
  }
  return shown;
}
