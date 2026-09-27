import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_course_unfinished_next } from "./app_code_course_unfinished_next.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_color_page_complete } from "./app_shared_color_page_complete.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_code_celebration } from "./app_code_celebration.mjs";
export function app_code_home_all_complete(parent, bar, context) {
  "At the foot of the lesson list, once this learner has finished every lesson and every review there is: the same celebration the end of a review draws, saying they have done all of it - at the human's request, 2026-09-27. Renders nothing (returns null) while anything is left unfinished.";
  "AVAILABLE AT THIS TIME, because the course is still being written: a learner who has done all of it today will find more tomorrow, and a line saying they had finished the course would stop being true the day a lesson is added.";
  "Everything is finished exactly when the search every unfinished-work button uses, started from the very top and leaving nothing behind, finds nothing - so this and those buttons can never disagree about whether anything is left.";
  "The whole page then stands on the same green as a finished lesson - noted here for the page, which is painted after every screen draws - at the human's request, 2026-09-27.";
  "The bar at the top is painted that green too, so the page reads as one green from top to bottom - the bar carries a colour of its own to hide the list scrolling under it, and that colour is the plain page's, at the human's request, 2026-09-27.";
  arguments_assert(arguments, 3);
  let index_start = 0;
  let id_none = null;
  let way = app_code_course_unfinished_next(context, index_start, id_none);
  let left = null_not_is(way);
  if (left) {
    return null;
  }
  property_set(context, "page_complete_shown", true);
  let green = app_shared_color_page_complete();
  html_style_background_color_set(bar, green);
  let message =
    "Congratulations! You completed all the lessons and reviews that are available at this time";
  let celebration = app_code_celebration(parent, message);
  return celebration;
}
