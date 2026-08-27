import { app_code_review_number_key } from "./app_code_review_number_key.mjs";
import { storage_session_initialize_context } from "./storage_session_initialize_context.mjs";
export function app_code_review_number_get(context) {
  "the lesson number a review checkpoint sits after, stored when a review row is chosen on the home screen";
  let key = app_code_review_number_key();
  let default_number = 5;
  let number = storage_session_initialize_context(context, key, default_number);
  return number;
}
