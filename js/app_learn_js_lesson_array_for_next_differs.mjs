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
import { app_learn_js_lesson_array_for_count_doubled } from "./app_learn_js_lesson_array_for_count_doubled.mjs";
import { app_learn_js_lesson_expression_not_equal } from "./app_learn_js_lesson_expression_not_equal.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_next_differs() {
  arguments_assert(arguments, 0);
  ('each item whose next item is different: for (let i = 0; i < a.length - 1; i++) { if (a[i] !== a[i + 1]) { console.log(a[i] + " " + a[i + 1]); } } writes out 1 2 and 2 3 for [1, 1, 2, 3, 3]');
  ("2026-11-25, at the human's asking, before Last of each run: a[i] !== a[i + 1] met alone first. Count doubled taught a[i] === a[i + 1]; this asks the other way, with the !== taught long before. Nothing in it is new.");
  ("The loop stops one early, as every loop reading a[i + 1] has, so the last item is never compared and never written out; the next lesson is where the last item is caught. The wrong program going to a.length shows why: past the end reads undefined, which is never equal, so the last item is written out too.");
  ("The arrays hold numbers 1 to 3, 4 to 6 long, each next the same as the one before half the time. An array is kept only when every wrong program writes out something other than the answer.");
  ('2026-11-25, at the human\'s asking: each program writes out a[i] + " " + a[i + 1], both items of a pair that differ, so 1 2 and 2 3 for [1, 1, 2, 3, 3] - the output shows the change itself. Not picked: writing out a[i] alone, the first draft, which shows only one side of each change');
  ('The wrong programs are: === in place of !== (each pair that is the same), a[i + 1] + " " + a[i] (each pair turned around) and i < a.length (a last pair with undefined, read past the end).');
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = [1, 1, 2, 3, 3];
  let values = [1, 2, 3];
  let differs = "a[i] !== a[i + 1]";
  let pair = 'a[i] + " " + a[i + 1]';
  function program_with(items, bound, condition, logged) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let lines = [
      "let a = " + array + ";",
      "for (let i = 0; i < " + bound + "; i++) {",
      "  if (" + condition + ") {",
      "    console.log(" + logged + ");",
      "  }",
      "}",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(items2, "a.length - 1", differs, pair);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, "a.length - 1", "a[i] === a[i + 1]", pair);
    let v2 = program_with(
      items3,
      "a.length - 1",
      differs,
      'a[i + 1] + " " + a[i]',
    );
    let v3 = program_with(items3, "a.length", differs, pair);
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
    "the same neighbours and !== remembered, then the items whose next is different";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_count_doubled,
      [
        "",
        "a[i] === a[i + 1]",
        " is ",
        "true",
        " when the next item is the same",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_expression_not_equal,
      ["", "!==", " is ", "true", " when the two sides are different"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      differs,
      " is ",
      "true",
      " when the next item is different, so each pair of next items that are different is written out:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Next is different",
    differs,
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
