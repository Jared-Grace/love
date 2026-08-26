import { text_words_echo } from "./text_words_echo.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_words_content } from "./text_words_content.mjs";
export function text_words_content_echo(first, second) {
  arguments_assert(arguments, 2);
  ("$plain first");
  ("$plain second");
  ("How much of one saying is heard again in another, as the longest stretch of words the two say the same way one after the other, and how many words they share at all.");
  ("THE LONGEST STRETCH IS THE ANSWER THAT MATTERS AND THE COUNT IS THE TIE-BREAK. A line of a song and a verse of scripture nearly always share a few words - God, love, life - and sharing scattered words is what any two sentences about the same thing do. Saying four words in a row in the same order is not that: it is one of them quoting the other, which is the whole question here.");
  ("IT COUNTS ONLY THE WORDS THAT CARRY MEANING, so that two sayings do not score for agreeing about the word the. The relations are dropped next door, which also lowercases and strips punctuation - so a line ending in a comma and a verse ending in a full stop meet as the same words.");
  ("It says nothing about which of the two came first, because it cannot: the words are the whole of the evidence and they are the same words either way.");
  let first_words = text_words_content(first);
  let second_words = text_words_content(second);
  let echo = text_words_echo(first_words, second_words);
  return echo;
}
