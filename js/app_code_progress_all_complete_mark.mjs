import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { app_code_progress_lessons_complete_mark } from "./app_code_progress_lessons_complete_mark.mjs";
import { app_code_review_numbers } from "./app_code_review_numbers.mjs";
import { app_code_review_complete_record } from "./app_code_review_complete_record.mjs";
import { each } from "./each.mjs";
export function app_code_progress_all_complete_mark(context) {
  "Writes every lesson down as finished on this learner's own disk, for somebody who has already learnt this elsewhere and wants the list to say so rather than working back through it.";
  "It marks rather than counts: a record gains a complete flag, and the quizzes it has actually answered are left exactly as they were. So the mark is honest about being a mark, and a learner who later answers a quiz for real still has that answer written down under it.";
  arguments_assert(arguments, 1);
  let lessons = app_code_lessons();
  let lesson_ids = list_map_property(lessons, "id");
  app_code_progress_lessons_complete_mark(context, lesson_ids);
  ("the reviews are marked too, and are filed apart from the lessons, so they are written down by their own name here. Marking only the lessons would leave a list of finished lessons with unfinished reviews standing between them, which says the learner has work left to do that they have just said they have not.");
  let numbers = app_code_review_numbers();
  function each_number(number) {
    app_code_review_complete_record(context, number);
  }
  each(numbers, each_number);
}
