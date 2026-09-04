import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_searchable_words } from "./text_searchable_words.mjs";
import { text_searchable_words_span } from "./text_searchable_words_span.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export function text_searchable_spans(searchable, words_least) {
  "$plain searchable";
  "$plain words_least";
  "Every run of a fixed number of neighbouring words in a piece of writing that has been laid out to be searched, each run laid out the same way, so one text's runs can be looked for in another without either side being spelled differently.";
  "Runs overlap on purpose: the words one to six, then two to seven, and so on. A reading that cut the writing into blocks instead would miss every run that straddles a cut, and where the cuts fall has nothing to do with what is being looked for.";
  "How many words a run holds is asked for rather than settled here, because it is the whole strength of the comparison. Too few, and two people writing the same language on their own land on the same run by accident. Too many, and a run that really was copied slips through because a single word of it was changed.";
  arguments_assert(arguments, 2);
  let words = text_searchable_words(searchable);
  let spans = [];
  for (let at = 0; less_than(at, words.length); at++) {
    let span = text_searchable_words_span(words, at, words_least);
    let past = null_is(span);
    if (past) {
      break;
    }
    list_add(spans, span);
  }
  return spans;
}
