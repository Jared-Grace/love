import { arguments_assert } from "./arguments_assert.mjs";
import { text_accent_marks_removed } from "./text_accent_marks_removed.mjs";
import { text_words_any_script_pattern } from "./text_words_any_script_pattern.mjs";
import { null_is } from "./null_is.mjs";
import { list_join } from "./list_join.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function text_words_searchable(text) {
  "$plain text";
  "The words of a piece of writing laid out so that a run of one or more whole words can be looked for inside it, with the marks that sit on a letter taken off so that the same word spelled with them and without them comes out one spelling.";
  "Everything that is not a letter is dropped, so punctuation, verse numbers and line endings cannot come between a word and the word after it, and two words that were only ever separated by a comma read as neighbours here exactly as they would if a space had separated them.";
  "Every word stands between two spaces of its own: the words are joined by a pair of spaces and a single space is put at each end. That is what makes a search for a run of words honest. A run looked for the same way begins with a space and ends with one, so it can only start where a word starts and can only stop where a word stops - and because the neighbouring word keeps a space of its own, two places where the run stands one after the other never share a character, which is what would make a counting that cuts the text miss the second of them.";
  "Both halves of a comparison are made here rather than the text here and the run somewhere else. A text laid out one way and a run laid out another way disagree silently, and the disagreement reads as the run simply not being there.";
  arguments_assert(arguments, 1);
  let plain = text_accent_marks_removed(text);
  let pattern = text_words_any_script_pattern();
  let words = plain.match(pattern);
  let wordless = null_is(words);
  if (wordless) {
    let r2 = " ";
    return r2;
  }
  let joined = list_join(words, "  ");
  let r = text_combine_multiple([" ", joined, " "]);
  return r;
}
