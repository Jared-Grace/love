import { math_min } from "./math_min.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_1 } from "./range_1.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_smallest } from "./app_learn_js_lesson_array_for_smallest.mjs";
import { app_learn_js_lesson_array_for_push_total } from "./app_learn_js_lesson_array_for_push_total.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_rises() {
  arguments_assert(arguments, 0);
  ("every rise from the smallest so far: small keeps the smallest so far, let rise = a[i] - small; and rises.push(rise), then console.log(rises)");
  ("2026-11-26, at the human's asking, just before Biggest rise, so that lesson only adds best. Smallest number already keeps the smallest so far and Keep each total already pushes a running value each time round; the new fact is a value worked out from the smallest so far. A rise of 0 is where a new smallest was just found.");
  ("Each input is five or six different numbers from 1 to 9, drawn again until a new smallest comes after the first number and some rise is above 0, so the wrong programs give other answers.");
  ("The wrong programs are: the rise worked out and pushed before the if (below 0 at each new smallest), small starting at 0 (the rise from 0, so each number itself), and a[i] - a[i - 1] (the change from the number before, not from the smallest so far). Each loops over a.length, so all stop. The other wrong answer offered is the rises with the first number's 0 put in front, as if the loop started at 0.");
  ("The writing is a first draft by Claude 2026-11-26.");
  function program_with(items, small_start, rise_first, rise_of) {
    "the array, small and an empty rises, the loop keeping small and pushing each rise, and rises written out";
    let rise_lines = ["  let rise = " + rise_of + ";", "  rises.push(rise);"];
    let if_lines = ["  if (a[i] < small) {", "    small = a[i];", "  }"];
    let body = rise_first
      ? rise_lines.concat(if_lines)
      : if_lines.concat(rise_lines);
    let lines = [
      "let a = [" + items.join(", ") + "];",
      "let small = " + small_start + ";",
      "let rises = [];",
      "for (let i = 1; i < a.length; i++) {",
    ]
      .concat(body)
      .concat(["}", "console.log(rises);"]);
    let code = list_join_newline(lines);
    return code;
  }
  let rise_right = "a[i] - small";
  function program_of(items2) {
    let code2 = program_with(items2, "a[0]", false, rise_right);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, "a[0]", true, rise_right);
    let v2 = program_with(items3, "0", false, rise_right);
    let v3 = program_with(items3, "a[0]", false, "a[i] - a[i - 1]");
    let programs = [v, v2, v3];
    return programs;
  }
  function rises_of(items4) {
    let small = items4[0];
    let rises = [];
    for (let i = 1; less_than(i, items4.length); i++) {
      small = math_min(small, items4[i]);
      let difference = subtract(items4[i], small);
      rises.push(difference);
    }
    return rises;
  }
  function wrong_outputs_of(items5) {
    let v4 = rises_of(items5);
    let front = [0].concat(v4);
    let outputs = ["[" + front.join(", ") + "]"];
    return outputs;
  }
  function fits(items6) {
    let left = Math.min(...items6);
    let later_smallest = not_equal(left, items6[0]);
    let a = Math.max(...rises_of(items6));
    let some_rise = greater_than(a, 0);
    let r = later_smallest && some_rise;
    return r;
  }
  function input_drawn(count) {
    "count different numbers, drawn again until a later smallest and some rise";
    let list = range_1(9);
    let items7 = list_shuffle_take(list, count);
    while (not(fits(items7))) {
      let list2 = range_1(9);
      items7 = list_shuffle_take(list2, count);
    }
    return items7;
  }
  function inputs_get() {
    "six arrays, of five and six numbers three times each";
    let counts = [5, 5, 5, 6, 6, 6];
    let inputs = list_map(counts, input_drawn);
    return inputs;
  }
  function above(root, context) {
    "smallest so far and pushing a running value remembered, then each rise from the smallest so far";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_smallest,
      ["", "if (a[i] < small) { small = a[i]; }", " keeps the smallest so far"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_push_total,
      ["", "b.push(total);", " keeps each total"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    let lines_said = [
      ["", "small", " is the smallest number so far", ""],
      ["", "rise", " is how far ", "a[i]", " is above ", "small", ""],
      ["Push each ", "rise", " to ", "rises", ":"],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code3 = program_of([7, 2, 5, 1, 4]);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    let lines_said2 = [
      ["", "2", " is a new smallest, so its rise is ", "0", ""],
      ["", "5 - 2", " is ", "3", ""],
      ["", "1", " is a new smallest, so its rise is ", "0", ""],
      ["", "4 - 1", " is ", "3", ""],
    ];
    for (let said2 of lines_said2) {
      app_learn_js_div_cycle_code(box_three, said2);
    }
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Each rise",
    "rises.push(rise);",
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
