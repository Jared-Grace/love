import { gloss_chapter_passages_collect_generic } from "./gloss_chapter_passages_collect_generic.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_add } from "./list_add.mjs";
export async function gloss_chapter_entries_places_generic(
  chapter_code,
  fn,
  lambda$entry_is,
) {
  "Every entry in one authored gloss chapter that answers to a given reading of an entry, given back with the verses it stands in and the explanation it is wearing.";
  "$plain chapter_code";
  "the code is a chapter's name, like ROM15, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The verses come back beside the word because a wording is judged and rewritten against what the word is doing where it stands, and a bare list of words is a list of guesses.";
  "The reading is asked of the whole entry rather than of the explanation alone, because the faults worth looking at are usually a disagreement between the two - a sentence saying one thing about a word that is another.";
  "Every match is given back, not one for each word, because two entries wearing the same sentence can still stand in verses that judge it differently.";
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
  let places = [];
  for (let passage of passages) {
    let entries = gloss_passage_entries(passage);
    for (let entry of entries) {
      let matched = lambda$entry_is(entry);
      if (matched) {
        let word = gloss_entry_word_read(entry);
        let explain = property_get_or_null(entry, key);
        let texts = property_get(passage, "texts");
        let place = {
          chapter_code,
          word,
          texts,
          explain,
        };
        list_add(places, place);
      }
    }
  }
  return places;
}
