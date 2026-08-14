import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { g_sermon_passage_words } from "./g_sermon_passage_words.mjs";
import { word_root } from "./word_root.mjs";
export function text_word_roots(t) {
  "Every root a piece of text carries, each one named once.";
  "The words are cut apart the same way the sermon page cuts a passage apart, so a dash between two words gives both of them rather than one welded pair, and a count taken here cannot disagree with what the reader is looking at.";
  "Named once each, because what this measures is whether a word is SHARED, not how often it is said. A line that repeats one passage word four times has met one word, not four.";
  let words = g_sermon_passage_words(t);
  let roots = list_map(words, word_root);
  let named = list_filter_text_empty_not_is(roots);
  let once = list_unique(named);
  return once;
}
