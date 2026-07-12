import { storage_local_get_context } from "./storage_local_get_context.mjs";
export function app_code_quiz_index_get(context) {
  let value = storage_local_get_context(context, "quiz_index");
  return value;
}
