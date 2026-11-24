import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { boolean_random } from "./boolean_random.mjs";
import { list_without } from "./list_without.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_count_doubled } from "./app_learn_js_lesson_array_for_count_doubled.mjs";
import { app_learn_js_lesson_array_for_even_odd } from "./app_learn_js_lesson_array_for_even_odd.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_run_so_far() {
  arguments_assert(arguments, 0);
  ("how many times in a row the number so far has come up: let run = 1; console.log(run); then for (let i = 0; i < a.length - 1; i++) { if (a[i] === a[i + 1]) { run++; } else { run = 1; } console.log(run); } writes out 1, 2, 1, 2 and 3 for [1, 1, 2, 2, 2]");
  ("2026-11-24, at the human's asking (run so far, agreed in the plan of that day, leading to the longest run). The pair test and the count of Doubled words counted, and the else of Evens and odds; the one new fact is that the else starts the count again, run = 1, so the count is of the numbers in a row rather than of the whole array. The plan wrote a[i] === a[i - 1] from i = 1; the loop that stops one early and reads a[i + 1] gives the same numbers and is the shape every neighbour lesson here already uses, so the first number's 1 is written out before the loop.");
  ("The arrays hold 1, 2 and 3, each next number the same as the one before half the time. Every array has a number repeated and, after it, a number that changes, so leaving out the else, or starting again at 0, always writes out something else. Sizes 3, 4 and 5, so the step-by-step quiz has short loops to draw.");
  ("The wrong programs are: no else (the count never starts again), run = 0 in the else (forgetting the number that changed is itself one in a row) and let run = 0 (every count one short).");
  ("The writing is a first draft by Claude 2026-11-24.");
  let example_input = [1, 1, 2, 2, 2];
  let values = [1, 2, 3];
  function repeat_then_change(items) {
    "whether a number repeats and, somewhere after that, a number changes";
    let repeated = false;
    for (let i = 0; less_than(i, subtract(items.length, 1)); i++) {
      if (equal(items[i + 1], items[i])) {
        repeated = true;
      } else if (repeated) {
        return true;
      }
    }
    return false;
  }
  function array_of(size) {
    "numbers 1 to 3, each next the same as the one before half the time, tried again until one repeats and then one changes";
    let r2 = list_random_item(values);
    let items = [r2];
    while (less_than(items.length, size)) {
      let last = items[subtract(items.length, 1)];
      let same = boolean_random();
      let list = list_without(values, last);
      let next = same ? last : list_random_item(list);
      items.push(next);
    }
    if (repeat_then_change(items)) {
      return items;
    }
    let again = array_of(size);
    return again;
  }
  function inputs_get() {
    let sizes = [3, 4, 3, 4, 5, 5];
    let arrays = list_map(sizes, array_of);
    return arrays;
  }
  function program_with(items2, start, else_lines) {
    let codes = list_map(items2, json_to);
    let array = js_code_array(codes);
    let top = [
      "let a = " + array + ";",
      "let run = " + start + ";",
      "console.log(run);",
      "for (let i = 0; i < a.length - 1; i++) {",
      "  if (a[i] === a[i + 1]) {",
      "    run++;",
    ];
    let bottom = ["  }", "  console.log(run);", "}"];
    let a = list_concat(top, else_lines);
    let lines = list_concat(a, bottom);
    let code = list_join_newline(lines);
    return code;
  }
  let else_right = ["  } else {", "    run = 1;"];
  function program_of(items3) {
    let code2 = program_with(items3, "1", else_right);
    return code2;
  }
  function wrong_programs_of(items4) {
    let v = program_with(items4, "1", []);
    let v2 = program_with(items4, "1", ["  } else {", "    run = 0;"]);
    let v3 = program_with(items4, "0", else_right);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items5) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "the pair count and the else remembered, then the count started again";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_count_doubled,
      [
        "",
        "if (a[i] === a[i + 1]) { count++; }",
        " counts the pairs side by side that are the same",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_even_odd,
      ["", "else", " runs when the if does not"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    ("2026-11-25, the human's own wording: what a run is, said here where a run is first met, rather than in Last of each run, which first used the word");
    html_div_text(
      box_three,
      "A run is one or more items in a row that are the same item",
    );
    app_learn_js_div_cycle_code(box_three, [
      "For example for ",
      "[1, 1, 1, 3, 3]",
      " there are two runs: ",
      "1, 1, 1",
      " and ",
      "3, 3",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "When the next number is different, ",
      "run = 1;",
      " resets the ",
      "run",
      " counter to 1. So ",
      "run",
      " is how many times in a row the number has come up so far:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Run so far",
    "run = 1;",
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
