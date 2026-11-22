import { arguments_assert } from "./arguments_assert.mjs";
import { list_join } from "./list_join.mjs";
import { json_to } from "./json_to.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_split } from "./app_learn_js_lesson_array_for_split.mjs";
import { app_learn_js_lesson_array_slice_separator } from "./app_learn_js_lesson_array_slice_separator.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_split_separator() {
  arguments_assert(arguments, 0);
  ('a string cut at each comma and space into an array of words, by a loop: let s = "joy, love"; let sep = ", "; ... writes out ["joy", "love"]');
  ("2026-11-22, at the human's asking: the separator is held in sep, and s.slice(i, i + sep.length) === sep asks whether it starts at i, so the one loop works for a separator of any length - still no loop inside a loop. After a match, i = i + sep.length - 1 jumps past the rest of it, the - 1 because i++ adds the last 1.");
  ("A set is six questions, two or three of love, joy and peace joined by a comma and a space.");
  ("The wrong programs are: no jump (each word after the first keeps its space), i = i + sep.length (the jump goes one too far, so the next word loses its first letter), and s[i] === sep (one letter is never two, so nothing is cut).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = ["joy", "love"];
  function program_with(words, test, jump) {
    "the loop that builds each word letter by letter, pushing it where sep starts and jumping past sep; no jump line when jump is null";
    let text = list_join(words, ", ");
    let lines = [
      "let s = " + json_to(text) + ";",
      'let sep = ", ";',
      "let a = [];",
      'let word = "";',
      "for (let i = 0; i < s.length; i++) {",
      "  if (" + test + ") {",
      "    a.push(word);",
      '    word = "";',
    ];
    if (not_equal(jump, null)) {
      lines = [...lines, "    i = " + jump + ";"];
    }
    lines = [
      ...lines,
      "  } else {",
      "    word = word + s[i];",
      "  }",
      "}",
      "a.push(word);",
      "console.log(a);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  let test_right = "s.slice(i, i + sep.length) === sep";
  let jump_right = "i + sep.length - 1";
  function program_of(words2) {
    let code2 = program_with(words2, test_right, jump_right);
    return code2;
  }
  function wrong_programs_of(words3) {
    let v = program_with(words3, test_right, null);
    let v2 = program_with(words3, test_right, "i + sep.length");
    let v3 = program_with(words3, "s[i] === sep", jump_right);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(words4) {
    let r = [];
    return r;
  }
  function input_sized(size) {
    let words5 = list_shuffle_take(["love", "joy", "peace"], size);
    return words5;
  }
  function inputs_get() {
    "two or three words, three times each, shuffled";
    let inputs = list_map([2, 2, 2, 3, 3, 3], input_sized);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "the one-letter loop and slice with a stop remembered, then a separator of any length";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_split,
      ["", "if (s[i] === sep)", " cut ", "s", " at each comma"],
    );
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_slice_separator,
      [
        "",
        "s.slice(i, i + sep.length) === sep",
        " asked whether ",
        "sep",
        " is at ",
        "i",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Now the words have a comma and a space between them, kept in ",
      "sep",
      ", and that check goes in the loop",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "After a match, ",
      "i = i + sep.length - 1",
      " jumps past it. The ",
      "- 1",
      " is because ",
      "i++",
      " adds the last 1:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Words apart at a separator",
    "i = i + sep.length - 1",
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
