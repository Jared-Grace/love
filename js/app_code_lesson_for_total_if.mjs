import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { app_code_for_if_skipped_parts } from "./app_code_for_if_skipped_parts.mjs";
import { add } from "./add.mjs";
import { json_to } from "./json_to.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_for_total } from "./app_code_lesson_for_total.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { object_copy_assign } from "./object_copy_assign.mjs";
import { app_code_lesson_for_if_greater_options } from "./app_code_lesson_for_if_greater_options.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_lesson_for_if_generic } from "./app_code_lesson_for_if_generic.mjs";
export function app_code_lesson_for_total_if() {
  arguments_assert(arguments, 0);
  ("a total of only some: let total = 0; for (let n = 2; n < 5; n++) { if (n > 2) { total += n; } } console.log(total); writes out 7, which is 3 + 4");
  ("The one new fact is that a total inside the if adds only the numbers the if lets through. Adding up the items of an array that match is this shape.");
  ("Chosen by the human 2026-11-06, the second of four lessons of an if inside a for before arrays.");
  ("It remembers For with a running total rather than the lesson before it, since the line it puts inside the if is that lesson's line.");
  ("The writing is a first draft by Claude 2026-11-06.");
  let plus = js_operator_plus_symbol();
  let name = "n";
  let total_name = "total";
  let added = js_code_assign_operator_statement(total_name, plus, name);
  function inside_write(asked) {
    let lines = js_code_if_lines(asked, added);
    return lines;
  }
  function effect(value, passed, state) {
    "total goes up by n when the if lets n through";
    let parts = app_code_for_if_skipped_parts();
    let state_after = state;
    if (passed) {
      state_after = add(state, value);
      let json = json_to(state_after);
      parts = [", so ", total_name, " becomes ", json, ", then "];
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
      total_name,
      " is ",
      json2,
      ": it added only the numbers where the ",
      "if",
      " was ",
      "true",
    ];
    return end;
  }
  function above(root, context, example, walk) {
    "For with a running total remembered, then the total inside an if";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_for_total, [
      "",
      added,
      " inside a ",
      "for",
      " adds every ",
      name,
      " to ",
      total_name,
      ".",
    ]);
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Put it inside an ",
      "if",
      ", and it adds only the numbers where the ",
      "if",
      " is ",
      "true",
      ":",
    ]);
    example(box_two);
    walk(box_two);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "A total of only some",
    "if (...) { total += n; }",
  );
  let to = app_code_lesson_for_if_greater_options();
  let code = js_code_let_statement(total_name, 0);
  let statement = js_code_console_log_statement(total_name);
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
