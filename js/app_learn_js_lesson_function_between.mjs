import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { app_learn_js_function_declared_lines } from "./app_learn_js_function_declared_lines.mjs";
import { list_get } from "./list_get.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs_stepping } from "./app_learn_js_lesson_code_logged_wrong_programs_stepping.mjs";
export function app_learn_js_lesson_function_between() {
  arguments_assert(arguments, 0);
  ("a function called between two console.log lines: its body runs where it is called, so its word comes out between theirs, not first");
  ("2026-11-27, at the human's asking: the fourth of the function body lessons");
  ("An input is three words: written before the call, inside greet, and after the call. Reading backwards, the wrong program calls greet after the last line; the wrong output writes greet's word first, for a learner who thinks a body runs where it is written.");
  ("The writing is a first draft by Claude 2026-11-27.");
  let triples = [
    ["Good", "Hello", "Bye"],
    ["Start", "Peace", "End"],
    ["One", "Welcome", "Two"],
    ["First", "Good morning", "Last"],
  ];
  function log_line(word) {
    let line = "console.log(" + json_to(word) + ");";
    return line;
  }
  function program_with(triple, at_end) {
    "greet declared, writing out the middle word; then the first word written out, greet called, the last word written out - or greet called after the last word when at_end";
    let item = list_get(triple, 1);
    let v2 = log_line(item);
    let lines = app_learn_js_function_declared_lines("greet", [v2]);
    let item2 = list_get(triple, 0);
    let v3 = log_line(item2);
    lines.push(v3);
    if (not(at_end)) {
      lines.push("greet();");
    }
    let item3 = list_get(triple, 2);
    let v4 = log_line(item3);
    lines.push(v4);
    if (at_end) {
      lines.push("greet();");
    }
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(triple) {
    let code = program_with(triple, false);
    return code;
  }
  function wrong_programs_of(triple) {
    let v = program_with(triple, true);
    let programs = [v];
    return programs;
  }
  function wrong_outputs_of(triple) {
    "greet's word first, as if the body ran where it is written";
    let item4 = list_get(triple, 1);
    let item5 = list_get(triple, 0);
    let item6 = list_get(triple, 2);
    let joined = list_join_newline([item4, item5, item6]);
    let outputs = [joined];
    return outputs;
  }
  function inputs_get() {
    "each triple once, shuffled";
    let order = triples.slice();
    list_shuffle(order);
    return order;
  }
  function above(root, context) {
    "a body runs where its function is called";
    let box = app_learn_js_container_light_blue(root);
    html_div_text(
      box,
      "A function's body runs where the function is called, not where it is written",
    );
    app_learn_js_div_cycle_code(box, [
      "Here ",
      "greet();",
      " is between two ",
      "console.log(...)",
      " lines, so its word is written out between theirs",
    ]);
    let box_program = app_learn_js_container_light_blue(root);
    html_div_text(box_program, "Here is the complete program:");
    let code = program_of(["Good", "Greetings!", "Bye"]);
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_program, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Runs where it is called",
    "greet();",
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs_stepping(
    {
      name_id,
      above,
      inputs_get,
      program_of,
      wrong_programs_of,
      wrong_outputs_of,
    },
    true,
  );
  return lesson;
}
