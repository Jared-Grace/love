import { app_code_lesson_token_order_braces } from "./app_code_lesson_token_order_braces.mjs";
import { app_code_brace_pair_programs_two } from "./app_code_brace_pair_programs_two.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_braces_two_nested } from "./app_code_braces_two_nested.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_code_dark_lines_braces_paired_random } from "./app_code_code_dark_lines_braces_paired_random.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_brace_pair_generic } from "./app_code_lesson_brace_pair_generic.mjs";
export function app_code_lesson_brace_pair_two() {
  arguments_assert(arguments, 0);
  ("which brace pairs with which, in programs with two pairs of braces: in if (a) { if (b) { ... } }, the first { is closed by the last }, not by the } nearest to it");
  ("Asked for by the human 2026-10-11, as a version of Which brace pairs with which with two pairs instead of three, placed straight before it. Its opening says that braces come in pairs, which the lesson with three pairs said first and now remembers from here.");
  ("Every program has exactly two pairs of braces, so every question offers two buttons. The lesson with three pairs rejected two pairs for leaving a guess right half the time; the human asked for it here as the easier step before three, as a two-button quiz still teaches.");
  ("Moved 2026-10-11 by the human into the lessons on two pairs of braces, straight after The braces among the tokens, with no colors and before The same if twice, so two pairs are explained fully before their output is asked; it now remembers The braces among the tokens. Its programs with an if inside an if, and an if and its else, are read here only for their braces, as in the lessons on the braces among the tokens. Rejected: remembering If inside an if, which now comes after it.");
  ("The writing is moved from Which brace pairs with which 2026-10-11, and was a first draft by Claude 2026-10-09.");
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  function above(root, context) {
    "the braces among the tokens remembered, then braces in pairs, shown in colours";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_token_order_braces,
      ["the braces of code are its ", left, " and ", right, " tokens."],
    );
    let box_paired = app_code_container_light_blue(root);
    app_code_div_cycle_code(box_paired, [
      "Braces come in pairs. Every ",
      left,
      " has a matching ",
      right,
      ", which means every ",
      right,
      " has a matching ",
      left,
      " too",
    ]);
    app_code_div_cycle_code(box_paired, [
      "A ",
      left,
      " begins a section of code, and its ",
      right,
      " ends it",
    ]);
    app_code_div_cycle_code(box_paired, [
      "Here each pair has a colour of its own:",
    ]);
    let paired_div = html_div(box_paired);
    let nested = app_code_braces_two_nested();
    app_code_code_dark_lines_braces_paired_random(paired_div, nested);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Which brace pairs with which, two pairs",
    "{ { } }",
  );
  let lesson = app_code_lesson_brace_pair_generic(
    name_id,
    above,
    app_code_brace_pair_programs_two,
    2,
  );
  return lesson;
}
