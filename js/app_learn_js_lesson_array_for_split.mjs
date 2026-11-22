import { arguments_assert } from "./arguments_assert.mjs";
import { list_join } from "./list_join.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_join_words } from "./app_learn_js_lesson_array_for_join_words.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_split() {
  arguments_assert(arguments, 0);
  ('a string cut at each comma into an array of words, by a loop: let s = "joy,love"; let sep = ","; ... writes out ["joy", "love"]');
  ("2026-11-22, at the human's asking: the long way before .split, as with join, concat and slice. The separator is one letter, a comma, so one loop with an if and an else does it - no loop inside a loop. A separator of more than one letter is left to .split.");
  ("A set is six questions, two or three of love, joy and peace joined by commas.");
  ('The wrong programs are: no a.push(word) after the loop (the last word lost), no word = "" (each word keeps the ones before it), and no else (the comma kept at the start of the next word).');
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = ["joy", "love"];
  function program_with(words, pushed_last, reset, else_kept) {
    "the loop that builds each word letter by letter and pushes it at each comma";
    let text = list_join(words, ",");
    let lines = [
      "let s = " + json_to(text) + ";",
      'let sep = ",";',
      "let a = [];",
      'let word = "";',
      "for (let i = 0; i < s.length; i++) {",
      "  if (s[i] === sep) {",
      "    a.push(word);",
    ];
    if (reset) {
      lines = [...lines, '    word = "";'];
    }
    if (else_kept) {
      lines = [...lines, "  } else {", "    word = word + s[i];", "  }"];
    } else {
      lines = [...lines, "  }", "  word = word + s[i];"];
    }
    lines = [...lines, "}"];
    if (pushed_last) {
      lines = [...lines, "a.push(word);"];
    }
    lines = [...lines, "console.log(a);"];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(words2) {
    let code2 = program_with(words2, true, true, true);
    return code2;
  }
  function wrong_programs_of(words3) {
    let v = program_with(words3, false, true, true);
    let v2 = program_with(words3, true, false, true);
    let v3 = program_with(words3, true, true, false);
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
    "adding on to a string remembered, then cutting one at each comma";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_join_words,
      ["", "s = s + a[i];", " in a loop ran the words together"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Now the other way: ",
      "s",
      " has words with a comma between them, kept in ",
      "sep",
      ", and we want them in an array",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "Each letter that is not ",
      "sep",
      " is added on to ",
      "word",
      ". At a comma, ",
      "word",
      " is pushed and starts again empty:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "The last word has no comma after it, so it is pushed after the loop",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Words apart",
    "if (s[i] === sep)",
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
