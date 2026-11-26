import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { multiply } from "./multiply.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_1 } from "./range_1.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_while_walk } from "./app_learn_js_lesson_array_while_walk.mjs";
import { app_learn_js_lesson_while_and } from "./app_learn_js_lesson_while_and.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_while_both_move() {
  arguments_assert(arguments, 0);
  ("two arrays walked together until the shorter runs out: let a = [1, 2, 3]; let b = [10, 20]; let i = 0; let j = 0; while (i < a.length && j < b.length) { console.log(a[i] + b[j]); i++; j++; } writes out 11 and 22");
  ("2026-11-25, at the human's asking, put straight before Smaller first, which added three things at once. This one adds only the while that stops when either array runs out, with i and j both moving every time round, so Smaller first then adds only the if choosing which one moves. It is Two arrays side by side written with a while and two indexes.");
  ("The inputs are a from 1 to 9 and b from 10 to 90 in tens, so each sum shows which two items were added; one array is longer, a in half of them and b in the other half.");
  ("The wrong programs are: || in place of && (the shorter one runs out and undefined is added, writing out NaN), only i < a.length asked, and only j < b.length asked. Each of the last two goes wrong only when the other array is the shorter one, which is why both kinds of input are drawn.");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = [
    [1, 2, 3],
    [10, 20],
  ];
  function program_with(input, test) {
    "the arrays, i and j, then a while asking test, adding a[i] and b[j] and moving both";
    let lines = [
      "let a = [" + input[0].join(", ") + "];",
      "let b = [" + input[1].join(", ") + "];",
      "let i = 0;",
      "let j = 0;",
      "while (" + test + ") {",
      "  console.log(a[i] + b[j]);",
      "  i++;",
      "  j++;",
      "}",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input2) {
    let code2 = program_with(input2, "i < a.length && j < b.length");
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, "i < a.length || j < b.length");
    let v2 = program_with(input3, "i < a.length");
    let v3 = program_with(input3, "j < b.length");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function times_ten(n) {
    let ten = multiply(n, 10);
    return ten;
  }
  function input_drawn(a_longer) {
    "a from 1 to 9 and b in tens, the longer one 3 or 4 long and the shorter 1 or 2 long";
    let lengths = list_shuffle_take([1, 2], 1);
    let short = lengths[0];
    let long = short + list_shuffle_take([1, 2], 1)[0];
    let list = range_1(9);
    let a = list_shuffle_take(list, a_longer ? long : short);
    let list2 = range_1(9);
    let b = list_shuffle_take_map(list2, a_longer ? short : long, times_ten);
    let input5 = [a, b];
    return input5;
  }
  function inputs_get() {
    let kinds = [true, false, true, false, true, false];
    let inputs = list_map(kinds, input_drawn);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "Every item, with a while and while with && remembered, then i and j both moving";
    "2026-11-25, at the human's asking: Every item, with a while now comes just before, so it is remembered in place of Two arrays side by side, and the lines say j is the new, second index.";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_while_walk,
      [
        "",
        "while (i < a.length)",
        " walks every item of ",
        "a",
        ", with ",
        "i++;",
        " at the end of its body",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_while_and,
      [
        "a ",
        "while",
        " asking ",
        "&&",
        " keeps going only while both sides are ",
        "true",
        "",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    ("one thought to a line");
    let lines_said = [
      ["As before, ", "i", " is where we are in ", "a", ""],
      [
        "Now there is a second array, ",
        "b",
        ", and ",
        "j",
        " is where we are in it",
      ],
      ["Each time round, both ", "i", " and ", "j", " move"],
      [
        "The ",
        "while",
        " stops as soon as either array runs out, so it stops at the shorter array",
      ],
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
      "22",
      ", ",
      "j",
      " is ",
      "2",
      ", past the end of ",
      "b",
      ", so the ",
      "while",
      " stops and ",
      "3",
      " is never added",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Stop at the shorter array",
    "i < a.length && j < b.length",
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
