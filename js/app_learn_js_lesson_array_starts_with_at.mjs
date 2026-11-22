import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join } from "./list_join.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_slice_separator } from "./app_learn_js_lesson_array_slice_separator.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_starts_with_at() {
  arguments_assert(arguments, 0);
  ('whether a word is there at an index, in one call: let s = "love and joy"; let sep = "and"; let i = 5; logs s.startsWith(sep, i), which is true');
  ("2026-11-22, at the human's asking: the check Is the separator here? taught, s.slice(i, i + sep.length) === sep, written as the one call JavaScript has for it, right after it.");
  ("A set is six questions, two of love, joy and peace with and between them. Three put i where and starts; one at the start of the first word, and twice at the start of the last word, so true and false both come up.");
  ("The wrong programs are: s.startsWith(sep), which asks only at the start of s and so is always false here, and s.includes(sep), which asks anywhere in s and so is always true here. Each differs from the right program on some questions, which is the difference the lesson is about: startsWith with an index asks at one place.");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = {
    words: ["love", "joy"],
    i: 5,
  };
  function program_with(input, piece) {
    "the string, the word searched for and the index, then whether the word is there";
    let text = list_join(input.words, " and ");
    let lines = [
      "let s = " + json_to(text) + ";",
      'let sep = "and";',
      "let i = " + input.i + ";",
      "console.log(" + piece + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input2) {
    let code2 = program_with(input2, "s.startsWith(sep, i)");
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, "s.startsWith(sep)");
    let v2 = program_with(input3, "s.includes(sep)");
    let programs = [v, v2];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function input_at(at) {
    "at says where i sits: on and, at the first word's start, or at the last word's start";
    let words2 = list_shuffle_take(["love", "joy", "peace"], 2);
    let i = 0;
    if (equal(at, "and")) {
      i = words2[0].length + 1;
    }
    if (equal(at, "last")) {
      i = words2[0].length + 5;
    }
    let input5 = {
      words: words2,
      i,
    };
    return input5;
  }
  function inputs_get() {
    "six inputs, three on and";
    let inputs = list_map(
      ["and", "and", "and", "first", "last", "last"],
      input_at,
    );
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "the slice check remembered, then the one call that asks the same";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_slice_separator,
      [
        "",
        "s.slice(i, i + sep.length) === sep",
        " asked whether ",
        "sep",
        " is there at index ",
        "i",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "s.startsWith(sep, i)",
      " asks the same thing in one call: whether ",
      "sep",
      " is there in ",
      "s",
      " starting at index ",
      "i",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Starts with, at an index",
    "s.startsWith(sep, i)",
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
