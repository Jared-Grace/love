import { arguments_assert } from "./arguments_assert.mjs";
import { text_word_start_regex } from "./text_word_start_regex.mjs";
export function text_words_start_removed(text, words) {
  "$plain text";
  arguments_assert(arguments, 2);
  ("Takes each named word out of a text by the same rule the history rewrite takes it out of every past file and message - anchored at the start, open at the end, any case - and leaves the same mark the rewriting tool leaves, so a present cleaned by this is exactly the present the rewrite would have made.");
  ("That sameness is the point. When the present already reads the way the rewritten past will, the rewrite changes nothing a person is working in, and the branch can be moved onto it without touching a single working file.");
  let result = text;
  for (let word of words) {
    let pattern = text_word_start_regex(word);
    let rule = new RegExp(pattern, "gi");
    result = result.replace(rule, "***REMOVED***");
  }
  return result;
}
