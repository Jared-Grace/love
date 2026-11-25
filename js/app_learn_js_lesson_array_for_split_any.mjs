import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_split } from "./app_learn_js_lesson_array_for_split.mjs";
import { app_learn_js_lesson_array_for_in_either } from "./app_learn_js_lesson_array_for_in_either.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_split_any() {
  arguments_assert(arguments, 0);
  ('a string cut at a comma or a space into an array of words, by a loop: let seps = [",", " "]; ... if (seps.includes(s[i])) ... writes out ["joy", "peace", "love"] for "joy peace,love"');
  ("2026-11-25, at the human's asking, straight after Words apart: the one new fact is that the separator can be any of several letters, kept in an array and asked with .includes, as in In either. Everything else is Words apart's loop.");
  ("A set is six questions, love, joy and peace in some order, one gap a comma and the other a space, so both separators are always used.");
  ("The wrong programs are: s[i] === seps[0] (only the comma cuts), s[i] === seps (a letter is never the whole array, so nothing cuts), and no a.push(word) after the loop (the last word lost). Their outputs always differ from each other and from the right one.");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = {
    words: ["joy", "peace", "love"],
    gaps: [" ", ","],
  };
  function program_with(input, question, pushed_last) {
    "Words apart's loop with the separators in an array";
    let text =
      input.words[0] +
      input.gaps[0] +
      input.words[1] +
      input.gaps[1] +
      input.words[2];
    let lines = [
      "let s = " + json_to(text) + ";",
      'let seps = [",", " "];',
      "let a = [];",
      'let word = "";',
      "for (let i = 0; i < s.length; i++) {",
      "  if (" + question + ") {",
      "    a.push(word);",
      '    word = "";',
      "  } else {",
      "    word = word + s[i];",
      "  }",
      "}",
    ];
    if (pushed_last) {
      lines = [...lines, "a.push(word);"];
    }
    lines = [...lines, "console.log(a);"];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input2) {
    let code2 = program_with(input2, "seps.includes(s[i])", true);
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, "s[i] === seps[0]", true);
    let v2 = program_with(input3, "s[i] === seps", true);
    let v3 = program_with(input3, "seps.includes(s[i])", false);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function input_drawn(gaps) {
    let words = list_shuffle_take(["love", "joy", "peace"], 3);
    let input5 = {
      words,
      gaps,
    };
    return input5;
  }
  function inputs_get() {
    "the comma first three times and the space first three times, shuffled";
    let gaps_list = [
      [",", " "],
      [",", " "],
      [",", " "],
      [" ", ","],
      [" ", ","],
      [" ", ","],
    ];
    let inputs = list_map(gaps_list, input_drawn);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "cutting at one separator and asking whether an array holds an item remembered, then cutting at any of several";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_split,
      ["", "if (s[i] === sep)", " cuts ", "s", " into words at each comma"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_in_either,
      [
        "",
        "c.includes(a[i])",
        " is ",
        "true",
        " when ",
        "a[i]",
        " is in the array ",
        "c",
        "",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Now the words are cut at a comma or a space, so both are kept in the array ",
      "seps",
      "",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "seps.includes(s[i])",
      " asks whether the letter is any of them",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "The space and the comma both cut, so there are three words",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Words apart at any of these",
    "if (seps.includes(s[i]))",
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
