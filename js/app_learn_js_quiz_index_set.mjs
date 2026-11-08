import { storage_session_set_context } from "./storage_session_set_context.mjs";
export function app_learn_js_quiz_index_set(context, index_new) {
  storage_session_set_context(context, "quiz_index", index_new);
}
