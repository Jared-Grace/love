import { list_join_space } from "./list_join_space.mjs";
import { text_punctuation_split } from "./text_punctuation_split.mjs";
export function gloss_passage_words_bare(passage, words_read) {
  "The words of the passage being explained, cut at their punctuation, in the order they are written.";
  "An explanation names the word and not the sentence it was standing in, so the passage has to be cut the same way before the two can be laid side by side. A dash standing between two words with no space either side is a word boundary the spaces alone do not show, which is why the cutting is by punctuation rather than by space.";
  "Which of a passage's texts is the one being explained is asked for rather than assumed, because a store glossing the original language and a store glossing a translation both live in this shape.";
  let words_written = words_read(passage);
  let line = list_join_space(words_written);
  let bare = text_punctuation_split(line);
  return bare;
}
