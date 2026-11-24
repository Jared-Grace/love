import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { bible_folders_sentence_end_marked } from "./bible_folders_sentence_end_marked.mjs";
import { app_shared_bible_passage_reach_maximum } from "./app_shared_bible_passage_reach_maximum.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { bible_verse_end_is } from "./bible_verse_end_is.mjs";
import { greater_than } from "./greater_than.mjs";
export function app_bible_record_verses_sentences(verses, bible_folder) {
  "$plain verses bible_folder";
  "A chapter's verses grouped into passages that each end on a finished sentence in bible_folder, so no take stops mid-sentence (human 2026-11-24: passages were meant to end where a verse ends a sentence). Each passage is the list of its verse numbers, in order.";
  "A passage starts at the verse after the last one ended and takes verses until one ends a sentence, judged by that bible's own marks, the same test the next reader uses. It is also let go once it has been carried as far as the reader is ever carried, because nothing promises a sentence ends: a bible may be missing the verse that finishes it.";
  "A bible that marks no sentence ends cannot answer, so every verse is then a passage of its own, which is what was offered before.";
  "The chapter's last verse always closes the passage it is in, whether or not its sentence ends there: a recording is of one chapter.";
  arguments_assert(arguments, 2);
  let list = bible_folders_sentence_end_marked([bible_folder]);
  let marked = list_empty_not_is(list);
  let reach = app_shared_bible_passage_reach_maximum();
  let key = verse_number_key();
  let passages = [];
  let current = [];
  for (let verse of verses) {
    let item = property_get(verse, key);
    list_add(current, item);
    let ended = not(marked) || bible_verse_end_is(property_get(verse, "text"));
    let carried = greater_than(current.length, reach);
    if (ended || carried) {
      list_add(passages, current);
      current = [];
    }
  }
  if (list_empty_not_is(current)) {
    list_add(passages, current);
  }
  return passages;
}
