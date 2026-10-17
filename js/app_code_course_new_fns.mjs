import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_stop_early_or } from "./app_code_lesson_expression_choose_order_stop_early_or.mjs";
import { app_code_lesson_expression_choose_order_stop_early_and } from "./app_code_lesson_expression_choose_order_stop_early_and.mjs";
import { app_code_lesson_expression_choose_order_stop_early_both } from "./app_code_lesson_expression_choose_order_stop_early_both.mjs";
import { app_code_lesson_step_log_twice } from "./app_code_lesson_step_log_twice.mjs";
import { app_code_lesson_step_name_again } from "./app_code_lesson_step_name_again.mjs";
import { app_code_lesson_step_name_copy_kept } from "./app_code_lesson_step_name_copy_kept.mjs";
import { app_code_lesson_step_name_plus_one } from "./app_code_lesson_step_name_plus_one.mjs";
import { app_code_lesson_step_name_one_more } from "./app_code_lesson_step_name_one_more.mjs";
import { app_code_lesson_step_name_sum } from "./app_code_lesson_step_name_sum.mjs";
import { app_code_lesson_step_name_join } from "./app_code_lesson_step_name_join.mjs";
import { app_code_lesson_step_name_plus_assign } from "./app_code_lesson_step_name_plus_assign.mjs";
import { app_code_lesson_step_name_minus_assign } from "./app_code_lesson_step_name_minus_assign.mjs";
import { app_code_lesson_step_name_times_assign } from "./app_code_lesson_step_name_times_assign.mjs";
import { app_code_lesson_step_name_divide_assign } from "./app_code_lesson_step_name_divide_assign.mjs";
import { app_code_lesson_step_name_increment } from "./app_code_lesson_step_name_increment.mjs";
import { app_code_lesson_step_name_decrement } from "./app_code_lesson_step_name_decrement.mjs";
import { app_code_lesson_step_name_swap_try } from "./app_code_lesson_step_name_swap_try.mjs";
import { app_code_lesson_step_name_average_two } from "./app_code_lesson_step_name_average_two.mjs";
import { app_code_lesson_step_name_average_three } from "./app_code_lesson_step_name_average_three.mjs";
import { app_code_lesson_step_name_grid_inside } from "./app_code_lesson_step_name_grid_inside.mjs";
import { app_code_lesson_step_if_change } from "./app_code_lesson_step_if_change.mjs";
import { app_code_lesson_else_if_order } from "./app_code_lesson_else_if_order.mjs";
import { app_code_lesson_braces_run_thrice } from "./app_code_lesson_braces_run_thrice.mjs";
import { app_code_lesson_if_thrice } from "./app_code_lesson_if_thrice.mjs";
export function app_code_course_new_fns() {
  "The lessons a link saying course=new shows: the ones a working copy has that latest does not show.";
  "2026-10-17: read off the latest code page built 2026-10-15 13:06. Twenty-one lessons have no id in its bundle, so latest has never had them; seven more were in it but held back from latest when it was built, and are still held. The order here does not matter, because the lessons are shown in the order of the whole run.";
  "2026-10-18: the four while lessons taken out at the human's asking, though latest does not show them either.";
  "This list goes stale when latest is built again. Not picked: working it out on the page, which cannot see what latest was built from.";
  arguments_assert(arguments, 0);
  let fns = [
    app_code_lesson_expression_choose_order_stop_early_or,
    app_code_lesson_expression_choose_order_stop_early_and,
    app_code_lesson_expression_choose_order_stop_early_both,
    app_code_lesson_step_log_twice,
    app_code_lesson_step_name_again,
    app_code_lesson_step_name_copy_kept,
    app_code_lesson_step_name_plus_one,
    app_code_lesson_step_name_one_more,
    app_code_lesson_step_name_sum,
    app_code_lesson_step_name_join,
    app_code_lesson_step_name_plus_assign,
    app_code_lesson_step_name_minus_assign,
    app_code_lesson_step_name_times_assign,
    app_code_lesson_step_name_divide_assign,
    app_code_lesson_step_name_increment,
    app_code_lesson_step_name_decrement,
    app_code_lesson_step_name_swap_try,
    app_code_lesson_step_name_average_two,
    app_code_lesson_step_name_average_three,
    app_code_lesson_step_name_grid_inside,
    app_code_lesson_step_if_change,
    app_code_lesson_else_if_order,
    app_code_lesson_braces_run_thrice,
    app_code_lesson_if_thrice,
  ];
  return fns;
}
