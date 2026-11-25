import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_array_runs_inputs } from "./app_learn_js_array_runs_inputs.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_run_so_far } from "./app_learn_js_lesson_array_for_run_so_far.mjs";
import { app_learn_js_lesson_array_for_run_last } from "./app_learn_js_lesson_array_for_run_last.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_each_run() {
  arguments_assert(arguments, 0);
  ('each run written out once, with its item and its length: let run = 1; for (let i = 0; i < a.length; i++) { if (i === a.length - 1 || a[i] !== a[i + 1]) { console.log(a[i] + ": " + run); run = 1; } else { run++; } } writes out x: 2 and y: 3 for ["x", "x", "y", "y", "y"]');
  ("2026-11-25, at the human's asking, whose own draft looped from 1 comparing a[i] with a[i - 1]. That draft wrote out nothing for a run of one, so the run's end is tested first instead, with the guard of Last of each run, and run counts up in the else as Run so far did. A colon sits between the item and its length so 1: 2 cannot be read as one number or as a sum.");
  ("The arrays hold the letters x, y and z, 4 to 6 long, each next the same as the one before half the time. An array is kept only when every wrong program writes out something other than the answer.");
  ("The wrong programs are: no run = 1; after the log (each length goes on counting from the run before), let run = 0 (every length one short) and the loop stopping one early with i < a.length - 1 (the last run is never written out).");
  ("The writing is a first draft by Claude 2026-11-25.");
  ("2026-11-25, at the human's asking: the items are letters, so in what is written out the letter is the item and the number is how long its run is, read at a glance - x: 2 rather than 1: 2. The letters are x, y and z, never a or i, which are names in the program. Not picked: numbers, the first draft, where an item and a count look alike");
  let example_input = ["x", "x", "y", "y", "y"];
  let values = ["x", "y", "z"];
  let logged = 'a[i] + ": " + run';
  function program_with(items, start, bound, reset) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let lines = [
      "let a = " + array + ";",
      "let run = " + start + ";",
      "for (let i = 0; i < " + bound + "; i++) {",
      "  if (i === a.length - 1 || a[i] !== a[i + 1]) {",
      "    console.log(" + logged + ");",
    ];
    if (reset) {
      lines.push("    run = 1;");
    }
    lines.push("  } else {");
    lines.push("    run++;");
    lines.push("  }");
    lines.push("}");
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(items2, "1", "a.length", true);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, "1", "a.length", false);
    let v2 = program_with(items3, "0", "a.length", true);
    let v3 = program_with(items3, "1", "a.length - 1", true);
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
    "the run counted and the last of each run found, remembered; then both together";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_run_so_far,
      ["", "run++;", " counts the run, and ", "run = 1;", " starts a new one"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_run_last,
      [
        "",
        "i === a.length - 1 || a[i] !== a[i + 1]",
        " is ",
        "true",
        " on the last item of each run",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "On the last item of a run, ",
      "console.log(" + logged + ");",
      " writes out the item and how long its run was, then ",
      "run = 1;",
      " starts the next run. Each run is written out once:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Each run once",
    logged,
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
