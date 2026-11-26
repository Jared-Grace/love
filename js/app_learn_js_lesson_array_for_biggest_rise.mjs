import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { subtract } from "./subtract.mjs";
import { math_min } from "./math_min.mjs";
import { math_max } from "./math_max.mjs";
import { range_1 } from "./range_1.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { equal } from "./equal.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_rises } from "./app_learn_js_lesson_array_for_rises.mjs";
import { app_learn_js_lesson_array_for_biggest } from "./app_learn_js_lesson_array_for_biggest.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_biggest_rise() {
  arguments_assert(arguments, 0);
  ("the biggest rise from a number to one after it: small is the smallest so far, let rise = a[i] - small; and best keeps the biggest rise, then console.log(best)");
  ("2026-11-26, at the human's asking, after Which numbers are missing?. Smallest number already keeps the smallest so far and Working out in a loop already names a value worked out inside the loop; the new fact is keeping two running values in one loop, the second worked out from the first. The rise is named once, at the human's asking, rather than a[i] - small written twice. Later the same day, at the human's asking, Each rise put just before it, pushing every rise into an array, so this lesson only adds best, kept the way Biggest number keeps big.");
  ("Each input is five or six different numbers from 1 to 9, in no order, drawn again until some number rises after a smaller one, so best is never 0.");
  ("The wrong programs are: small starting at 0 (the rise from 0, so the biggest number), the rise worked out as small - a[i] (never above 0, so 0), and best = a[i] in place of best = rise. Each loops over a.length, so all stop. The other wrong answer offered is the biggest minus the smallest, which ignores which comes first.");
  ("The writing is a first draft by Claude 2026-11-26.");
  function program_with(items, small_start, rise_of, best_to) {
    "the array, small and best, the loop keeping small and best, and best written out";
    let lines = [
      "let a = [" + items.join(", ") + "];",
      "let small = " + small_start + ";",
      "let best = 0;",
      "for (let i = 1; i < a.length; i++) {",
      "  if (a[i] < small) {",
      "    small = a[i];",
      "  }",
      "  let rise = " + rise_of + ";",
      "  if (rise > best) {",
      "    best = " + best_to + ";",
      "  }",
      "}",
      "console.log(best);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  let rise_right = "a[i] - small";
  function program_of(items2) {
    let code2 = program_with(items2, "a[0]", rise_right, "rise");
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, "0", rise_right, "rise");
    let v2 = program_with(items3, "a[0]", "small - a[i]", "rise");
    let v3 = program_with(items3, "a[0]", rise_right, "a[i]");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let left = Math.max(...items4);
    let right = Math.min(...items4);
    let spread = subtract(left, right);
    let v4 = String(spread);
    let outputs = [v4];
    return outputs;
  }
  function best_of(items5) {
    let small = items5[0];
    let best = 0;
    for (let x of items5) {
      small = math_min(small, x);
      let b = subtract(x, small);
      best = math_max(best, b);
    }
    return best;
  }
  function input_drawn(count) {
    "count different numbers, drawn again until one rises after a smaller one";
    let list = range_1(9);
    let items6 = list_shuffle_take(list, count);
    while (equal(best_of(items6), 0)) {
      let list2 = range_1(9);
      items6 = list_shuffle_take(list2, count);
    }
    return items6;
  }
  function inputs_get() {
    "six arrays, of five and six numbers three times each";
    let counts = [5, 5, 5, 6, 6, 6];
    let inputs = list_map(counts, input_drawn);
    return inputs;
  }
  function above(root, context) {
    "smallest so far and a value worked out in a loop remembered, then the rise from the smallest so far";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_rises,
      [
        "",
        "let rise = a[i] - small;",
        " is how far ",
        "a[i]",
        " is above the smallest so far",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_biggest,
      ["", "if (a[i] > big) { big = a[i]; }", " keeps the biggest so far"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    let lines_said = [
      ["We look for the biggest rise from a number to one after it", ""],
      ["", "best", " keeps the biggest ", "rise", " so far:"],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code3 = program_of([7, 2, 5, 1, 4]);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    let lines_said2 = [
      ["From ", "2", " up to ", "5", " is ", "3", ""],
      ["From ", "1", " up to ", "4", " is also ", "3", ""],
      ["", "7", " comes first, so ", "7 - 1", " is not a rise", ""],
    ];
    for (let said2 of lines_said2) {
      app_learn_js_div_cycle_code(box_three, said2);
    }
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Biggest rise",
    "let rise = a[i] - small;",
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
