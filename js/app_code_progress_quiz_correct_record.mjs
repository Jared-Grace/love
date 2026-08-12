import { app_code_lesson_current_id } from "./app_code_lesson_current_id.mjs";
import { app_code_progress_storage_key } from "./app_code_progress_storage_key.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { storage_local_transform_empty_context } from "./storage_local_transform_empty_context.mjs";
export function app_code_progress_quiz_correct_record(
  context,
  quiz_index,
  quizzes_total,
) {
  "Writes down that this learner has answered one quiz of the lesson they are on correctly, on their own disk, so the lesson list can show the lesson as finished once every quiz of it has been.";
  "The index is added only if it is not already there, so answering the same quiz ten times reads the same as answering it once - the question being kept is which quizzes have been got right, not how many answers were given.";
  "How many quizzes the lesson has is written down again on every recording rather than only when the record is made. A lesson that later gains a quiz would otherwise keep counting as finished against the old number, and nobody would be told the new one was never answered.";
  let key = app_code_progress_storage_key();
  let lesson_id = app_code_lesson_current_id(context);
  function lambda$progress(progress) {
    let record = property_get_or_null(progress, lesson_id);
    let missing = null_is(record);
    if (missing) {
      record = {
        quizzes_done: [],
        quizzes_total,
      };
      property_set(progress, lesson_id, record);
    }
    property_set(record, "quizzes_total", quizzes_total);
    let done = property_get_or_null(record, "quizzes_done");
    list_add_unique(done, quiz_index);
    return progress;
  }
  storage_local_transform_empty_context(context, key, lambda$progress);
}
