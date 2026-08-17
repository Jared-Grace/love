import { list_map } from "./list_map.mjs";
import { each_index } from "./each_index.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { each } from "./each.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { gloss_passages_verse_numbers } from "./gloss_passages_verse_numbers.mjs";
import { gloss_passages_verse_word_keys } from "./gloss_passages_verse_word_keys.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_passages_entries_collect_generic(
  passages,
  text_index,
  word_key_read,
  lambda_entry,
) {
  "Every word explanation in a chapter handed to the caller one at a time, each with the chapter already laid out around it, and everything the caller gives back gathered into a single flat list.";
  "$plain text_index";
  "the index says which of a passage's texts is the wording being explained, and it names a place in a list rather than anything that runs.";
  "Two readings of a chapter's explanations were the same fifteen lines apart from the few in the middle - lay out the chapter's verses, walk its passages, open each passage's explanations, find the word and the wording and the key. The part that differed was what each one then asked, and the part that agreed was all the rest.";
  "The chapter is laid out whole before any single explanation is looked at, because an explanation in the first passage may well be talking about the last verse in the chapter, and a reading that had only got as far as its own passage could not answer it.";
  "Each explanation arrives as one thing rather than as five arguments, so a reading that wants three of them names three and a reading that wants one names one. What it gives back is a list, since one explanation can make more than one claim and can make none.";
  "Where the explanation stands among its own passage's words comes with it, and so do those words in order, because an explanation that says which word comes just before it cannot be settled by the chapter's verses at all - only by the line it is standing in.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let verse_numbers = gloss_passages_verse_numbers(passages);
  let verse_keys = gloss_passages_verse_word_keys(
    passages,
    text_index,
    word_key_read,
  );
  let found = [];
  function passage_read(passage) {
    let verses_key = g_sermon_passage_verses_key(passage);
    let entries = gloss_passage_entries(passage);
    function entry_word(entry) {
      let spelling = property_get(entry, word_key);
      return spelling;
    }
    let words = list_map(entries, entry_word);
    function entry_read(entry, at) {
      let word = property_get(entry, word_key);
      let explain = property_get(entry, explain_key);
      let key = word_key_read(word);
      let context = {
        verses_key,
        word,
        explain,
        key,
        verse_numbers,
        verse_keys,
        at,
        words,
      };
      let given = lambda_entry(context);
      list_add_multiple(found, given);
    }
    each_index(entries, entry_read);
  }
  each(passages, passage_read);
  return found;
}
