import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_grammar_terms } from "./gloss_grammar_terms.mjs";
import { gloss_term_written_is } from "./gloss_term_written_is.mjs";
import { each } from "./each.mjs";
import { each_index } from "./each_index.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_entries_parsings_exceeding(entries, records) {
  "Every place in one passage where a word explanation names a tense, a mood or a form its own word's parsing does not carry, or nothing when none of them does.";
  "This reports a disagreement and never a verdict. An explanation is free to name a tense while talking about a different word - saying that a form is not the aorist used earlier, or that a present tense is telling a past story - and every one of those lands here. What comes back is a list of places for a reader to look, in the order they were written.";
  "One place is one explanation set against one term, so an explanation naming two of them lands twice. Each place says which term it is about rather than gathering them, because the reader's verdict is on the term and not on the explanation as a whole.";
  "Each place also carries the other words of the passage whose own parsing does hold that term. Where that list is not empty the explanation had somewhere to point - a word does not agree with the genitive words just before it, an article has a participle after it - and where it is empty the explanation names a form nothing in the passage has, which is the stronger finding of the two. Sorting on that is the caller's to do; this only hands over what it found.";
  "The two sides are lined up by their place in the passage, which is what the page itself does when it paints an explanation under a word. When the two do not have the same length that lining up is a guess, so nothing is compared at all and the answer is that it could not be looked at, which is a different answer from finding nothing wrong.";
  let left = list_size(entries);
  let right = list_size(records);
  let paired = equal(left, right);
  if (not(paired)) {
    let unpaired = null;
    return unpaired;
  }
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let terms = gloss_grammar_terms();
  let exceeding = [];
  function entry_read(entry, index) {
    let record = records[index];
    let parsing = property_get(record, "parsing_long");
    let explain = property_get(entry, explain_key);
    let named = [];
    function term_read(pair) {
      let term = property_get(pair, "term");
      let written = gloss_term_written_is(explain, term);
      if (not(written)) {
        return;
      }
      let term2 = property_get(pair, "parsing");
      let carried = gloss_term_written_is(parsing, term2);
      if (carried) {
        return;
      }
      list_add(named, term);
    }
    each(terms, term_read);
    if (list_empty_is(named)) {
      return;
    }
    let finding = {
      word: property_get(entry, word_key),
      parsing,
      named,
      explain,
    };
    list_add(exceeding, finding);
  }
  each_index(entries, entry_read);
  return exceeding;
}
