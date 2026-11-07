import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_expression_choose_order_stop_early_or } from "./app_learn_js_lesson_expression_choose_order_stop_early_or.mjs";
import { app_learn_js_lesson_expression_choose_order_stop_early_and } from "./app_learn_js_lesson_expression_choose_order_stop_early_and.mjs";
import { app_learn_js_lesson_expression_choose_order_stop_early_both } from "./app_learn_js_lesson_expression_choose_order_stop_early_both.mjs";
import { app_code_lesson_step_log_twice } from "./app_code_lesson_step_log_twice.mjs";
import { app_learn_js_lesson_else_if_order } from "./app_learn_js_lesson_else_if_order.mjs";
import { app_learn_js_lesson_braces_run_thrice } from "./app_learn_js_lesson_braces_run_thrice.mjs";
import { app_learn_js_lesson_if_thrice } from "./app_learn_js_lesson_if_thrice.mjs";
export function app_learn_js_course_new_fns() {
  "The lessons a link saying course=new shows: the ones a working copy has that latest does not show.";
  "2026-10-17: read off the latest code page built 2026-10-15 13:06. Twenty-one lessons have no id in its bundle, so latest has never had them; seven more were in it but held back from latest when it was built, and are still held. The order here does not matter, because the lessons are shown in the order of the whole run.";
  "2026-10-18: the four while lessons taken out at the human's asking, though latest does not show them either.";
  "2026-11-01: the six step lessons that came before their lesson taken out at the human's asking, each folded into that lesson as its first quiz.";
  "This list goes stale when latest is built again. Not picked: working it out on the page, which cannot see what latest was built from.";
  arguments_assert(arguments, 0);
  let fns = [
    app_learn_js_lesson_expression_choose_order_stop_early_or,
    app_learn_js_lesson_expression_choose_order_stop_early_and,
    app_learn_js_lesson_expression_choose_order_stop_early_both,
    app_code_lesson_step_log_twice,
    app_learn_js_lesson_else_if_order,
    app_learn_js_lesson_braces_run_thrice,
    app_learn_js_lesson_if_thrice,
  ];
  return fns;
}
