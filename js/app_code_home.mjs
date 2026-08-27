import { html_clear_context } from "./html_clear_context.mjs";
import { app_code_home_value } from "./app_code_home_value.mjs";
import { property_get } from "./property_get.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { storage_session_get_context } from "./storage_session_get_context.mjs";
import { app_code_home_rows_start } from "./app_code_home_rows_start.mjs";
import { app_code_reviews_complete_read } from "./app_code_reviews_complete_read.mjs";
import { app_code_lesson_complete_is } from "./app_code_lesson_complete_is.mjs";
import { app_code_home_lesson_button } from "./app_code_home_lesson_button.mjs";
import { app_code_home_way_marked_next } from "./app_code_home_way_marked_next.mjs";
import { equal } from "./equal.mjs";
import { app_code_home_just_left_next } from "./app_code_home_just_left_next.mjs";
import { add_1 } from "./add_1.mjs";
import { app_code_review_scope } from "./app_code_review_scope.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_code_review_complete_is } from "./app_code_review_complete_is.mjs";
import { app_code_home_review_row } from "./app_code_home_review_row.mjs";
import { each_index } from "./each_index.mjs";
import { app_code_home_just_left_center } from "./app_code_home_just_left_center.mjs";
export async function app_code_home(context) {
  "on returning home the row just left is scrolled to the vertical center, so the learner lands back where they were - and that row is the review checkpoint where a review is what they came back from, and the lesson (its id is remembered in lesson_id) otherwise";
  let root = html_clear_context(context);
  let r = app_code_home_value(root, context);
  let value = property_get(r, "value");
  let div = property_get(r, "div");
  let g = property_get(r, "g");
  html_style_margin_y(div, value);
  let lessons = app_code_lessons();
  let current_id = storage_session_get_context(context, "lesson_id");
  let r2 = app_code_home_rows_start(context);
  let way_marked = property_get(r2, "way_marked");
  let complete_all_previous = property_get(r2, "complete_all_previous");
  let progress = property_get(r2, "progress");
  let just_left = property_get(r2, "just_left");
  let lesson_left = property_get(r2, "lesson_left");
  let review_left = property_get(r2, "review_left");
  let review_number = property_get(r2, "review_number");
  ("which reviews have been finished is read once for the whole list, the same way the finished lessons are, rather than once inside every row");
  let reviews_complete = app_code_reviews_complete_read(context);
  function lambda(item, index) {
    let id = property_get(item, "id");
    let open = complete_all_previous;
    let complete = app_code_lesson_complete_is(progress, id);
    let r3 = app_code_home_lesson_button(
      g,
      context,
      item,
      index,
      complete,
      complete_all_previous,
    );
    let button = property_get(r3, "button");
    ("what carries on to the lesson below is read back off the row rather than worked out again here: the row has already decided it, to choose its own colour and its own pointing hand");
    complete_all_previous = property_get(r3, "complete_all_previous_next");
    way_marked = app_code_home_way_marked_next(
      button,
      way_marked,
      open,
      complete,
    );
    let lesson_is = lesson_left && equal(id, current_id);
    just_left = app_code_home_just_left_next(just_left, button, lesson_is);
    let lesson_number = add_1(index);
    let scope = app_code_review_scope(lesson_number);
    let has_review = null_not_is(scope);
    if (has_review) {
      let review_complete = app_code_review_complete_is(
        reviews_complete,
        lesson_number,
      );
      let review = app_code_home_review_row(
        g,
        context,
        lesson_number,
        scope,
        review_complete,
      );
      let review_is = review_left && equal(lesson_number, review_number);
      just_left = app_code_home_just_left_next(just_left, review, review_is);
    }
  }
  each_index(lessons, lambda);
  await app_code_home_just_left_center(just_left, context);
}
