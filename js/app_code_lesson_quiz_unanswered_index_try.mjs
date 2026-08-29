import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_progress_read } from "./app_code_progress_read.mjs";
import { app_code_lesson_current_id } from "./app_code_lesson_current_id.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { list_indexes } from "./list_indexes.mjs";
import { equal } from "./equal.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_first_try } from "./list_first_try.mjs";
export function app_code_lesson_quiz_unanswered_index_try(
  context,
  quizzes,
  quiz_index,
) {
  "$plain quiz_index";
  "Where the first quiz of the lesson being read sits that this learner has never yet answered correctly, other than the one they are reading now - or nothing at all when there is no such quiz.";
  "THE ONE THEY ARE READING IS LEFT OUT, because it is where they already are, and because the buttons around a quiz are drawn before it has been answered. Counting it would name the current question as the unfinished one on every quiz in the course, and the way on would be a button that redrew the page it was pressed on.";
  "Which quizzes have been answered is read off the record this learner keeps for this lesson on their own disk, so a lesson nobody has answered anything in reads as none answered rather than as missing.";
  arguments_assert(arguments, 3);
  let progress = app_code_progress_read(context);
  let lesson_id = app_code_lesson_current_id(context);
  let record = property_get_or_null(progress, lesson_id);
  let missing = null_is(record);
  let done = [];
  if (not(missing)) {
    done = property_get_or(record, "quizzes_done", []);
  }
  let indexes = list_indexes(quizzes);
  function lambda(at) {
    let here = equal(at, quiz_index);
    if (here) {
      return false;
    }
    let unanswered = list_includes_not(done, at);
    return unanswered;
  }
  let places = list_filter(indexes, lambda);
  let index = list_first_try(places);
  return index;
}
