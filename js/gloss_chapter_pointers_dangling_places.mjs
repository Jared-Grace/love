import { gloss_chapter_passages_collect_all } from "./gloss_chapter_passages_collect_all.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_null_is } from "./property_null_is.mjs";
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
  "WHAT COUNTS AS SAID IS THE WORD SPELLED THE SAME WAY, AND THAT IS WHY THE THIRTEEN PLACES LEFT IN THE URDU STORE CANNOT BE AUTHORED AWAY. Measured on 2026-09-24, every one of them points at another form of its own word rather than at itself: 'army' at 'armies', 'saves' at 'saved', 'woes' at 'woe', 'doer' at 'doers', 'touches' at 'touched', 'antichrists' at 'antichrist'. All thirteen targets are in their own chapter and all thirteen are explained there. Twelve of the thirteen also give the meaning outright in the same sentence, so the reader is told what the word means and is told where they met its other form.";
  "So the number this answers with is not a count of words nobody explained. The repair that reads the store's own settled wordings finds nothing to copy, because the store has no entry under the spelling; and authoring past it would mean replacing thirteen explanations that teach a reader how one English word changes its ending with thirteen that do not. Both of those are worse than the fault. What is actually owed is a decision about this line: whether a word counts as said when an earlier entry explained a form of it, and if so, what says two spellings are forms of one word without guessing at endings.";
  let read = await gloss_chapter_passages_collect_all(chapter_code, fn);
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
          let alone = property_null_is(said, folded);
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
