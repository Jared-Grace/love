import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_index_by_id } from "./app_code_lesson_index_by_id.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_get } from "./list_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { app_code_lesson_ids_short } from "./app_code_lesson_ids_short.mjs";
import { app_code_progress_read } from "./app_code_progress_read.mjs";
import { app_code_lesson_complete_is } from "./app_code_lesson_complete_is.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
export function app_code_lesson_above_shown(context, lesson) {
  arguments_assert(arguments, 2);
  ("the telling drawn above a lesson's examples: its own boxes, or, when the lesson before it stepped through these same programs with these same boxes and the learner has finished that lesson, a short line saying so in their place");
  ("Asked for by the human 2026-10-22: a step lesson that comes first opens with the boxes of the lesson after it, so a learner going on read the same boxes twice in a row. The two lessons stay apart, because each teaches its own kind of quiz with its own example.");
  ("The boxes are only left out for a learner who FINISHED the step lesson, because the human settled on 2026-09-11 that the telling is always on the screen for a learner who has not seen it. Not picked: a button showing the boxes again, which is the very hiding that was settled against.");
  let above = property_get(lesson, "above");
  let lesson_id = property_get(lesson, "id");
  let index = app_code_lesson_index_by_id(lesson_id);
  if (less_than(index, 1)) {
    return above;
  }
  let lessons = app_code_lessons();
  let index2 = subtract(index, 1);
  let before = list_get(lessons, index2);
  let taught_fn_name = property_get_or_null(before, "above_taught_fn_name");
  if (equal(taught_fn_name, null)) {
    return above;
  }
  let ids = app_code_lesson_ids_short();
  let taught_id = property_get_or_null(ids, taught_fn_name);
  if (not_equal(taught_id, lesson_id)) {
    return above;
  }
  let progress = app_code_progress_read(context);
  let before_id = property_get(before, "id");
  let finished = app_code_lesson_complete_is(progress, before_id);
  if (not(finished)) {
    return above;
  }
  function above_short(root, context_above) {
    let box = app_code_container_light_blue(root);
    app_code_div_cycle_code(box, [
      "The last lesson ran these programs one line at a time, and its boxes explain each line",
    ]);
    app_code_div_cycle_code(box, [
      "Now work out each whole program at once, without stepping",
    ]);
    return null;
  }
  return above_short;
}
