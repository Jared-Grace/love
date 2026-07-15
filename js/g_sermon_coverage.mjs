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
      return word.length > 0;
    }
    return list_filter(split, nonempty);
  }
  let line_words = words(list_join_space(lines));
  let verse_words = list_unique(words(verse_text));
  function uncovered(word) {
    return list_includes_not(line_words, word);
  }
  let uncovered_verse_words = list_filter(verse_words, uncovered);
  function extra(word) {
    return list_includes_not(verse_words, word);
  }
  let extra_line_words = list_filter(list_unique(line_words), extra);
  return { uncovered_verse_words, extra_line_words };
}
