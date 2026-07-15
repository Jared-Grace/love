import { storage_local_initialize_context } from "./storage_local_initialize_context.mjs";
export function app_code_review_number_get(context) {
  "the lesson number a review checkpoint sits after, stored when a review row is chosen on the home screen";
  let default_number = 5;
  let number = storage_local_initialize_context(
    context,
    "review_number",
    default_number,
  );
  return number;
}
