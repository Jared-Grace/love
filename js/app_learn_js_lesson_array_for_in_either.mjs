import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_push_both } from "./app_learn_js_lesson_array_for_push_both.mjs";
import { app_learn_js_lesson_array_for_unique } from "./app_learn_js_lesson_array_for_unique.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
import { app_learn_js_array_pairs_overlap } from "./app_learn_js_array_pairs_overlap.mjs";
export function app_learn_js_lesson_array_for_in_either() {
  arguments_assert(arguments, 0);
  ("each item in either array, once: let a = [3, 5, 8, 2]; let b = [5, 9, 2, 6]; let c = []; for (...a) { if (!c.includes(a[i])) { c.push(a[i]); } } for (...b) { if (!c.includes(b[i])) { c.push(b[i]); } } console.log(c); writes out [3, 5, 8, 2, 9, 6]");
  ("2026-11-25, at the human's asking, after In a, not in b. The human asked whether it is In both with || for &&; it is not - In both needs no && - and a || would have to loop over every value there could be. It is Two arrays into one with the question of Each item once before each push: two loops one after the other, never one inside the other.");
  ("The inputs are those of In both - see ",
    fn_name("app_learn_js_array_pairs_overlap"),
    ". Each array holds different numbers, so the question in the loop over a never leaves anything out here; it is kept so the two loops read the same and the program works for any a.");
  ("The wrong programs are: the loop over b with no if (the items in both are pushed twice), !b.includes(b[i]) in the loop over b (every b[i] is in b, so a copy of a) and c.includes in both loops (c starts empty, so nothing is ever pushed).");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = [
    [3, 5, 8, 2],
    [5, 9, 2, 6],
  ];
  function loop_lines(name, asked) {
    "a for loop over the array called name, pushing each item into c, inside if (asked) unless asked is empty";
    let item = name + "[i]";
    let head = ["for (let i = 0; i < " + name + ".length; i++) {"];
    let push = "c.push(" + item + ");";
    let middle = equal(asked, "")
      ? ["  " + push]
      : ["  if (" + asked + item + ")) {", "    " + push, "  }"];
    let a = list_concat(head, middle);
    let lines = list_concat(a, ["}"]);
    return lines;
  }
  function program_with(input, asked_a, asked_b) {
    "let a = ...; let b = ...; let c = []; the loop over a, then the loop over b; console.log(c);";
    let head = [
      "let a = " + js_code_array(input[0]) + ";",
      "let b = " + js_code_array(input[1]) + ";",
      "let c = [];",
    ];
    let a2 = loop_lines("a", asked_a);
    let b = loop_lines("b", asked_b);
    let loops = list_concat(a2, b);
    let a3 = list_concat(head, loops);
    let lines2 = list_concat(a3, ["console.log(c);"]);
    let code = list_join_newline(lines2);
    return code;
  }
  let not_in_c = "!c.includes(";
  function program_of(input2) {
    let code2 = program_with(input2, not_in_c, not_in_c);
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, not_in_c, "");
    let v2 = program_with(input3, not_in_c, "!b.includes(");
    let v3 = program_with(input3, "c.includes(", "c.includes(");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "Each item once and Two arrays into one remembered, then both together";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_push_both,
      [
        "two loops, one after the other, push ",
        "a",
        " and then ",
        "b",
        " into ",
        "c",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_unique,
      [
        "",
        "if (!b.includes(a[i]))",
        " pushes each item into ",
        "b",
        " only once",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Suppose we want each item that is in ",
      "a",
      " or in ",
      "b",
      ", once",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "We push ",
      "a",
      " and then ",
      "b",
      " into ",
      "c",
      ", but before each push we ask if ",
      "c",
      " has it already",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "!c.includes(b[i])",
      " is ",
      "true",
      " when ",
      "c",
      " does not have ",
      "b[i]",
      " yet, so only then is it pushed:",
    ]);
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "5",
      " and ",
      "2",
      " are in both ",
      "a",
      " and ",
      "b",
      ", but are pushed only once",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "In either",
    "if (!c.includes(b[i]))",
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs({
    name_id,
    above,
    inputs_get: app_learn_js_array_pairs_overlap,
    program_of,
    wrong_programs_of,
    wrong_outputs_of,
  });
  return lesson;
}
