import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_progress_storage_key } from "./app_code_progress_storage_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { storage_local_transform_empty_context } from "./storage_local_transform_empty_context.mjs";
export function app_code_progress_lessons_complete_mark(context, lesson_ids) {
  arguments_assert(arguments, 2);
  ("Writes these lessons down as finished on this learner's own disk, by the complete flag, leaving every quiz they actually answered exactly as it was.");
  let key = app_code_progress_storage_key();
  function lambda$progress(progress) {
    function each_id(id) {
      let record = property_get_or_null(progress, id);
      let missing = null_is(record);
      if (missing) {
        record = {};
        property_set(progress, id, record);
      }
      property_set(record, "complete", true);
    }
    each(lesson_ids, each_id);
    return progress;
  }
  storage_local_transform_empty_context(context, key, lambda$progress);
}
