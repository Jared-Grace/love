import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_1 } from "./range_1.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_length } from "./app_learn_js_lesson_array_for_length.mjs";
import { app_learn_js_lesson_for_increment } from "./app_learn_js_lesson_for_increment.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_while_walk() {
  arguments_assert(arguments, 0);
  ("every item of an array with a while: let a = [3, 1, 4]; let i = 0; while (i < a.length) { console.log(a[i]); i++; } writes out 3, 1 and 4");
  ("2026-11-25, at the human's asking, put straight before Stop at the shorter array: until here every loop over an array was a for, and the first while over an array asked two things at once. This one is Every item, of any array written as a while, the way the for lessons showed a for to be a while.");
  ("The inputs are arrays of 2 to 4 numbers from 1 to 9, all different, so a missed or extra item shows.");
  ("The wrong programs are: i <= a.length (one more time round, writing out undefined), i < a.length - 1 (the last item missed), and console.log(i) (the indexes written out, not the items). i++ left out is not one: it never stops.");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = [3, 1, 4];
  function program_with(input, test, logged) {
    "the array, i, then a while asking test, writing out logged and moving i";
    let lines = [
      "let a = [" + input.join(", ") + "];",
      "let i = 0;",
      "while (" + test + ") {",
      "  console.log(" + logged + ");",
      "  i++;",
      "}",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input2) {
    let code2 = program_with(input2, "i < a.length", "a[i]");
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, "i <= a.length", "a[i]");
    let v2 = program_with(input3, "i < a.length - 1", "a[i]");
    let v3 = program_with(input3, "i < a.length", "i");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function input_drawn(size) {
    let list = range_1(9);
    let a = list_shuffle_take(list, size);
    return a;
  }
  function inputs_get() {
    let sizes = [2, 3, 4, 2, 3, 4];
    let inputs = list_map(sizes, input_drawn);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "Every item, of any array and for being a while remembered, then the same loop as a while";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_length,
      [
        "",
        "for (let i = 0; i < a.length; i++)",
        " visits every item of any array",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_for_increment,
      [
        "a ",
        "for",
        " does the same as a ",
        "while",
        " with the start before it and the ",
        "++",
        " at the end of its body",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    ("one thought to a line");
    let lines_said = [
      ["So an array can be walked with a ", "while", " too"],
      ["", "let i = 0;", " comes before the ", "while", ""],
      ["", "i++;", " comes at the end of its body"],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "After ",
      "4",
      ", ",
      "i",
      " is ",
      "3",
      ", which is not less than ",
      "a.length",
      ", so the ",
      "while",
      " stops",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Every item, with a while",
    "while (i < a.length)",
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
