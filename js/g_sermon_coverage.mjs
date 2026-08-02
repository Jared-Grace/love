import { greater_than } from "./greater_than.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function g_sermon_coverage(verse_text, lines) {
  function words(text) {
    let lower = text_lower_to(text);
    let spaced = lower.replace(/[^a-z]+/g, " ");
    let split = text_split_space(spaced);
    function nonempty(word) {
      let g = greater_than(word.length, 0);
      return g;
    }
    let filtered = list_filter(split, nonempty);
    return filtered;
  }
  let joined = list_join_space(lines);
  let line_words = words(joined);
  let list = words(verse_text);
  let verse_words = list_unique(list);
  function uncovered(word) {
    let n = list_includes_not(line_words, word);
    return n;
  }
  let uncovered_verse_words = list_filter(verse_words, uncovered);
  function extra(word) {
    let n2 = list_includes_not(verse_words, word);
    return n2;
  }
  let list2 = list_unique(line_words);
  let extra_line_words = list_filter(list2, extra);
  let r = {
    uncovered_verse_words,
    extra_line_words,
  };
  return r;
}
