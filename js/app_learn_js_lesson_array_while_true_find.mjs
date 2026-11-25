import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_while_find } from "./app_learn_js_lesson_array_while_find.mjs";
import { app_learn_js_lesson_array_for_break } from "./app_learn_js_lesson_array_for_break.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_while_true_find() {
  arguments_assert(arguments, 0);
  ("a loop that stops only at break: let i = 0; while (true) { if (a[i] === 7) { break; } i++; } console.log(i); - true never turns false, so break is the only way out");
  ("2026-11-25, at the human's asking: the first of three lessons ending in two numbers that add up to 10, which loops with while (true) and stops with break. while (true) was never taught to a learner before; it appeared only in the code drawing lesson inputs. The search is Find with a while's, so the one new idea is where the stopping moved to.");
  ("Every input holds a 7, because without one this program never stops; the lesson says so.");
  ("The wrong programs are: !== in place of === (it stops at the first item that is not 7) and writing out a[i] in place of i. Both stop: the first stops at index 0 or 1, the second is the right loop. A wrong program that moves i before the if, or starts i at 1, is left out on purpose: with a single 7 at index 0 it would never stop. The other wrong answer offered is a.length, where Find with a while stops when there is no 7.");
  ("The writing is a first draft by Claude 2026-11-25.");
  let others = [1, 2, 3, 4, 5, 6, 8, 9];
  function program_with(items, test, logged) {
    "the array, i at 0, then a while (true) that breaks when test, moving i, then writing out logged";
    let lines = [
      "let a = [" + items.join(", ") + "];",
      "let i = 0;",
      "while (true) {",
      "  if (" + test + ") {",
      "    break;",
      "  }",
      "  i++;",
      "}",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  let test_right = "a[i] === 7";
  function program_of(items2) {
    let code2 = program_with(items2, test_right, "i");
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, "a[i] !== 7", "i");
    let v2 = program_with(items3, test_right, "a[i]");
    let programs = [v, v2];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [String(items4.length)];
    return r;
  }
  function input_drawn(places) {
    "three or four other numbers, with 7 put at each of places";
    let count = list_shuffle_take([3, 4], 1)[0];
    let items5 = list_shuffle_take(others, count);
    for (let place of places) {
      items5.splice(place, 0, 7);
    }
    return items5;
  }
  function inputs_get() {
    "7 first, in the middle, at the end, and twice - never missing";
    let kinds = [[0], [1], [2], [3], [1, 3], [0, 2]];
    let inputs = list_map(kinds, input_drawn);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "Find with a while and break remembered, then the while that only break stops";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_while_find,
      [
        "",
        "while (i < a.length && a[i] !== 7)",
        " stops at the first ",
        "7",
        "",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_break,
      ["", "break;", " stops a loop", ""],
    );
    let box_three = app_learn_js_container_light_blue(root);
    let lines_said = [
      [
        "",
        "while (true)",
        " never stops by itself: ",
        "true",
        " is always ",
        "true",
        "",
      ],
      ["Only ", "break;", " stops it:"],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code3 = program_of([4, 9, 7, 2]);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "When ",
      "i",
      " is ",
      "2",
      ", ",
      "a[2]",
      " is ",
      "7",
      ", so ",
      "break;",
      " runs and the loop stops",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "There must be a ",
      "7",
      ": with none, nothing runs ",
      "break;",
      " and the loop never stops",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Loop until break",
    "while (true)",
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
