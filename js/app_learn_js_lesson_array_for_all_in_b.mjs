import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { equal } from "./equal.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_array_pair_sized } from "./app_learn_js_array_pair_sized.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_found } from "./app_learn_js_lesson_array_for_found.mjs";
import { app_learn_js_lesson_array_for_in_a_not_b } from "./app_learn_js_lesson_array_for_in_a_not_b.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_all_in_b() {
  arguments_assert(arguments, 0);
  ("whether every item of a is in b: let all = true; for (...a) { if (!b.includes(a[i])) { all = false; } } console.log(all);");
  ("2026-11-25, at the human's asking, after In one only. The one new fact is Is joy here? turned round: the value starts true, and the if only ever sets it to false, so one item missing from b is enough to make it false, and nothing sets it back.");
  ("The inputs are three numbers in a and three or four in b: half the time b holds all of a, otherwise one or two of them. The wrong programs are: all starting false (always false), an else setting all back to true (only the last item decides) and the opposite question, starting false and set true when b has a[i] (true when any one item is in b). Each input has at least one wrong program that writes out the other answer: when the answer is true, starting false; when it is false, any one item, since b always holds one of a.");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = [
    [5, 2, 8],
    [8, 1, 5, 2],
  ];
  function program_with(input, start, asked, set, otherwise) {
    "let a, let b, let all = start; a loop setting all = set inside if (asked), with else { all = otherwise; } unless otherwise is empty; console.log(all);";
    let head = [
      "let a = " + js_code_array(input[0]) + ";",
      "let b = " + js_code_array(input[1]) + ";",
      "let all = " + start + ";",
      "for (let i = 0; i < a.length; i++) {",
      "  if (" + asked + ") {",
      "    all = " + set + ";",
    ];
    let tail = equal(otherwise, "")
      ? ["  }"]
      : ["  } else {", "    all = " + otherwise + ";", "  }"];
    let lines = [...head, ...tail, "}", "console.log(all);"];
    let code = list_join_newline(lines);
    return code;
  }
  let missing = "!b.includes(a[i])";
  function program_of(input2) {
    let code2 = program_with(input2, "true", missing, "false", "");
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, "false", missing, "false", "");
    let v2 = program_with(input3, "true", missing, "false", "true");
    let v3 = program_with(input3, "false", "b.includes(a[i])", "true", "");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function inputs_get() {
    "six [a, b]: a three numbers; b holds all of a in half of them, one or two of a in the others";
    let shapes = [
      [3, 4, 3],
      [3, 3, 2],
      [3, 3, 3],
      [3, 4, 1],
      [3, 4, 3],
      [3, 4, 2],
    ];
    let pairs = list_map(shapes, app_learn_js_array_pair_sized);
    let shuffled = list_shuffle_take(pairs, 6);
    return shuffled;
  }
  function above(root, context) {
    "Is joy here? and In a, not in b remembered, then a value that starts true and only ever turns false";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_found,
      [
        "",
        "found",
        " starts ",
        "false",
        ", and the ",
        "if",
        " only ever sets it to ",
        "true",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_in_a_not_b,
      [
        "",
        "!b.includes(a[i])",
        " is ",
        "true",
        " when ",
        "b",
        " does not have ",
        "a[i]",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Suppose we want to know if every item of ",
      "a",
      " is in ",
      "b",
    ]);
    app_learn_js_div_cycle_code(box_three, ["", "all", " starts ", "true"]);
    ("2026-11-25, the human's own wording, one thought to a line");
    app_learn_js_div_cycle_code(box_three, [
      "But if there is one item in ",
      "a",
      " that ",
      "b",
      " does not have,",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "Then the ",
      "if",
      " sets ",
      "all",
      " to ",
      "false",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "b",
      " has ",
      "5",
      ", ",
      "2",
      " and ",
      "8",
      ", so ",
      "all",
      " is never set to ",
      "false",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "All in b?",
    "all = false;",
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
