import { arguments_assert } from "./arguments_assert.mjs";
import { list_join } from "./list_join.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_slice_range } from "./app_learn_js_lesson_array_slice_range.mjs";
import { app_learn_js_lesson_array_for_split } from "./app_learn_js_lesson_array_for_split.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_slice_separator() {
  arguments_assert(arguments, 0);
  ('whether a separator of more than one letter starts at an index, with slice and no loop: let s = "joy, love"; let sep = ", "; let i = 3; logs s.slice(i, i + sep.length), which is ", ", then whether that === sep, which is true');
  ("2026-11-22, at the human's asking: the check of Words apart at a separator, taught on its own before it, so that lesson adds only the jump past the separator.");
  ("A set is six questions, two of love, joy and peace joined by a comma and a space. Three put i where the separator starts; one each put it on the first word's last letter, and twice on the second word's first letter, so true and false both come up. i is always at least 2, so s.slice(i, sep.length) is always empty.");
  ("The piece is logged before the check, so a wrong program that cuts the wrong piece logs something different even when the check is false either way.");
  ("The wrong programs are: s.slice(i, sep.length) (the stop not counted from i), s[i] (one letter is never two), and s.slice(i) (everything to the end).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = {
    words: ["joy", "love"],
    i: 3,
  };
  function program_with(input, piece) {
    "the string, the separator and the index, then the piece and whether it is the separator";
    let text = list_join(input.words, ", ");
    let lines = [
      "let s = " + json_to(text) + ";",
      'let sep = ", ";',
      "let i = " + input.i + ";",
      "console.log(" + piece + ");",
      "console.log(" + piece + " === sep);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input2) {
    let code2 = program_with(input2, "s.slice(i, i + sep.length)");
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, "s.slice(i, sep.length)");
    let v2 = program_with(input3, "s[i]");
    let v3 = program_with(input3, "s.slice(i)");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function input_moved(moved) {
    "moved is how far i sits from where the separator starts: 0 on it, -1 on the first word's last letter, 2 on the second word's first letter";
    let words2 = list_shuffle_take(["love", "joy", "peace"], 2);
    let input5 = {
      words: words2,
      i: words2[0].length + moved,
    };
    return input5;
  }
  function inputs_get() {
    "six inputs, three on the separator";
    let inputs = list_map([0, 0, 0, -1, 2, 2], input_moved);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "slice from and to and the comma loop remembered, then the check for a separator of two letters";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_slice_range,
      ["", "a.slice(1, 3)", " gave the items from index 1 up to 3"],
    );
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_split,
      ["", "s[i] === sep", " asked whether the comma was at ", "i"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Suppose you have a string ",
      "s",
      ", something you want to search for, ",
      "sep",
      ", and an index you are searching at, ",
      "i",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "s.slice(i, i + sep.length)",
      " is the piece of ",
      "s",
      " at ",
      "i",
      " as long as ",
      "sep",
      ", so ",
      "=== sep",
      " asks whether ",
      "sep",
      " is there at index ",
      "i",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Is the separator here?",
    "s.slice(i, i + sep.length)",
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
