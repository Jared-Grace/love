import { text_digits_is } from "./text_digits_is.mjs";
import { not } from "./not.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { app_code_review_numbers } from "./app_code_review_numbers.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_code_review_number_known_is(word) {
  "Whether a word standing where a review goes in a link names a lesson number that actually has a review standing under it.";
  "Reviews fall under every fifth lesson, so four numbers out of five name no review at all. A link carrying one of those was read as a number and believed, and the reader was put on a checkpoint that does not exist rather than told the word was wrong.";
  let digits_is = text_digits_is(word);
  let digits_not_is = not(digits_is);
  if (digits_not_is) {
    return false;
  }
  let number = number_from_text(word);
  let numbers = app_code_review_numbers();
  let known = list_includes(numbers, number);
  return known;
}
