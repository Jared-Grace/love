import { gloss_chapter_passages_collect_all } from "./gloss_chapter_passages_collect_all.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_entry_same_as_key } from "./gloss_entry_same_as_key.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { list_first } from "./list_first.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_same_as_addressed } from "./gloss_same_as_addressed.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { gloss_word_met_note } from "./gloss_word_met_note.mjs";
import { gloss_passage_entries_changed_set } from "./gloss_passage_entries_changed_set.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { gloss_chapter_passages_collected_write } from "./gloss_chapter_passages_collected_write.mjs";
export async function gloss_chapter_pointers_addressed_generic(
  chapter_code,
  fn,
  lambda$pointer_is,
) {
  "Give an address to every explanation in one authored gloss chapter that tells the reader they have met this word before, wherever the chapter settles which meeting was meant - answering with the words that got one.";
  "$plain chapter_code";
  "the code is a chapter's name, like MAT05, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The sentence the reader sees is left exactly as it stands and the address is written beside it. A reader whose phone is still serving the page it kept from before knows nothing about addresses, and taking the words away would leave them with an empty line instead of a short one. The words can go later, once no phone is serving that page.";
  "Where the chapter does not settle which meaning was meant, nothing is written. That is half of them, measured, and they are the ones only the person who wrote them can answer - so leaving them alone is what separates the work a machine can finish from the work it cannot.";
  let read = await gloss_chapter_passages_collect_all(chapter_code, fn);
  let passages = property_get(read, "collected");
  let key = gloss_entry_explain_key();
  let name = gloss_entry_same_as_key();
  let said = {};
  let changes = [];
  for (let passage of passages) {
    let verse_numbers = property_get(passage, "verse_numbers");
    let text = list_first(verse_numbers);
    let verse = number_from_text(text);
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
          let met = property_get_or_null(said, folded);
          let address = gloss_same_as_addressed(passages, met);
          let settled = null_not_is(address);
          if (settled) {
            property_set(entry, name, address);
            list_add(moved, folded);
            list_add(changes, folded);
          }
        } else {
          gloss_word_met_note(said, folded, word, explain, verse);
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
