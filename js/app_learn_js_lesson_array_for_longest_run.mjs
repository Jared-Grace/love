import { list_includes_not } from "./list_includes_not.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { boolean_random } from "./boolean_random.mjs";
import { list_without } from "./list_without.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_run_so_far } from "./app_learn_js_lesson_array_for_run_so_far.mjs";
import { app_learn_js_lesson_array_for_biggest } from "./app_learn_js_lesson_array_for_biggest.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_longest_run() {
  arguments_assert(arguments, 0);
  ("the most times in a row any number comes up: let run = 1; let longest = 1; for (let i = 0; i < a.length - 1; i++) { if (a[i] === a[i + 1]) { run++; } else { run = 1; } if (run > longest) { longest = run; } } console.log(longest); writes out 3 for [1, 2, 2, 2, 3, 3]");
  ("2026-11-24, at the human's asking (longest run, agreed in the plan of that day, after Run so far). The run of Run so far, kept the way Biggest number kept big: if (run > longest) { longest = run; }. Nothing in it is new; it is the two put one after the other in the same loop.");
  ("The arrays hold 1, 2 and 3, each next number the same as the one before half the time, 5 or 6 numbers long. An array is kept only when console.log(run) and leaving out the else both write out something other than the answer. That needs the longest run before the last one, and two runs apart, which 4 numbers can never hold, so no array is shorter than 5. run = 0 is offered only where it differs, since an array where all three differ needs 6.");
  ("The wrong programs are: console.log(run) (the last run, not the longest), no else (every pair that is the same counted, even apart) and run = 0 in the else (each run after the first one short).");
  ("The writing is a first draft by Claude 2026-11-24.");
  let example_input = [1, 2, 2, 2, 3, 3];
  let values = [1, 2, 3];
  function program_with(items, else_lines, logged) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let lines = [
      "let a = " + array + ";",
      "let run = 1;",
      "let longest = 1;",
      "for (let i = 0; i < a.length - 1; i++) {",
      "  if (a[i] === a[i + 1]) {",
      "    run++;",
    ];
    for (let line of else_lines) {
      lines.push(line);
    }
    let rest = [
      "  }",
      "  if (run > longest) {",
      "    longest = run;",
      "  }",
      "}",
      "console.log(" + logged + ");",
    ];
    for (let line2 of rest) {
      lines.push(line2);
    }
    let code = list_join_newline(lines);
    return code;
  }
  let else_right = ["  } else {", "    run = 1;"];
  function program_of(items2) {
    let code2 = program_with(items2, else_right, "longest");
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, else_right, "run");
    let v2 = program_with(items3, [], "longest");
    let v3 = program_with(items3, ["  } else {", "    run = 0;"], "longest");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function every_wrong_differs(items5) {
    "whether console.log(run) and the program with no else both write out something other than the answer; run = 0 is left out, because an array where it differs too needs 6 numbers or more";
    let code4 = program_of(items5);
    let answer = eval_console_log_lines(code4);
    let programs3 = wrong_programs_of(items5);
    let firsts = [programs3[0], programs3[1]];
    let outputs = list_map(firsts, eval_console_log_lines);
    let n = list_includes_not(outputs, answer);
    return n;
  }
  function array_of(size) {
    "numbers 1 to 3, each next the same as the one before half the time, tried again until every wrong program writes out something else";
    while (true) {
      let r2 = list_random_item(values);
      let items6 = [r2];
      while (less_than(items6.length, size)) {
        let last = items6[subtract(items6.length, 1)];
        let next = last;
        let b = boolean_random();
        if (not(b)) {
          let list = list_without(values, last);
          next = list_random_item(list);
        }
        items6.push(next);
      }
      if (every_wrong_differs(items6)) {
        return items6;
      }
    }
  }
  function inputs_get() {
    let sizes = [5, 6, 5, 6, 5, 6];
    let arrays = list_map(sizes, array_of);
    return arrays;
  }
  function above(root, context) {
    "the run so far and the biggest kept remembered, then the longest run kept";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_run_so_far,
      ["", "run", " is how many times in a row the number has come up so far"],
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
      "run",
      " the same way gives the longest run, the most times in a row any number comes up:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Longest run",
    "longest = run;",
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
