import { app_code_quiz_index_set } from "./app_code_quiz_index_set.mjs";
import { storage_local_remove_context } from "./storage_local_remove_context.mjs";
export function app_code_quiz_index_reset(context) {
  app_code_quiz_index_set(context, 0);
  storage_local_remove_context(context, "quiz_index_previous");
}
