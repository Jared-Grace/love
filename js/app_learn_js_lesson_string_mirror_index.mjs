import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { less_than } from "./less_than.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_last_index } from "./app_learn_js_lesson_array_last_index.mjs";
import { app_learn_js_lesson_string_for } from "./app_learn_js_lesson_string_for.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_braces_colors } from "./app_learn_js_braces_colors.mjs";
import { list_add } from "./list_add.mjs";
import { app_learn_js_div_braces_painted } from "./app_learn_js_div_braces_painted.mjs";
import { subtract } from "./subtract.mjs";
import { math_min } from "./math_min.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_learn_js_lesson_bold_term } from "./app_learn_js_lesson_bold_term.mjs";
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
  let example_input = ["loves", 1];
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
        "a string is like an array of its letters, so ",
        "a[i]",
        " is the letter at index ",
        "i",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    ("the human's words 2026-11-21: seven indices, each pair drawn in one colour, the colours the brace pairs wear");
    app_learn_js_div_cycle_code(box_three, [
      "Suppose we have an array with 7 items",
    ]);
    let colors = app_learn_js_braces_colors();
    let count = 7;
    function indices_line(parent, text, total) {
      let parts = [text];
      for (let k = 0; less_than(k, total); k++) {
        if (less_than(0, k)) {
          list_add(parts, ", ");
        }
        list_add(parts, "" + k);
      }
      app_learn_js_div_cycle_code(parent, parts);
    }
    indices_line(box_three, "Then its indices are: ", count);
    let first_color = list_get(colors, 0);
    let second_color = list_get(colors, 1);
    let middle_color = list_get(colors, 3);
    app_learn_js_div_braces_painted(box_three, [
      ["We can pair the "],
      {
        brace: "first",
        color: first_color,
      },
      [" and "],
      {
        brace: "last",
        color: first_color,
      },
      [" together"],
    ]);
    app_learn_js_div_braces_painted(box_three, [
      ["We can pair the "],
      {
        brace: "second",
        color: second_color,
      },
      [" and "],
      {
        brace: "second to last",
        color: second_color,
      },
      [" together"],
    ]);
    app_learn_js_div_cycle_code(box_three, ["And so on"]);
    app_learn_js_div_cycle_code(box_three, ["Like this:"]);
    let pieces = [];
    for (let i = 0; less_than(i, count); i++) {
      let left = subtract(count, 1);
      let mirror = subtract(left, i);
      let pair = math_min(i, mirror);
      list_add_multiple(pieces, [
        {
          brace: "" + i,
          color: list_get(colors, pair),
        },
        [" "],
      ]);
    }
    let row = app_learn_js_div_braces_painted(box_three, pieces);
    html_centered(row);
    app_learn_js_div_braces_painted(box_three, [
      ["Because "],
      {
        brace: "3",
        color: middle_color,
      },
      [" is in the middle, "],
      {
        brace: "3",
        color: middle_color,
      },
      [" is paired with itself"],
    ]);
    app_learn_js_lesson_bold_term(
      box_three,
      "If we have an index, the other index in the pair is called its ",
      "mirror",
    );
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "If we have the first number ",
      "i",
      ", how do we solve what its pair is?",
    ]);
    app_learn_js_div_cycle_code(box_four, [
      "Here is the formula: ",
      "a.length - 1 - i",
    ]);
    app_learn_js_div_cycle_code(box_four, [
      "Suppose we have the string ",
      '"loves"',
    ]);
    indices_line(box_four, "Then its indices are ", 5);
    app_learn_js_div_cycle_code(box_four, ["", '"o"', " is at index ", "1"]);
    app_learn_js_div_cycle_code(box_four, [
      "The pair for ",
      '"o"',
      " is ",
      "a.length - 1 - i",
      " which is ",
      "5 - 1 - 1",
      " which is ",
      "3",
      ", which is the index for ",
      '"e"',
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_four, lines2, value);
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
