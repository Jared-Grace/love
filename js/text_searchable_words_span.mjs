import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join } from "./list_join.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function text_searchable_words_span(words, at, words_least) {
  "$plain at";
  "$plain words_least";
  "One run of neighbouring words taken from a list of words beginning at a given place, laid out the way a piece of writing to be searched is laid out, so that it can be looked for in one without either side being spelled differently.";
  "Nothing when there are not that many words left, rather than a shorter run. A short run is not the thing that was asked for, and handing one back would make a run near the end of a text answer a question about a run of the full length that was never in it.";
  arguments_assert(arguments, 3);
  let after = at + words_least;
  let past = greater_than(after, words.length);
  if (past) {
    let r2 = null;
    return r2;
  }
  let taken = words.slice(at, after);
  let joined = list_join(taken, "  ");
  let r = text_combine_multiple([" ", joined, " "]);
  return r;
}
