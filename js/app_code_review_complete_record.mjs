import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_reviews_complete_storage_key } from "./app_code_reviews_complete_storage_key.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { storage_local_transform_context } from "./storage_local_transform_context.mjs";
export function app_code_review_complete_record(context, number) {
  "$plain number";
  "Writes down on this learner's own device that they have finished the review standing under one lesson, so the list they come back to says so.";
  "Finishing a review used to leave nothing behind at all. The half-answered state is thrown away at the moment the last question is cleared, which is right - there is nothing left to come back to - but it meant the only trace of a whole review was a screen the learner then walked away from, and the button they had just earned went back to looking exactly like one they had never pressed.";
  "The number is added only if it is not already there, so walking the same review again reads the same as walking it once. What is being kept is which reviews have been finished, not how many times.";
  arguments_assert(arguments, 2);
  let key = app_code_reviews_complete_storage_key();
  function lambda$numbers(numbers) {
    list_add_unique(numbers, number);
    return numbers;
  }
  storage_local_transform_context(context, key, [], lambda$numbers);
}
