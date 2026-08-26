import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_reviews_complete_storage_key } from "./app_code_reviews_complete_storage_key.mjs";
import { storage_local_initialize_context } from "./storage_local_initialize_context.mjs";
export function app_code_reviews_complete_read(context) {
  "The reviews this learner has finished, read off their own device: the lesson numbers those reviews stand under.";
  "It starts at an empty list rather than at nothing, so a learner who has finished no review reads back the same shape as one who has finished every one of them, and nothing that asks has to find out which it is holding.";
  arguments_assert(arguments, 1);
  let key = app_code_reviews_complete_storage_key();
  let numbers = storage_local_initialize_context(context, key, []);
  return numbers;
}
