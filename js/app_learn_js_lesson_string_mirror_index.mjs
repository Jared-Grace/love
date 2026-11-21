import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_last_index } from "./app_learn_js_lesson_array_last_index.mjs";
import { app_learn_js_lesson_string_for } from "./app_learn_js_lesson_string_for.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_string_mirror_index() {
  arguments_assert(arguments, 0);
  ('the mirror of an index: let a = "level"; let i = 1; console.log(i); console.log(a.length - 1 - i); writes out 1 and 3, the index as far from the end as i is from the start');
  ("2026-11-21, asked for by the human: the step before the palindrome lessons, so the index a palindrome compares a[i] with is worked out on its own first. Index 0 mirrors the last index, a.length - 1, and each step forward from the start is a step back from the end.");
  ("A set is six questions, each a word and an index from 1 to its last index; index 0 is left out because there a.length - 1 is also the right answer.");
  ("Reading forwards, the wrong answers are what the wrong programs write out: a.length - i (one past the mirror), a.length - 1 + i (counting forwards from the end), and a.length - 1 (always the last index). Reading backwards, the wrong programs are those three, where each writes out something other than the answer.");
  ("The writing is a first draft by Claude 2026-11-21.");
  let example_input = ["level", 1];
  function program_with(input, mirror) {
    "let a = word; let i = index; console.log(i); console.log(mirror);";
    let word = list_get(input, 0);
    let index = list_get(input, 1);
    let lines = [
      "let a = " + json_to(word) + ";",
      "let i = " + index + ";",
      "console.log(i);",
      "console.log(" + mirror + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input2) {
    let code2 = program_with(input2, "a.length - 1 - i");
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, "a.length - i");
    let v2 = program_with(input3, "a.length - 1 + i");
    let v3 = program_with(input3, "a.length - 1");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function inputs_get() {
    "six words, each with an index from 1 to its last index";
    let words = ["love", "peace", "joy", "hope", "faith", "kind", "grace"];
    let chosen = list_shuffle_take(words, 6);
    let inputs = [];
    for (let word2 of chosen) {
      let indexes = [];
      for (let k = 1; less_than(k, word2.length); k++) {
        indexes.push(k);
      }
      let index2 = list_random_item(indexes);
      inputs.push([word2, index2]);
    }
    return inputs;
  }
  function above(root, context) {
    "the last index and a string's letters remembered, then the mirror of an index";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_last_index,
      ["", "a.length - 1", " is the index of the last item"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_string_for,
      [
        "A string is like an array of its letters, so ",
        "a[i]",
        " is the letter at index ",
        "i",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "The mirror of an index is the index just as far from the end. The mirror of ",
      "0",
      " is the last index, ",
      "a.length - 1",
      ".",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "Each step forward from the start is a step back from the end, so the mirror of ",
      "i",
      " is ",
      "a.length - 1 - i",
      ". In ",
      '"level"',
      ", the mirror of ",
      "1",
      " is ",
      "3",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "The mirror index",
    "a.length - 1 - i",
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
