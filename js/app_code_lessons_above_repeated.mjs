import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { app_code_lesson_ids_short } from "./app_code_lesson_ids_short.mjs";
import { app_code_lesson_fn_id_set } from "./app_code_lesson_fn_id_set.mjs";
import { html_element_fake_lines } from "./html_element_fake_lines.mjs";
import { app_code_lesson_above_fake_draw } from "./app_code_lesson_above_fake_draw.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_lessons_fake_page_lambda } from "./app_code_lessons_fake_page_lambda.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_all } from "./list_all.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_lessons_above_repeated() {
  arguments_assert(arguments, 0);
  ("Every step lesson whose telling repeats the whole telling of the lesson after it without saying so, and every step lesson that says so about a lesson that is not the one after it, as lesson name | what is wrong.");
  ("Saying so is carrying above_taught_fn_name, which ",
    fn_name("app_code_lesson_step_before_lesson_generic"),
    " sets. ",
    fn_name("app_code_lesson_above_shown"),
    " reads it to show a short line in place of the repeated boxes, once the step lesson is finished. The human's goal, 2026-10-22: a step lesson and its regular lesson do not needlessly repeat their telling.");
  ("Read off the drawn screens, the same way the other telling checks read them. A step lesson repeats the next one when every drawn line of the next one's telling is among its own; a next lesson with no lines repeats nothing. Measured 2026-10-22: the eight step-first pairs each repeated all of their regular lesson, and the regular-first pairs repeated none.");
  ("Also says how many lessons were drawn, because nothing found is the answer on a clean run and on a run that drew nothing.");
  let fns = app_code_lessons_fns();
  let ids = app_code_lesson_ids_short();
  let offenders = [];
  let drawn = [];
  function all_read() {
    function one_read(fn) {
      let lesson = app_code_lesson_fn_id_set(fn);
      let element = app_code_lesson_above_fake_draw(fn);
      let lines = html_element_fake_lines(element);
      let r2 = {
        name: fn.name,
        lesson,
        lines,
      };
      return r2;
    }
    drawn = list_map(fns, one_read);
  }
  app_code_lessons_fake_page_lambda(all_read);
  function one_check(d, index) {
    let lesson = property_get(d, "lesson");
    let guided = equal(lesson.examples_guided, true);
    if (not(guided)) {
      return;
    }
    let right = list_size(drawn);
    let last = equal(index + 1, right);
    let next = last ? undefined : list_get(drawn, index + 1);
    let taught = lesson.above_taught_fn_name;
    let marked = not_equal(taught, undefined);
    if (marked) {
      let object = property_get(next, "lesson");
      let next_id = equal(next, undefined) ? null : property_get(object, "id");
      let left = property_get(ids, taught);
      let follows = equal(left, next_id);
      if (not(follows)) {
        let item = text_combine_multiple([
          d.name,
          " | says the next lesson is ",
          taught,
          " but it is not",
        ]);
        list_add(offenders, item);
      }
      return;
    }
    if (equal(next, undefined)) {
      return;
    }
    let next_lines = property_get(next, "lines");
    let own_lines = property_get(d, "lines");
    function own_has(line) {
      let includes = list_includes(own_lines, line);
      return includes;
    }
    let a = list_size(next_lines);
    let repeats = greater_than(a, 0) && list_all(next_lines, own_has);
    if (repeats) {
      let item2 = text_combine_multiple([
        d.name,
        " | repeats the whole telling of ",
        next.name,
        " - build it with ",
        fn_name("app_code_lesson_step_before_lesson_generic"),
      ]);
      list_add(offenders, item2);
    }
  }
  each_index(drawn, one_check);
  let r = {
    walked: list_size(fns),
    offenders,
  };
  return r;
}
