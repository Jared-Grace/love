import { arguments_assert } from "./arguments_assert.mjs";
import { text_last_sentence_words } from "./text_last_sentence_words.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { greater_than } from "./greater_than.mjs";
export function text_lines_refrain_ends(lines, words_count) {
  "$plain lines";
  "$plain words_count";
  "Which lines in a list close with a form of words that another line in the same list also closes with - the places a repeated saying marks the end of a part.";
  "A REPEATED CLOSING IS THE ONE MARK OF STRUCTURE THAT IS IN THE WORDS THEMSELVES. Where a piece of writing is kept as numbered lines and nothing else, there is no record of where its parts begin, and cutting it anywhere the length happens to run out puts the cut in the middle of a thought. A saying the writing itself repeats at the end of each part is the author's own marking, and it costs nothing to read.";
  "The comparison is made on the opening words of the closing sentence rather than on the whole of it, because these sayings end with the thing that changes - which part it was, which day, which name - and are the same up to that word.";
  "A line whose closing sentence is shorter than the words asked for is passed over rather than compared on what it has. A short sentence matches too easily, and one accidental pair would mark a place that closes nothing.";
  "Nothing here knows what the lines are about. A list with no repetition in it comes back empty, which is the truthful answer and leaves the caller to fall back on whatever it would have done anyway.";
  arguments_assert(arguments, 2);
  let openings = [];
  for (let line of lines) {
    let words = text_last_sentence_words(line);
    let first = list_slice(words, 0, words_count);
    let size = list_size(first);
    let enough = equal(size, words_count);
    if (not(enough)) {
      list_add(openings, null);
      continue;
    }
    let opening = list_join_space(first);
    list_add(openings, opening);
  }
  let counts = {};
  for (let opening of openings) {
    if (not(opening)) {
      continue;
    }
    let seen = property_get_or(counts, opening, 0);
    let more = add(seen, 1);
    property_set(counts, opening, more);
  }
  let ends = [];
  let index = 0;
  for (let opening of openings) {
    let seen = property_get_or(counts, opening, 0);
    let shared = greater_than(seen, 1);
    if (shared) {
      list_add(ends, index);
    }
    index = add(index, 1);
  }
  return ends;
}
