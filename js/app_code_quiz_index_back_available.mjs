import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_code_quiz_index_back_available(context) {
  "whether a previous quiz kind exists to go Back to";
  let previous = storage_local_get_context(context, "quiz_index_previous");
  let available = null_not_is(previous);
  return available;
}
