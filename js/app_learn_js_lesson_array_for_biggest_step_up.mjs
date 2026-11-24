import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_differences } from "./app_learn_js_lesson_array_for_differences.mjs";
import { app_learn_js_lesson_array_for_biggest } from "./app_learn_js_lesson_array_for_biggest.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_biggest_step_up() {
  arguments_assert(arguments, 0);
  ("the biggest step up between neighbours of an array: let jump = 0; for (let i = 0; i < a.length - 1; i++) { if (a[i + 1] - a[i] > jump) { jump = a[i + 1] - a[i]; } } console.log(jump); writes out 5 for [3, 7, 4, 9]");
  ("2026-11-25, at the human's asking (item 3 of the array lessons offered that day, offered as Biggest jump). Differences between neighbours kept the way Biggest number kept big. Nothing in it is new. Named a step up rather than a jump because jump starts at 0, so a step down is never kept.");
  ("The arrays hold different numbers 1 to 9, 3 to 5 numbers long. An array is kept only when every wrong program writes out something other than the answer, so each wrong answer is always on offer.");
  ("The wrong programs are: jump = a[i + 1] (the number after the step, not how big the step is), a[i] - a[i + 1] in both places (the biggest step down) and jump = a[i + 1] - a[i] with no if (the last step, not the biggest).");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = [3, 7, 4, 9];
  let pool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let step_up = "a[i + 1] - a[i]";
  function program_with(items, body) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let lines = [
      "let a = " + array + ";",
      "let jump = 0;",
      "for (let i = 0; i < a.length - 1; i++) {",
    ];
    for (let line of body) {
      lines.push(line);
    }
    lines.push("}");
    lines.push("console.log(jump);");
    let code = list_join_newline(lines);
    return code;
  }
  function kept(step, set) {
    let body2 = [
      "  if (" + step + " > jump) {",
      "    jump = " + set + ";",
      "  }",
    ];
    return body2;
  }
  function program_of(items2) {
    let v4 = kept(step_up, step_up);
    let code2 = program_with(items2, v4);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v5 = kept(step_up, "a[i + 1]");
    let v = program_with(items3, v5);
    let step_down = "a[i] - a[i + 1]";
    let v6 = kept(step_down, step_down);
    let v2 = program_with(items3, v6);
    let v3 = program_with(items3, ["  jump = " + step_up + ";"]);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function every_wrong_differs(items5) {
    let code4 = program_of(items5);
    let answer = eval_console_log_lines(code4);
    let list = wrong_programs_of(items5);
    let outputs = list_map(list, eval_console_log_lines);
    let same = list_includes(outputs, answer);
    let n = not(same);
    return n;
  }
  function array_of(size) {
    "different numbers 1 to 9, tried again until every wrong program writes out something else";
    while (true) {
      let taken = list_shuffle_take(pool, size);
      if (every_wrong_differs(taken)) {
        return taken;
      }
    }
  }
  function inputs_get() {
    let sizes = [3, 4, 3, 4, 5, 5];
    let arrays = list_map(sizes, array_of);
    return arrays;
  }
  function above(root, context) {
    "the difference to the next number and keeping the biggest remembered, then the biggest step up kept";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_differences,
      ["", step_up, " is how much the next number goes up"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_biggest,
      ["", "if (a[i] > big) { big = a[i]; }", " keeps the biggest number"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Keeping the biggest ",
      step_up,
      " the same way gives the biggest step up between neighbours:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Biggest step up",
    "jump = " + step_up + ";",
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs({
    name_id,
    above,
    inputs_get,
    program_of,
    wrong_programs_of,
    wrong_outputs_of,
  });
  return lesson;
}
