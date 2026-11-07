import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { app_learn_js_for_if_skipped_parts } from "./app_learn_js_for_if_skipped_parts.mjs";
import { add } from "./add.mjs";
import { json_to } from "./json_to.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_for_if } from "./app_code_lesson_for_if.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { object_copy_assign } from "./object_copy_assign.mjs";
import { app_code_lesson_for_if_greater_options } from "./app_code_lesson_for_if_greater_options.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_lesson_for_if_generic } from "./app_code_lesson_for_if_generic.mjs";
export function app_code_lesson_for_count_if() {
  arguments_assert(arguments, 0);
  ("counting only some runs: let count = 0; for (let n = 2; n < 5; n++) { if (n > 2) { count += 1; } } console.log(count); writes out 2");
  ("The one new fact is that a line inside the if runs only on the runs the if lets through, so a count inside it counts only those. Counting the items of an array that match is this shape.");
  ("Chosen by the human 2026-11-06, the first of four lessons of an if inside a for before arrays: counting, a total, even numbers, and an else.");
  ("It writes count += 1 rather than count++, as For counting the runs does.");
  ("The writing is a first draft by Claude 2026-11-06.");
  let plus = js_operator_plus_symbol();
  let count_name = "count";
  let counted = js_code_assign_operator_statement(count_name, plus, 1);
  function inside_write(asked) {
    let lines = js_code_if_lines(asked, counted);
    return lines;
  }
  function effect(value, passed, state) {
    "count goes up by one when the if lets n through";
    let parts = app_learn_js_for_if_skipped_parts();
    let state_after = state;
    if (passed) {
      state_after = add(state, 1);
      let json = json_to(state_after);
      parts = [", so ", count_name, " becomes ", json, ", then "];
    }
    let told = {
      parts,
      state: state_after,
    };
    return told;
  }
  function walk_end(state2) {
    let json2 = json_to(state2);
    let end = [
      "So ",
      count_name,
      " is ",
      json2,
      ": it counted only the runs where the ",
      "if",
      " was ",
      "true",
    ];
    return end;
  }
  function above(root, context, example, walk) {
    "An if inside a for remembered, then a count inside the if";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_for_if, [
      "an ",
      "if",
      " inside a ",
      "for",
      " is asked again every run.",
    ]);
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Put ",
      counted,
      " inside the ",
      "if",
      ", and it counts only the runs where the ",
      "if",
      " is ",
      "true",
      ":",
    ]);
    example(box_two);
    walk(box_two);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Counting only some runs",
    "if (...) { count += 1; }",
  );
  let to = app_code_lesson_for_if_greater_options();
  let code = js_code_let_statement(count_name, 0);
  let statement = js_code_console_log_statement(count_name);
  let options = object_copy_assign(to, {
    name_id,
    above,
    before: [code],
    after: [statement],
    inside_write,
    effect,
    state_start: 0,
    walk_end,
  });
  let lesson = app_code_lesson_for_if_generic(options);
  return lesson;
}
