import { arguments_assert } from "./arguments_assert.mjs";
export function text_words_any_script_pattern() {
  "The pattern that finds the words of a piece of writing whatever alphabet it is written in: a run of letters, with the marks that sit on a letter counted as part of it.";
  "Everything that is not a letter falls outside the match, so a space, a comma, a full stop, a quotation mark and a line ending all end a word and none of them is ever inside one. That is what lets a reading of it hand back the writing untouched between the words it took.";
  "The marks belong with the letter they sit on. Urdu and Arabic write vowels and doubling as marks above and below, and a run cut at the first of them would call one word two and leave the marks stranded as words of their own.";
  "It is made fresh each time it is asked for rather than made once and shared. A pattern that finds every match remembers where it stopped, so one handed round would begin its next reading part of the way into the writing and answer differently for the same text depending on who asked before.";
  arguments_assert(arguments, 0);
  let pattern = new RegExp("[\\p{L}\\p{M}]+", "gu");
  return pattern;
}
