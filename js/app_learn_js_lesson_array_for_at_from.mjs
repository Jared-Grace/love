import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_at_first } from "./app_learn_js_lesson_array_for_at_first.mjs";
import { app_learn_js_lesson_array_for_start_two } from "./app_learn_js_lesson_array_for_start_two.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
import { app_learn_js_array_from_inputs } from "./app_learn_js_array_from_inputs.mjs";
export function app_learn_js_lesson_array_for_at_from() {
  arguments_assert(arguments, 0);
  ('where the first joy is at or after an index: let a = ["joy", "love", "joy", "peace"]; let from = 1; the first-joy loop started at from writes out 2');
  ('2026-11-22, at the human\'s asking: the first-joy loop with i starting at from rather than 0, so the search skips what comes before; right before a.indexOf("joy", from), which does the same in one call. Nothing here is new but the two joined: the first-joy loop and a loop that does not start at 0.');
  ("The wrong programs are: i starting at 0 (the first joy anywhere, from ignored), the loop without && at === -1 (the last joy at or after from), and keeping the item instead of its index.");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = {
    items: ["joy", "love", "joy", "peace"],
    from: 1,
  };
  function program_with(input, start, condition, keep) {
    "the array and from, then the first-joy loop started at start";
    let codes = list_map(input.items, json_to);
    let lines = [
      "let a = " + js_code_array(codes) + ";",
      "let from = " + input.from + ";",
      "let at = -1;",
      "for (let i = " + start + "; i < a.length; i++) {",
      "  if (" + condition + ") {",
      "    at = " + keep + ";",
      "  }",
      "}",
      "console.log(at);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  let condition_first = 'a[i] === "joy" && at === -1';
  function program_of(input2) {
    let code2 = program_with(input2, "from", condition_first, "i");
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, "0", condition_first, "i");
    let v2 = program_with(input3, "from", 'a[i] === "joy"', "i");
    let v3 = program_with(input3, "from", condition_first, "a[i]");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "the first-joy loop and a loop not starting at 0 remembered, then the two joined";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_at_first,
      ["", "&& at === -1", " let only the first ", "joy", " set ", "at"],
    );
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_start_two,
      ["", "for (let i = 2; ...)", " started the loop at index 2"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Starting ",
      "i",
      " at ",
      "from",
      " finds the first ",
      "joy",
      " at index ",
      "from",
      " or after it; anything before ",
      "from",
      " is never looked at:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Where is joy from an index?",
    "for (let i = from; ...)",
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
