import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_search_put_program } from "./app_learn_js_search_put_program.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_index_of_first } from "./app_learn_js_lesson_array_index_of_first.mjs";
import { app_learn_js_lesson_array_slice_separator } from "./app_learn_js_lesson_array_slice_separator.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
import { app_learn_js_love_joy_peace_orders } from "./app_learn_js_love_joy_peace_orders.mjs";
export function app_learn_js_lesson_string_replace_hand() {
  arguments_assert(arguments, 0);
  ('only the first search in a string changed to put, from what is already taught: let s = "love, joy, peace"; let search = ", "; let put = " and "; let i = s.indexOf(search); let a = s.slice(0, i); let b = s.slice(i + search.length); let t = a + put + b; console.log(t); writes out love and joy, peace');
  ("2026-11-22, at the human's asking: a lesson before Replace the first that builds it from indexOf, slice and +, with search and put named, so the program works for any of them and s.replace(search, put) is met as a shorter way to write it.");
  ("The part before and the part after are named a and b on lines of their own, so no line is too long for a phone.");
  ("The wrong programs are: s.slice(i + 1) (part of search stays), s.slice(0, i + search.length) (all of search stays in front of put), and console.log(s) (s is not changed).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = ["love", "joy", "peace"];
  function program_with(words, before, after, logged) {
    let middle = [
      "let i = s.indexOf(search);",
      "let a = " + before + ";",
      "let b = " + after + ";",
      "let t = a + put + b;",
    ];
    let code = app_learn_js_search_put_program(words, ", ", middle, logged);
    return code;
  }
  function program_of(words2) {
    let code2 = program_with(
      words2,
      "s.slice(0, i)",
      "s.slice(i + search.length)",
      "t",
    );
    return code2;
  }
  function wrong_programs_of(words3) {
    let v = program_with(words3, "s.slice(0, i)", "s.slice(i + 1)", "t");
    let v2 = program_with(
      words3,
      "s.slice(0, i + search.length)",
      "s.slice(i + search.length)",
      "t",
    );
    let v3 = program_with(
      words3,
      "s.slice(0, i)",
      "s.slice(i + search.length)",
      "s",
    );
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(words4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "indexOf and slicing past the separator remembered, then the first search changed to put";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_index_of_first,
      ["", 'a.indexOf("joy")', " gave the index of the first ", '"joy"'],
    );
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_slice_separator,
      ["", "s.slice(i, i + sep.length)", " took the separator at index ", "i"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, ["Suppose we have a string ", "s"]);
    app_learn_js_div_cycle_code(box_two, [
      "To change the first ",
      "search",
      " to ",
      "put",
      ", find its index ",
      "i",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "Then join these three together: the part before ",
      "search",
      ", ",
      "put",
      ", and the part after ",
      "search",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
    app_learn_js_div_cycle_code(box_two, [
      "The part after starts at ",
      "i + search.length",
      ", just past ",
      "search",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Replace by hand",
    "a + put + b",
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs({
    name_id,
    above,
    inputs_get: app_learn_js_love_joy_peace_orders,
    program_of,
    wrong_programs_of,
    wrong_outputs_of,
  });
  return lesson;
}
