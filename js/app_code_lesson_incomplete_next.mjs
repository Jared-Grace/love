import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { app_code_progress_read } from "./app_code_progress_read.mjs";
import { list_skip } from "./list_skip.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { app_code_lesson_complete_is } from "./app_code_lesson_complete_is.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_first_try } from "./list_first_try.mjs";
export function app_code_lesson_incomplete_next(
  context,
  index_start,
  id_skipped,
) {
  "$plain index_start";
  "$plain id_skipped";
  "The next lesson this learner has not finished, looking from one place in the lesson list onwards - a blue row on the home list rather than a green one they have already been all the way through - or nothing at all where there is no such lesson.";
  "IT NEVER GOES ROUND THE TOP OF THE LIST: it looks only from the starting place downwards, and running off the bottom means there is nowhere further on. A way-forward button that carried a learner on a late lesson back to lesson 1 would say next while going backwards. Early lessons left unfinished are still reached from the home screen, whose button looks from the very top. It used to carry on round the top, on the argument that work above the learner is still work; that was rejected because every caller labels its button as a way on.";
  "THE LESSON THEY ARE LEAVING IS NAMED AND NEVER ANSWERED WITH, because a caller may start the search at that lesson itself; without that, a learner on an unfinished lesson would be sent from it to itself. A caller that is leaving no lesson - a review checkpoint standing between two of them - names nothing, and nothing is skipped.";
  "It hands back the lesson rather than its id, because one caller wants the id to write down and another wants the lesson itself to go to, and the lesson holds the id while the id does not hold the lesson.";
  "Nothing at all is the answer where every lesson from here on is finished, rather than the first lesson - a learner who has done all of it has no unfinished lesson to be sent to, and each caller says for itself where a finished course goes instead.";
  arguments_assert(arguments, 3);
  let lessons = app_code_lessons();
  let progress = app_code_progress_read(context);
  let onwards = list_skip(lessons, index_start);
  function lambda(item) {
    let id = property_get(item, "id");
    let left_behind = equal(id, id_skipped);
    if (left_behind) {
      return false;
    }
    let complete = app_code_lesson_complete_is(progress, id);
    let unfinished = not(complete);
    return unfinished;
  }
  let unfinished_lessons = list_filter(onwards, lambda);
  let lesson = list_first_try(unfinished_lessons);
  return lesson;
}
