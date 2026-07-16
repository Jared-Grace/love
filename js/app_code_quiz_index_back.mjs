import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { app_code_quiz_index_get } from "./app_code_quiz_index_get.mjs";
import { app_code_quiz_index_set } from "./app_code_quiz_index_set.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_code_quiz_index_back(context) {
  "return to the quiz kind the learner last pressed Next FROM; swaps current and previous so it is reversible; does nothing if there is no previous yet";
  let previous = storage_local_get_context(context, "quiz_index_previous");
  let present = null_not_is(previous);
  if (present) {
    let current = app_code_quiz_index_get(context);
    storage_local_set_context(context, "quiz_index_previous", current);
    app_code_quiz_index_set(context, previous);
  }
}
export function app_code_quiz_index_back_available(context) {
  "whether a previous quiz kind exists to go Back to";
  let previous = storage_local_get_context(context, "quiz_index_previous");
  let available = null_not_is(previous);
  return available;
}
