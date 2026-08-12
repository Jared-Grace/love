import { greater_than_equal } from "./greater_than_equal.mjs";
import { greater_than_equal_1 } from "./greater_than_equal_1.mjs";
import { list_size } from "./list_size.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function app_code_lesson_complete_is(progress, lesson_id) {
  "Whether this learner has finished a lesson: every quiz it has, answered right at least once. Wrong tries along the way cost nothing, because what is being asked is whether they got there, not how straight the path was.";
  "How many quizzes a lesson has is read off the record rather than off the lesson, because the quizzes are built while a lesson is being shown and the list screen does not build them. The count is written down at the moment an answer is recorded, which is a moment that has it.";
  "A lesson nobody has answered anything in has no record at all, and reads as not finished. So does a record claiming no quizzes, which would otherwise count as finished the moment it was made.";
  let record = property_get_or_null(progress, lesson_id);
  let missing = null_is(record);
  if (missing) {
    return false;
  }
  ("a lesson the learner marked finished by hand in settings says so on its own record, and is taken at its word - they were asked whether they meant it at the time");
  let marked = property_get_or(record, "complete", false);
  if (marked) {
    return true;
  }
  let done = property_get_or(record, "quizzes_done", []);
  let total = property_get_or(record, "quizzes_total", 0);
  let any = greater_than_equal_1(total);
  let size = list_size(done);
  let all = greater_than_equal(size, total);
  let complete = any && all;
  return complete;
}
