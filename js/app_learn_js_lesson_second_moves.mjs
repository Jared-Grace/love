import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_second_numbers } from "./app_learn_js_second_numbers.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_temp_keep } from "./app_learn_js_lesson_array_temp_keep.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_second_generic } from "./app_learn_js_lesson_second_generic.mjs";
export function app_learn_js_lesson_second_moves() {
  arguments_assert(arguments, 0);
  ("one number moving the top down: let big = 8; let second = 5; let n = 9; if (n > big) { second = big; big = n; } writes out 9 then 8");
  ("The second of four lessons on the second biggest number, approved by the human 2026-11-20. A new top pushes the old top down to second, and the old top must be saved into second before big is written over, as Keeping an item saved an item into temp. Four of the six questions have n above big; in the other two the if does not run and nothing changes.");
  ("The wrong programs are the two lines in the other order (big is written over first, so second gets the new top too), second = big; left out (second keeps its old number), and second = n; (second gets the new top). One more, n < big, was added by Claude 2026-11-20 beyond the three approved, because when n is below big the if does not run and the first three write out the same as the right program. The extra wrong answers are the two numbers in the other order and the numbers before the if.");
  ("The writing is a first draft by Claude 2026-11-20.");
  function program_of(input, way) {
    let code2 = js_code_let_statement("big", input.big + "");
    let code3 = js_code_let_statement("second", input.second + "");
    let code4 = js_code_let_statement("n", input.n + "");
    let lets = [code2, code3, code4];
    let bodies = {
      right: ["second = big;", "big = n;"],
      swapped: ["big = n;", "second = big;"],
      no_move: ["big = n;"],
      second_n: ["second = n;", "big = n;"],
      less: ["second = big;", "big = n;"],
    };
    let condition = equal(way, "less") ? "n < big" : "n > big";
    let if_lines = js_code_if_lines_multiple(condition, bodies[way]);
    let statement = js_code_console_log_statement("big");
    let statement2 = js_code_console_log_statement("second");
    let logs = [statement, statement2];
    let lines = list_concat_multiple([lets, if_lines, logs]);
    let code = list_join_newline(lines);
    return code;
  }
  function inputs_get() {
    "six sets of numbers: n above big four times, between the two once, below both once";
    let kinds = ["above", "above", "above", "above", "between", "below"];
    let inputs = list_map(kinds, app_learn_js_second_numbers);
    return inputs;
  }
  function extra_answers(input2) {
    "the two numbers after a new top in the other order, and the numbers before the if";
    let joined = list_join_newline([input2.big, input2.n]);
    let joined2 = list_join_newline([input2.big, input2.second]);
    let joined3 = list_join_newline([input2.n, input2.big]);
    let answers = [joined, joined2, joined3];
    return answers;
  }
  function above(root, context, example) {
    "keeping an item remembered, then the old top moving down";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_temp_keep,
      [
        "",
        "let temp = a[0];",
        " saves an item before ",
        "a[0]",
        " is written over",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "big",
      " is the top number and ",
      "second",
      " the one below it. When ",
      "n",
      " is a new top, the old top moves down to second. ",
      "second = big;",
      " saves the old top first, then ",
      "big = n;",
      " writes over it:",
    ]);
    example(box_two, {
      big: 8,
      second: 5,
      n: 9,
    });
    app_learn_js_div_cycle_code(box_two, [
      "When ",
      "n",
      " is not bigger than ",
      "big",
      ", the ",
      "if",
      " does not run and nothing changes:",
    ]);
    example(box_two, {
      big: 8,
      second: 5,
      n: 3,
    });
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Second biggest: moving down",
    "second = big;",
  );
  let lesson = app_learn_js_lesson_second_generic({
    name_id,
    above,
    inputs_get,
    program_of,
    ways: ["right", "swapped", "no_move", "second_n", "less"],
    extra_answers,
  });
  return lesson;
}
