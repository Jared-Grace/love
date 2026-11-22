import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_index_of_first } from "./app_learn_js_lesson_array_index_of_first.mjs";
import { app_learn_js_lesson_array_for_at_from } from "./app_learn_js_lesson_array_for_at_from.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
import { app_learn_js_array_from_inputs } from "./app_learn_js_array_from_inputs.mjs";
export function app_learn_js_lesson_array_index_of_from() {
  arguments_assert(arguments, 0);
  ('where the first joy is at or after an index, in one call: let a = ["joy", "love", "joy", "peace"]; let from = 1; console.log(a.indexOf("joy", from)); writes out 2');
  ('2026-11-22, at the human\'s asking: right after Where is joy from an index?, so a.indexOf("joy", from) is seen to do what that loop did.');
  ('The wrong programs are: a.indexOf("joy") (from left out, so the first joy anywhere) and a.lastIndexOf("joy") (the last joy, which is the answer only when from is past the first).');
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = {
    items: ["joy", "love", "joy", "peace"],
    from: 1,
  };
  function program_with(input, call) {
    "the array and from, then the call written out";
    let lines = [
      "let a = " + json_to(input.items) + ";",
      "let from = " + input.from + ";",
      "console.log(" + call + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input2) {
    let code2 = program_with(input2, 'a.indexOf("joy", from)');
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, 'a.indexOf("joy")');
    let v2 = program_with(input3, 'a.lastIndexOf("joy")');
    let programs = [v, v2];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "indexOf and the loop from an index remembered, then indexOf with from";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_index_of_first,
      ["", 'a.indexOf("joy")', " gave the first ", "joy"],
    );
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_at_from,
      [
        "",
        "for (let i = from; ...)",
        " found the first ",
        "joy",
        " at ",
        "from",
        " or after it",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      'a.indexOf("joy", from)',
      " does that loop in one call: the first ",
      "joy",
      " at index ",
      "from",
      " or after it, or ",
      "-1",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Index of from an index",
    'a.indexOf("joy", from)',
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs({
    name_id,
    above,
    inputs_get: app_learn_js_array_from_inputs,
    program_of,
    wrong_programs_of,
    wrong_outputs_of,
  });
  return lesson;
}
