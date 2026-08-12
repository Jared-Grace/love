import { app_code_lessons } from "./app_code_lessons.mjs";
import { app_code_progress_storage_key } from "./app_code_progress_storage_key.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { storage_local_transform_empty_context } from "./storage_local_transform_empty_context.mjs";
export function app_code_progress_all_complete_mark(context) {
  "Writes every lesson down as finished on this learner's own disk, for somebody who has already learnt this elsewhere and wants the list to say so rather than working back through it.";
  "It marks rather than counts: a record gains a complete flag, and the quizzes it has actually answered are left exactly as they were. So the mark is honest about being a mark, and a learner who later answers a quiz for real still has that answer written down under it.";
  arguments_assert(arguments, 1);
  let key = app_code_progress_storage_key();
  let lessons = app_code_lessons();
  function lambda$progress(progress) {
    function each_lesson(lesson) {
      let id = property_get(lesson, "id");
      let record = property_get_or_null(progress, id);
      let missing = null_is(record);
      if (missing) {
        record = {};
        property_set(progress, id, record);
      }
      property_set(record, "complete", true);
    }
    each(lessons, each_lesson);
    return progress;
  }
  storage_local_transform_empty_context(context, key, lambda$progress);
}
