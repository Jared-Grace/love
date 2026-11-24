import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_last_index } from "./app_learn_js_lesson_array_last_index.mjs";
import { app_learn_js_lesson_array_for_if_third } from "./app_learn_js_lesson_array_for_if_third.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_is_last() {
  arguments_assert(arguments, 0);
  ('the last item found inside a loop: for (let i = 0; i < a.length; i++) { if (i === a.length - 1) { console.log("last: " + a[i]); } } writes out last: 9 for [3, 7, 9]');
  ("2026-11-25, at the human's asking, before Last of each run: i === a.length - 1 met alone first. Last index taught a.length - 1, and Every third item taught an if on i inside the loop; this puts the two together. Nothing in it is new.");
  ("The arrays hold different numbers 1 to 9, 3 to 5 numbers long. An array is kept only when every wrong program writes out something other than the answer, so no item equals its own index.");
  ("The wrong programs are: console.log(i) (the last index, not the item), i === 0 (the first item), i === a.length - 2 (the one before the last) and i === a.length (no index is a.length, so nothing is written out; offered only in the backwards quiz, since nothing is not an answer to pick).");
  ("The writing is a first draft by Claude 2026-11-25.");
  ('2026-11-25, at the human\'s asking: every program writes "last: " before what it writes out, so the output says what was found. Not picked: writing out every item and labelling only the last, an if with an else, which is a second idea in a lesson meant to hold one');
  let example_input = [3, 7, 9];
  let pool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let last = "i === a.length - 1";
  function program_with(items, condition, logged) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let lines = [
      "let a = " + array + ";",
      "for (let i = 0; i < a.length; i++) {",
      "  if (" + condition + ") {",
      '    console.log("last: " + ' + logged + ");",
      "  }",
      "}",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(items2, last, "a[i]");
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, last, "i");
    let v2 = program_with(items3, "i === 0", "a[i]");
    let v3 = program_with(items3, "i === a.length - 2", "a[i]");
    let v4 = program_with(items3, "i === a.length", "a[i]");
    let programs = [v, v2, v3, v4];
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
    "different numbers 1 to 9, tried again until every wrong program writes out something else";
    while (true) {
      let taken = list_shuffle_take(pool, size);
      if (every_wrong_differs(taken)) {
        return taken;
      }
    }
  }
  function inputs_get() {
    let sizes = [3, 4, 3, 4, 5, 5];
    let arrays = list_map(sizes, array_of);
    return arrays;
  }
  function above(root, context) {
    "the last index and an if on i remembered, then the last item found in the loop";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_last_index,
      ["", "a.length - 1", " is the last index"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_if_third,
      ["an ", "if", " on ", "i", " inside the loop picks items by their index"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      last,
      " is true only on the last run of the loop, so only the last item is written out:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Is it the last?",
    last,
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
