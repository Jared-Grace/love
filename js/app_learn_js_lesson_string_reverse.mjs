import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_backwards } from "./app_learn_js_lesson_array_for_backwards.mjs";
import { app_learn_js_lesson_string_copy } from "./app_learn_js_lesson_string_copy.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_string_build_generic } from "./app_learn_js_lesson_string_build_generic.mjs";
export function app_learn_js_lesson_string_reverse() {
  arguments_assert(arguments, 0);
  ('a string reversed: let a = "joy"; let b = ""; for (let i = a.length - 1; i >= 0; i--) { b = b + a[i]; } console.log(b); writes out yoj');
  ("2026-11-21, at the human's asking: after Doubling each letter. Nothing in it is new: it is the copy loop of Copying a string with the loop running down, as in Backwards. Joining the letters last to first builds the word backwards.");
  ("The wrong loops are asking i > 0, which leaves off the first letter, and starting at a.length - 2, which leaves off the last. The extra wrong answer is the word unchanged, what the copy loop running up writes.");
  ("The writing is a first draft by Claude 2026-11-21.");
  let right = {
    start: "a.length - 1",
    condition: "i >= 0",
    update: "i--;",
    added: "a[i]",
  };
  let wrongs = [
    {
      start: "a.length - 1",
      condition: "i > 0",
      update: "i--;",
      added: "a[i]",
    },
    {
      start: "a.length - 2",
      condition: "i >= 0",
      update: "i--;",
      added: "a[i]",
    },
  ];
  function extra(word) {
    "the word unchanged";
    let r = [word];
    return r;
  }
  function above(root, context, program_of) {
    "the loop running down and copying a string remembered, then the two together";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_backwards,
      [
        "this loop runs down over every index, last to first: ",
        "for (let i = a.length - 1; i >= 0; i--)",
      ],
    );
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_copy,
      ["", "b = b + a[i];", " in a loop joins one letter at a time onto ", "b"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Together, the letters are joined last to first, so ",
      "b",
      " is the word backwards:",
    ]);
    let code = program_of("joy");
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "i",
      " goes ",
      "2",
      ", ",
      "1",
      ", ",
      "0",
      ", so ",
      "b",
      " starts as ",
      '""',
      ", then is ",
      '"y"',
      ", then ",
      '"yo"',
      ", then ",
      '"yoj"',
    ]);
    app_learn_js_div_cycle_output(box_two, ["So ", "yoj", " is written out"]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Reversing a string",
    "i >= 0; i--",
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
