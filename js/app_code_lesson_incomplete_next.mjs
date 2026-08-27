import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { app_code_progress_read } from "./app_code_progress_read.mjs";
import { list_size } from "./list_size.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_concat } from "./list_concat.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_complete_is } from "./app_code_lesson_complete_is.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_first_try } from "./list_first_try.mjs";
export function app_code_lesson_incomplete_next(context, index_start) {
  "$plain index_start";
  "The next lesson this learner has not finished, looking from one place in the lesson list onwards - the blue row on the home list rather than a green one already done - or nothing at all where every lesson is finished.";
  "IT CARRIES ON ROUND THE TOP OF THE LIST once it runs off the bottom, so a learner standing on a late lesson with an early one still open is taken to the early one. What is being asked is where there is still work, and work above where they are standing is still work; a button that stopped at the bottom would leave them with nowhere to go while the list still had blue rows on it.";
  "It hands back the lesson rather than its id, because one caller wants the id to write down and another wants the lesson itself to go to, and the lesson holds the id while the id does not hold the lesson.";
  "Nothing at all is the answer where every lesson is finished, rather than the first lesson - a learner who has done all of it has no unfinished lesson to be sent to, and each caller says for itself where a finished course goes instead.";
  arguments_assert(arguments, 2);
  let lessons = app_code_lessons();
  let progress = app_code_progress_read(context);
  let lessons_count = list_size(lessons);
  let onwards = list_slice(lessons, index_start, lessons_count);
  let before = list_slice(lessons, 0, index_start);
  let ordered = list_concat(onwards, before);
  function lambda(item) {
    let id = property_get(item, "id");
    let complete = app_code_lesson_complete_is(progress, id);
    let unfinished = not(complete);
    return unfinished;
  }
  let unfinished_lessons = list_filter(ordered, lambda);
  let lesson = list_first_try(unfinished_lessons);
  return lesson;
}
