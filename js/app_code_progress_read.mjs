import { app_code_progress_storage_key } from "./app_code_progress_storage_key.mjs";
import { storage_local_initialize_context } from "./storage_local_initialize_context.mjs";
export function app_code_progress_read(context) {
  "What this learner has already answered correctly, read off their own disk: a record keyed by lesson id, each holding which quizzes of that lesson have been answered right and how many that lesson has.";
  "It initializes to an empty record rather than returning nothing, so a learner who has never answered anything reads the same shape as one who has finished everything, and no caller has to ask which it is.";
  let key = app_code_progress_storage_key();
  let progress = storage_local_initialize_context(context, key, {});
  return progress;
}
