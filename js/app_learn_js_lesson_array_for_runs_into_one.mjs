import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_array_runs_inputs } from "./app_learn_js_array_runs_inputs.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_run_last } from "./app_learn_js_lesson_array_for_run_last.mjs";
import { app_learn_js_lesson_array_for_push_if_e } from "./app_learn_js_lesson_array_for_push_if_e.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_runs_into_one() {
  arguments_assert(arguments, 0);
  ("each run squeezed into one item: let a = ['x', 'x', 'y', 'z', 'z']; let c = []; for (...) { if (i === a.length - 1 || a[i] !== a[i + 1]) { c.push(a[i]); } } console.log(c); writes out ['x', 'y', 'z']");
  ("2026-11-25, at the human's asking, after Each run once. The one new fact is that the if of Last of each run can push into a new array in place of writing out: the program of Last of each run with console.log(a[i]) changed to c.push(a[i]).");
  ("The inputs and wrong programs are those of Last of each run - see ",
    fn_name("app_learn_js_array_runs_inputs"),
    ": the loop stopping one early, && in place of || and === in place of !==.");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = ["x", "x", "y", "z", "z"];
  let values = ["x", "y", "z"];
  let last = "i === a.length - 1";
  function program_with(items, bound, joiner, compare) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let lines = [
      "let a = " + array + ";",
      "let c = [];",
      "for (let i = 0; i < " + bound + "; i++) {",
      "  if (" + last + " " + joiner + " a[i] " + compare + " a[i + 1]) {",
      "    c.push(a[i]);",
      "  }",
      "}",
      "console.log(c);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(items2, "a.length", "||", "!==");
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, "a.length - 1", "||", "!==");
    let v2 = program_with(items3, "a.length", "&&", "!==");
    let v3 = program_with(items3, "a.length", "||", "===");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function inputs_get() {
    let arrays = app_learn_js_array_runs_inputs(
      values,
      program_of,
      wrong_programs_of,
    );
    return arrays;
  }
  function above(root, context) {
    "Last of each run and pushing inside an if remembered, then both together";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_run_last,
      [
        "",
        last + " || a[i] !== a[i + 1]",
        " is ",
        "true",
        " on the last item of each run",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_push_if_e,
      [
        "",
        "b.push(a[i])",
        " inside an ",
        "if",
        " keeps only some of the items",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Suppose we want each run squeezed into one item",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "We push only the last item of each run into ",
      "c",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Runs into one",
    "c.push(a[i]);",
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
