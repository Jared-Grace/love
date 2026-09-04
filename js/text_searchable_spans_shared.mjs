import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_searchable_words } from "./text_searchable_words.mjs";
import { text_searchable_words_span } from "./text_searchable_words_span.mjs";
import { null_is } from "./null_is.mjs";
import { set_includes } from "./set_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
export function text_searchable_spans_shared(searchable, spans, words_least) {
  "$plain searchable";
  "$plain words_least";
  "The runs of neighbouring words that a piece of writing and an already-gathered set of runs both hold, each named once however often it stands.";
  "This is the question 'did this writing come out of that one', asked in the only way that survives a reader who changed a word here and there. A whole text matching is far too strong a test, because nobody copies a whole text unaltered; a single word matching is far too weak, because two people writing the same language share every common word. A run of several words in the same order is the length at which agreement stops being a coincidence.";
  "Each run is named once rather than once for every place it stands, because a caller is being told what was found and not how often. A run standing four times is one thing that was found four times, and counting it four times makes a short repeated line look like a long copied passage.";
  arguments_assert(arguments, 3);
  let words = text_searchable_words(searchable);
  let found = [];
  for (let at = 0; less_than(at, words.length); at++) {
    let span = text_searchable_words_span(words, at, words_least);
    let past = null_is(span);
    if (past) {
      break;
    }
    let shared = set_includes(spans, span);
    if (shared) {
      list_add(found, span);
    }
  }
  let r = list_unique(found);
  return r;
}
