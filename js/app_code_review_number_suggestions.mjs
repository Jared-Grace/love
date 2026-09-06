import { app_code_review_numbers } from "./app_code_review_numbers.mjs";
import { list_map } from "./list_map.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { numbers_nearest } from "./numbers_nearest.mjs";
export function app_code_review_number_suggestions(word) {
  "The reviews standing nearest in the run of lessons to what somebody wrote where a review should stand - what to offer when a link names a number no review sits under.";
  "The plain offering for a count hands back the digits it finds in the word, which here would hand the reader the very number this field has just refused. Reviews stand five lessons apart, so whatever was written has a real one within three of it, and naming that one is both honest and the thing the reader almost certainly meant.";
  let numbers = app_code_review_numbers();
  let texts = list_map(numbers, text_from_number);
  let apart_maximum = 5;
  let nearest = numbers_nearest(texts, word, apart_maximum);
  return nearest;
}
