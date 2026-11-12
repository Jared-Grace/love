import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lessons_fns } from "./app_learn_js_lessons_fns.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { app_learn_js_lesson_step_log_twice } from "./app_learn_js_lesson_step_log_twice.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { app_learn_js_lesson_examples_guided_is } from "./app_learn_js_lesson_examples_guided_is.mjs";
import { app_learn_js_lesson_steps_unsolved_why } from "./app_learn_js_lesson_steps_unsolved_why.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { function_name_to_path_absolute } from "./function_name_to_path_absolute.mjs";
import { file_read } from "./file_read.mjs";
import { equal } from "./equal.mjs";
import { text_occurrences_count } from "./text_occurrences_count.mjs";
import { text_replace_once } from "./text_replace_once.mjs";
import { text_includes } from "./text_includes.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function app_learn_js_lessons_steps_turn_on() {
  arguments_assert(arguments, 0);
  ("Turns the step-by-step quiz on in every lesson after the one that introduces stepping whose programs the step-through can solve, and says which lessons it left alone and why. Finds its own set, so running it again turns on only what is still off.");
  ("2026-11-12, at the human's asking: interactive on across Statements, and anywhere later it should be. Lessons before step_log_twice are left alone, because stepping is introduced there.");
  ("A lesson's own file is changed in one of three shapes it is written in: steps: false said once, a pair's first lesson handed false, or a call to the code lesson saying nothing of steps. Any other shape is reported rather than guessed at, since steps then arrives through a generic shared with other lessons.");
  let fns = app_learn_js_lessons_fns();
  let start = list_index_of(fns, app_learn_js_lesson_step_log_twice) + 1;
  let turned = [];
  let unsolved = [];
  let unhandled = [];
  let code_logged = text_combine_multiple([
    fn_name("app_learn_js_lesson_code_logged"),
    "({",
  ]);
  let pair_false = "_pair_first(pair, false)";
  for (let index = start; less_than(index, list_size(fns)); index++) {
    let fn = list_get(fns, index);
    let lesson = fn();
    if (app_learn_js_lesson_examples_guided_is(lesson)) {
      continue;
    }
    let name = fn.name;
    let why = app_learn_js_lesson_steps_unsolved_why(lesson);
    let b = null_is(why);
    if (not(b)) {
      list_add(unsolved, {
        name,
        why,
      });
      continue;
    }
    let f_path = function_name_to_path_absolute(name);
    let before = await file_read(f_path);
    let after = null;
    let left = text_occurrences_count(before, "steps: false");
    let left2 = text_occurrences_count(before, pair_false);
    let left3 = text_occurrences_count(before, code_logged);
    if (equal(left, 1)) {
      after = text_replace_once(before, "steps: false", "steps: true");
    } else if (equal(left2, 1)) {
      after = text_replace_once(before, pair_false, "_pair_first(pair, true)");
    } else if (equal(left3, 1) && not(text_includes(before, "steps"))) {
      after = text_replace_once(
        before,
        code_logged,
        code_logged + "steps: true,",
      );
    }
    if (null_is(after)) {
      list_add(unhandled, name);
      continue;
    }
    await file_overwrite(f_path, after);
    list_add(turned, name);
  }
  let r = {
    turned,
    unsolved,
    unhandled,
  };
  return r;
}
