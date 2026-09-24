import { gloss_chapter_passages_collect_all } from "./gloss_chapter_passages_collect_all.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { property_null_is } from "./property_null_is.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
import { not } from "./not.mjs";
export async function gloss_chapter_pointers_dangling_places(
  chapter_code,
  fn,
  lambda$pointer_is,
  lambda$word_key_read,
) {
  "Every word in one authored gloss chapter whose first explanation only points the reader back at a word met earlier when nothing earlier said anything about it, given back with the verses it stands in and the pointer it is wearing.";
  "$plain chapter_code";
  "the code is a chapter's name, like ACT25, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The verses come back with the word because the wording that has to be written for it cannot be written without them. A word is explained by what it is doing where it stands, and a list of bare words is a list of guesses.";
  "One place is given for each word rather than one for every entry, because the pointers after the first are made true by repairing the first, so they are not separate work.";
  "WHAT COUNTS AS SAID IS THE CALLER'S TO SAY, AND IT IS NOT THE SPELLING. This keyed words by their spelling until 2026-09-24, and on that day the thirteen places it was still reporting in the Urdu store were read one by one: every single one pointed at another form of its own word rather than at itself - 'army' at 'armies', 'saves' at 'saved', 'woes' at 'woe', 'doer' at 'doers', 'touches' at 'touched', 'antichrists' at 'antichrist' - and every target was in its own chapter and explained there. There were never thirteen missing explanations. There was one reader asking after the wrong thing, and it had been asking since June.";
  "Authoring past it would have been the expensive mistake: thirteen explanations that teach a reader how one English word changes its ending, replaced by thirteen that do not, purely to quiet a detector. The repair that reads the store's own settled wordings had already refused to do it, and refused for the right reason - there was no entry under the spelling to copy.";
  "The Cebuano gloss had met this and settled it first, and the words of its own prose are the rule taken here: words are matched on their root rather than on their spelling, because the explanations say both kinds of thing and only the root answers both. So the reducer is handed in rather than chosen here, for the reason it is handed in there - how loosely two words count as the same belongs to the store, and the word being explained and the words already met must be reduced the same way or every claim comes back wrong.";
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
        let folded = lambda$word_key_read(word);
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
