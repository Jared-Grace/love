import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_copy } from "./app_learn_js_lesson_array_copy.mjs";
import { app_learn_js_lesson_statement_name_join } from "./app_learn_js_lesson_statement_name_join.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_string_build_generic } from "./app_learn_js_lesson_string_build_generic.mjs";
export function app_learn_js_lesson_string_copy() {
  arguments_assert(arguments, 0);
  ('copying a string one letter at a time: let a = "joy"; let b = ""; for (let i = 0; i < a.length; i++) { b = b + a[i]; } console.log(b); writes out joy');
  ('2026-11-21, at the human\'s asking: the first of the string-building lessons, before doubling each letter and reversing. On its own a copy is not useful, since let b = a; does it, but it is the pattern the next two change by one piece, as Copying an array was for arrays. The new facts are "" as a string with no letters, said beside [] as an array with no items, and b = b + a[i]; joining one letter onto b each time round.');
  ("The wrong loops start at 1 and stop at a.length - 1. The extra wrong answer is the word backwards.");
  ("The writing is a first draft by Claude 2026-11-21.");
  let right = {
    start: "0",
    condition: "i < a.length",
    update: "i++;",
    added: "a[i]",
  };
  let wrongs = [
    {
      start: "1",
      condition: "i < a.length",
      update: "i++;",
      added: "a[i]",
    },
    {
      start: "0",
      condition: "i < a.length - 1",
      update: "i++;",
      added: "a[i]",
    },
  ];
  function extra(word) {
    "the word backwards";
    let backwards = word.split("").reverse().join("");
    let r = [backwards];
    return r;
  }
  function above(root, context, program_of) {
    "copying an array and joining text remembered, then the same copy loop over a string, joining instead of pushing";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_copy,
      [
        "a ",
        "for",
        " loop can copy every item of an array into an empty array, pushing ",
        "a[i]",
        " each time round",
      ],
    );
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_statement_name_join,
      [
        "a plus between two names holding text joins the text: ",
        '"God" + "love"',
        " is ",
        '"Godlove"',
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      '""',
      " is an empty string: a string with no letters, as ",
      "[]",
      " is an array with no items. ",
      "b = b + a[i];",
      " joins one more letter of ",
      "a",
      " onto the end of ",
      "b",
      ", so the same loop copies a string:",
    ]);
    let code = program_of("joy");
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "b",
      " starts as ",
      '""',
      ", then is ",
      '"j"',
      ", then ",
      '"jo"',
      ", then ",
      '"joy"',
    ]);
    app_learn_js_div_cycle_output(box_two, ["So ", "joy", " is written out"]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Copying a string",
    "b = b + a[i];",
  );
  let lesson = app_learn_js_lesson_string_build_generic(
    name_id,
    right,
    wrongs,
    extra,
    above,
  );
  return lesson;
}
