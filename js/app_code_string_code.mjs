import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_string_code(word) {
  "a word (or phrase) wrapped in double quotes, as a code string - what the learner writes to make that text. Single-sourced so every string lesson, its decoys, and its examples spell a string the same way.";
  let quote = '"';
  let combined = text_combine_multiple([quote, word, quote]);
  return combined;
}
