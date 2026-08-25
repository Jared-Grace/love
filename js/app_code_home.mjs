import { app_code_home_lesson_button } from "./app_code_home_lesson_button.mjs";
import { app_code_home_way_marked_next } from "./app_code_home_way_marked_next.mjs";
import { app_code_home_review_row } from "./app_code_home_review_row.mjs";
import { app_code_home_value } from "./app_code_home_value.mjs";
import { app_code_home_way_marked } from "./app_code_home_way_marked.mjs";
import { app_code_home_just_left_center } from "./app_code_home_just_left_center.mjs";
import { app_code_lesson_complete_is } from "./app_code_lesson_complete_is.mjs";
import { app_code_review_scope } from "./app_code_review_scope.mjs";
import { add_1 } from "./add_1.mjs";
import { storage_session_get_context } from "./storage_session_get_context.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { each_index } from "./each_index.mjs";
export async function app_code_home(context) {
  "on returning home the lesson just left (its id is remembered in lesson_id) is scrolled to the vertical center, so the learner lands back where they were";
  let root = html_clear_context(context);
  let r = app_code_home_value(root, context);
  let value = property_get(r, "value");
  let div = property_get(r, "div");
  let g = property_get(r, "g");
  html_style_margin_y(div, value);
  let lessons = app_code_lessons();
  let current_id = storage_session_get_context(context, "lesson_id");
  let r2 = app_code_home_way_marked(context);
  let way_marked = property_get(r2, "way_marked");
  let complete_previous = property_get(r2, "complete_previous");
  let progress = property_get(r2, "progress");
  let just_left = property_get(r2, "just_left");
  function lambda(item, index) {
    let id = property_get(item, "id");
    let open = complete_previous;
    let complete = app_code_lesson_complete_is(progress, id);
    let button = app_code_home_lesson_button(
      g,
      context,
      item,
      index,
      complete,
      complete_previous,
    );
    complete_previous = complete;
    way_marked = app_code_home_way_marked_next(
      button,
      way_marked,
      open,
      complete,
    );
    let is_current = equal(id, current_id);
    if (is_current) {
      just_left = button;
    }
    let lesson_number = add_1(index);
    let scope = app_code_review_scope(lesson_number);
    let has_review = null_not_is(scope);
    if (has_review) {
      app_code_home_review_row(g, context, lesson_number, scope);
    }
  }
  each_index(lessons, lambda);
  await app_code_home_just_left_center(just_left, context);
}
