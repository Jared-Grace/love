import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_1 } from "./range_1.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_temp_keep } from "./app_learn_js_lesson_array_temp_keep.mjs";
import { app_learn_js_lesson_array_for_shift } from "./app_learn_js_lesson_array_for_shift.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_shift_first_last() {
  arguments_assert(arguments, 0);
  ("every item one place to the left, the first item going last: let first = a[0]; then a for loop setting a[i] = a[i + 1] and stopping one early, then a[a.length - 1] = first; and console.log(a)");
  ("2026-11-25, at the human's asking: put after Swapping every pair. Keeping an item and Shifting every item are already taught; the one new fact is putting the kept first item at the last index, so nothing is lost. Swapping every pair gives the same array another way; this way keeps one item and sets each place once.");
  ("Each input is four or five different numbers from 1 to 9, in no order. The array is written out whole with console.log(a), so the answer is one line.");
  ("The wrong programs are: the last line left out (the last item twice and the first gone, as in Shifting every item), the kept item put at a[0] in place of the last index, and the item kept after the loop rather than before it, when a[0] has already changed. None has a loop that can run forever. The other wrong answers offered are the array as it was and every item one place to the right.");
  ("The writing is a first draft by Claude 2026-11-25.");
  function program_with(items, keep_after, at) {
    "the array, the first item kept before or after the loop, the shifting loop, the kept item put at at unless at is empty, and the array written out";
    let keep = "let first = a[0];";
    let lines = ["let a = [" + items.join(", ") + "];"];
    if (not(keep_after)) {
      lines.push(keep);
    }
    lines.push("for (let i = 0; i < a.length - 1; i++) {");
    lines.push("  a[i] = a[i + 1];");
    lines.push("}");
    if (keep_after) {
      lines.push(keep);
    }
    if (not_equal(at, "")) {
      lines.push("a[" + at + "] = first;");
    }
    lines.push("console.log(a);");
    let code = list_join_newline(lines);
    return code;
  }
  let last = "a.length - 1";
  function program_of(items2) {
    let code2 = program_with(items2, false, last);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, false, "");
    let v2 = program_with(items3, false, "0");
    let v3 = program_with(items3, true, last);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let unchanged = "[" + items4.join(", ") + "]";
    let v4 = items4.slice(0, -1);
    let right = [items4[subtract(items4.length, 1)]].concat(v4);
    let rotated_right = "[" + right.join(", ") + "]";
    let outputs = [unchanged, rotated_right];
    return outputs;
  }
  function input_drawn(count) {
    let list = range_1(9);
    let items5 = list_shuffle_take(list, count);
    return items5;
  }
  function inputs_get() {
    "six arrays, of four and five numbers three times each";
    let counts = [4, 4, 4, 5, 5, 5];
    let inputs = list_map(counts, input_drawn);
    return inputs;
  }
  function above(root, context) {
    "keeping an item and shifting every item remembered, then the kept first item put last";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_temp_keep,
      ["", "let temp = a[0];", " keeps the first item", ""],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_shift,
      [
        "",
        "a[i] = a[i + 1]",
        " moves every item one place to the left, and the first item is gone",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    let lines_said = [
      ["Keep the first item before the loop, as ", "first", ""],
      ["After the loop, put it at the last index, ", "a.length - 1", ":"],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code3 = program_of([4, 9, 2, 6]);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    let lines_said2 = [
      ["The loop makes ", "a", " into ", "[9, 2, 6, 6]", ""],
      ["Then ", "a[3] = first;", " puts ", "4", " last: ", "[9, 2, 6, 4]", ""],
    ];
    for (let said2 of lines_said2) {
      app_learn_js_div_cycle_code(box_three, said2);
    }
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "First item to the end",
    "a[a.length - 1] = first;",
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
