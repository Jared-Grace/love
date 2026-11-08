import { storage_session_get_context } from "./storage_session_get_context.mjs";
export function app_learn_js_quiz_index_get(context) {
  let value = storage_session_get_context(context, "quiz_index");
  return value;
}
