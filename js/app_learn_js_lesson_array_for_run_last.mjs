import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { list_without } from "./list_without.mjs";
import { boolean_random } from "./boolean_random.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_index_past_end } from "./app_learn_js_lesson_array_index_past_end.mjs";
import { app_learn_js_lesson_expression_choose_order_stop_early_or } from "./app_learn_js_lesson_expression_choose_order_stop_early_or.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_run_last() {
  arguments_assert(arguments, 0);
  ("the last item of each run: for (let i = 0; i < a.length; i++) { if (i === a.length - 1 || a[i] !== a[i + 1]) { console.log(a[i]); } } writes out 1, 2 and 3 for [1, 1, 2, 3, 3]");
  ("2026-11-25, at the human's asking, before Each run once: the if that run lesson needs, met alone first. The one new use is || stopping early to guard the end of an array: on the last item the left side is true, so a[i + 1], which would read past the end, is never read.");
  ("Said plainly so nobody is misled: in JavaScript, a[i] !== a[i + 1] alone writes out the same thing, because past the end reads undefined and undefined is never equal to a number. The guard is taught because it says what is meant, and because many languages stop with an error instead. So that program is not offered as a wrong answer.");
  ("The arrays hold numbers 1 to 3, 4 to 6 long, each next the same as the one before half the time. An array is kept only when every wrong program writes out something other than the answer.");
  ("The wrong programs are: the loop stopping one early with i < a.length - 1 (the last item is never reached), && in place of || (only the last item) and === in place of !== (each item followed by the same one, then the last).");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = [1, 1, 2, 3, 3];
  let values = [1, 2, 3];
  let last = "i === a.length - 1";
  function program_with(items, bound, joiner, compare) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let lines = [
      "let a = " + array + ";",
      "for (let i = 0; i < " + bound + "; i++) {",
      "  if (" + last + " " + joiner + " a[i] " + compare + " a[i + 1]) {",
      "    console.log(a[i]);",
      "  }",
      "}",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(items2, "a.length", "||", "!==");
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, "a.length - 1", "||", "!==");
    let v2 = program_with(items3, "a.length", "&&", "!==");
    let v3 = program_with(items3, "a.length", "||", "===");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function every_wrong_differs(items5) {
    let code4 = program_of(items5);
    let answer = eval_console_log_lines(code4);
    let list = wrong_programs_of(items5);
    let outputs = list_map(list, eval_console_log_lines);
    let same = list_includes(outputs, answer);
    let n = not(same);
    return n;
  }
  function array_of(size) {
    "numbers 1 to 3, each next the same as the one before half the time, tried again until every wrong program writes out something else";
    while (true) {
      let r2 = list_random_item(values);
      let items = [r2];
      while (less_than(items.length, size)) {
        let before = items[subtract(items.length, 1)];
        let list2 = list_without(values, before);
        let next = boolean_random() ? before : list_random_item(list2);
        items.push(next);
      }
      if (every_wrong_differs(items)) {
        return items;
      }
    }
  }
  function inputs_get() {
    let sizes = [4, 5, 4, 5, 6, 6];
    let arrays = list_map(sizes, array_of);
    return arrays;
  }
  function above(root, context) {
    "past the end and || stopping early remembered, then the guard that uses both";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_index_past_end,
      ["an index past the end of an array reads ", "undefined"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_expression_choose_order_stop_early_or,
      [
        "when the left side of ",
        "||",
        " is ",
        "true",
        ", the right side is never solved",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    ("2026-11-25, the human's own wording, one thought to a line: why a[i + 1] is past the end, then the || stopping early, then the right side on the other items. What a run is was moved to Run so far, where a run is first met");
    let differs = "a[i] !== a[i + 1]";
    let lines_said = [
      [
        "If ",
        "i",
        " is the last index, then ",
        "a[i + 1]",
        " is past the last item",
      ],
      ["Then ", "i + 1", " is too far of an index"],
      ["But on the last item, ", last, " is ", "true"],
      ["So then the ", "||", " stops early"],
      [
        "And then for the last item ",
        differs,
        " (to the right of the ",
        "||",
        ") is never read",
      ],
      [
        "For items that are before the last item, ",
        differs,
        " is ",
        "true",
        " when the next item (",
        "a[i + 1]",
        ") is different from the current item (",
        "a[i]",
        ")",
      ],
      ["So this ", "if", " finds the last item of each run:"],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Last of each run",
    last + " ||",
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
