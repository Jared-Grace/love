import { gloss_chapter_passages_collect_generic } from "./gloss_chapter_passages_collect_generic.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
import { not } from "./not.mjs";
export async function gloss_chapter_pointers_dangling_places(
  chapter_code,
  fn,
  lambda$pointer_is,
) {
  "Every word in one authored gloss chapter whose first explanation only points the reader back at a word met earlier when nothing earlier said anything about it, given back with the verses it stands in and the pointer it is wearing.";
  "$plain chapter_code";
  "the code is a chapter's name, like ACT25, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The verses come back with the word because the wording that has to be written for it cannot be written without them. A word is explained by what it is doing where it stands, and a list of bare words is a list of guesses.";
  "One place is given for each word rather than one for every entry, because the pointers after the first are made true by repairing the first, so they are not separate work.";
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
  let places = [];
  for (let passage of passages) {
    let entries = gloss_passage_entries(passage);
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
            let texts = property_get(passage, "texts");
            let place = {
              chapter_code,
              word,
              texts,
              explain,
            };
            list_add(places, place);
            property_set(said, folded, 1);
          }
        }
        let says = not(pointer);
        if (says) {
          property_set(said, folded, 1);
        }
      }
    }
  }
  return places;
}
