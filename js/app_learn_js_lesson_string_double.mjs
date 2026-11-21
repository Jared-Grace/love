import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_copy } from "./app_learn_js_lesson_string_copy.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_string_build_generic } from "./app_learn_js_lesson_string_build_generic.mjs";
export function app_learn_js_lesson_string_double() {
  arguments_assert(arguments, 0);
  ('every letter of a string doubled: let a = "joy"; let b = ""; for (let i = 0; i < a.length; i++) { b = b + a[i] + a[i]; } console.log(b); writes out jjooyy');
  ("2026-11-21, at the human's asking: right after Copying a string. The one new fact is that the piece joined on each time round may be more than one letter: a[i] + a[i] joins the letter twice, so the copy loop changes by one piece only.");
  ("The wrong loops are the plain copy, joining a[i] once, and the doubling loop starting at 1. The extra wrong answer is the word written twice, joyjoy, which is what doubling the whole word would give rather than each letter.");
  ("The writing is a first draft by Claude 2026-11-21.");
  let right = {
    start: "0",
    condition: "i < a.length",
    update: "i++;",
    added: "a[i] + a[i]",
  };
  let wrongs = [
    {
      start: "0",
      condition: "i < a.length",
      update: "i++;",
      added: "a[i]",
    },
    {
      start: "1",
      condition: "i < a.length",
      update: "i++;",
      added: "a[i] + a[i]",
    },
  ];
  function extra(word) {
    "the word written twice";
    let r = [word + word];
    return r;
  }
  function above(root, context, program_of) {
    "copying a string remembered, then the same loop joining each letter twice";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_copy,
      ["", "b = b + a[i];", " in a loop copies a string one letter at a time"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Joining ",
      "a[i] + a[i]",
      " instead joins each letter twice:",
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
      '"jj"',
      ", then ",
      '"jjoo"',
      ", then ",
      '"jjooyy"',
    ]);
    app_learn_js_div_cycle_output(box_two, [
      "So ",
      "jjooyy",
      " is written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Doubling each letter",
    "b = b + a[i] + a[i];",
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
