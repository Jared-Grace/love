import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_includes } from "./app_learn_js_lesson_array_includes.mjs";
import { app_learn_js_lesson_array_for_break } from "./app_learn_js_lesson_array_for_break.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_pair_includes() {
  arguments_assert(arguments, 0);
  ("two numbers that add up to 10, found with includes: for each a[i], if (a.includes(10 - a[i])) write out a[i] and 10 - a[i], then break - the number that goes with a[i] is 10 - a[i]");
  ("2026-11-25, at the human's asking: the simpler way, put before the three lessons ending in Two that add up to 10. One for loop and one if, with includes and break already taught, and the array need not be in order. The two index way follows as a second way, for an array in order.");
  ("5 is kept out of every input: 10 - 5 is 5, so 5 would find itself; the lesson says so. Each input is five different numbers from 1 to 9 without 5, in no order. The eight such numbers make four pairs adding up to 10, so five of them always hold at least one pair.");
  ("The wrong programs are: break left out (every number with a partner is written out, so each pair twice), writing out i in place of a[i], and asking includes(10 - i), the index in place of the item. All are for loops over a.length, so all stop; one that writes out nothing is never offered. The other wrong answer offered is the found pair the other way round.");
  ("The writing is a first draft by Claude 2026-11-25.");
  let numbers = [1, 2, 3, 4, 6, 7, 8, 9];
  function program_with(items, asked, first, stop) {
    "the array, then a for loop asking includes of asked, writing out first and 10 - a[i], with break if stop";
    let lines = [
      "let a = [" + items.join(", ") + "];",
      "for (let i = 0; i < a.length; i++) {",
      "  if (a.includes(" + asked + ")) {",
      "    console.log(" + first + ");",
      "    console.log(10 - a[i]);",
    ];
    if (stop) {
      lines.push("    break;");
    }
    lines.push("  }");
    lines.push("}");
    let code = list_join_newline(lines);
    return code;
  }
  let partner = "10 - a[i]";
  function program_of(items2) {
    let code2 = program_with(items2, partner, "a[i]", true);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, partner, "a[i]", false);
    let v2 = program_with(items3, partner, "i", true);
    let v3 = program_with(items3, "10 - i", "a[i]", true);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    for (let x of items4) {
      let difference = subtract(10, x);
      if (items4.includes(difference)) {
        r.push(subtract(10, x) + "\n" + x);
        return r;
      }
    }
    return r;
  }
  function input_drawn(count) {
    let items5 = list_shuffle_take(numbers, count);
    return items5;
  }
  function inputs_get() {
    "six arrays of five numbers without 5";
    let counts = [5, 5, 5, 5, 5, 5];
    let inputs = list_map(counts, input_drawn);
    return inputs;
  }
  function above(root, context) {
    "includes and break remembered, then asking for the number that goes with each item";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_includes,
      ["", "a.includes(x)", " is ", "true", " when ", "x", " is in ", "a", ""],
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
      ["We look for two numbers in ", "a", " that add up to ", "10", ""],
      ["The number that goes with ", "a[i]", " is ", "10 - a[i]", ""],
      ["So for each ", "a[i]", ", ask if it is in ", "a", ":"],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code3 = program_of([4, 9, 2, 6, 7]);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    let lines_said2 = [
      [
        "",
        "10 - 4",
        " is ",
        "6",
        ", and ",
        "6",
        " is in ",
        "a",
        ", so ",
        "4",
        " and ",
        "6",
        " are written out and ",
        "break;",
        " stops the loop",
      ],
      [
        "There is no ",
        "5",
        " here: ",
        "10 - 5",
        " is ",
        "5",
        ", so a ",
        "5",
        " would find itself",
      ],
    ];
    for (let said2 of lines_said2) {
      app_learn_js_div_cycle_code(box_three, said2);
    }
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Add up to 10 with includes",
    "a.includes(10 - a[i])",
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
