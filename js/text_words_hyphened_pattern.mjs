import { arguments_assert } from "./arguments_assert.mjs";
export function text_words_hyphened_pattern() {
  "The pattern that finds the words of a piece of writing whatever alphabet it is written in, counting a hyphen standing between two letters as part of the word rather than as the end of one.";
  "It is the plain word pattern with one thing added, so everything true of that one is true here: a space, a comma, a full stop and a line ending all end a word, and the marks that sit on a letter stay with the letter they sit on. What differs is a hyphen with a letter on each side of it, which this keeps and the plain pattern throws away.";
  "★ WHETHER THAT IS RIGHT IS A QUESTION ABOUT THE LANGUAGE, WHICH IS WHY BOTH PATTERNS EXIST. In English a hyphen joins two words that are each words on their own, and keeping it makes one word out of two. In Cebuano it writes a glottal stop inside a single word - panan-aw, pagtulon-an, puloy-anan - and dropping it makes two fragments out of one word, neither of them a word. Neither pattern is the correct one; the correct one depends on what is being read, and the way to tell is to count both ways over the writing itself and see whether the pieces the plain pattern makes are ever written on their own.";
  "A hyphen with no letter on one side of it is not kept, so a dash used as punctuation ends a word here exactly as it does in the plain pattern.";
  "It is made fresh each time it is asked for rather than made once and shared, because a pattern that finds every match remembers where it stopped and one handed round would answer differently for the same writing depending on who asked before.";
  arguments_assert(arguments, 0);
  let pattern = new RegExp("[\\p{L}\\p{M}]+(?:-[\\p{L}\\p{M}]+)*", "gu");
  return pattern;
}
