import { list_skip } from "./list_skip.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { app_code_progress_read } from "./app_code_progress_read.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_concat } from "./list_concat.mjs";
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
  "IT CARRIES ON ROUND THE TOP OF THE LIST once it runs off the bottom, so a learner standing on a late lesson with an early one still open is taken to the early one. What is being asked is where there is still work, and work above where they are standing is still work; a search that stopped at the bottom would leave them with nowhere to go while the list still had blue rows on it.";
  "THE LESSON THEY ARE LEAVING IS NAMED AND NEVER ANSWERED WITH, because carrying on round the list reaches it again from underneath. Without that, a learner sitting on the one unfinished lesson in the course would be sent from it to itself, and the way on would be a button that reloaded the page they were already reading. A caller that is leaving no lesson - a review checkpoint standing between two of them - names nothing, and nothing is skipped.";
  "It hands back the lesson rather than its id, because one caller wants the id to write down and another wants the lesson itself to go to, and the lesson holds the id while the id does not hold the lesson.";
  "Nothing at all is the answer where every other lesson is finished, rather than the first lesson - a learner who has done all of it has no unfinished lesson to be sent to, and each caller says for itself where a finished course goes instead.";
  arguments_assert(arguments, 3);
  let lessons = app_code_lessons();
  let progress = app_code_progress_read(context);
  let onwards = list_skip(lessons, index_start);
  let before = list_slice(lessons, 0, index_start);
  let ordered = list_concat(onwards, before);
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
  let unfinished_lessons = list_filter(ordered, lambda);
  let lesson = list_first_try(unfinished_lessons);
  return lesson;
}
