import { arguments_assert } from "./arguments_assert.mjs";
import { text_words_searchable } from "./text_words_searchable.mjs";
import { text_occurrences_count } from "./text_occurrences_count.mjs";
export function text_words_searchable_occurrences(searchable, phrase) {
  "$plain searchable";
  "$plain phrase";
  "How many times a run of one or more whole words stands in a piece of writing that has been laid out to be searched, counting only whole words: a word that another word merely ends with or begins with is not one of them.";
  "The run is laid out by the very reading that laid out the writing, so the two cannot come to be spelled differently. That is the whole reason this is one function rather than two lines at each caller: the marks on the letters come off both sides, the words are separated the same way on both sides, and a caller that laid out only one of them would get a count of nothing back and read it as the run being absent.";
  "The counting cuts the writing at the run and counts the pieces, which cannot miss two of them standing side by side. The layout gives every word spaces of its own, so the run's leading space and the next run's leading space are different characters and neither cut eats the other's.";
  arguments_assert(arguments, 2);
  let wanted = text_words_searchable(phrase);
  let count = text_occurrences_count(searchable, wanted);
  return count;
}
