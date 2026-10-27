import { app_code_braces_two_ifs } from "./app_code_braces_two_ifs.mjs";
import { app_code_brace_lines_example } from "./app_code_brace_lines_example.mjs";
import { app_code_braces_two_if_else } from "./app_code_braces_two_if_else.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_brace_pair_two } from "./app_code_lesson_brace_pair_two.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_brace_lines_generic } from "./app_code_lesson_brace_lines_generic.mjs";
export function app_code_lesson_brace_lines_two() {
  arguments_assert(arguments, 0);
  ("which lines stand between a pair of braces, in programs with two pairs of braces: the learner taps every line between a { and the } that closes it");
  ("Asked for by the human 2026-10-11, after Which brace pairs with which, with a version for two pairs and another for three. Placed straight after Which brace pairs with which, so both lessons on which brace pairs with which come first, and the two on lines follow in the same order, two pairs then three. Rejected: each lines lesson straight after the pairing lesson with its number of pairs, which would put two pairs, lines, three pairs, lines - the human said then, after brace matching.");
  ("Split 2026-10-11, as the human asked, into this lesson with its two pairs side by side - two ifs, or an if and its else - and The lines between braces, one inside the other, after it, so the if inside an if is sure to be asked rather than one program of four.");
  ("The writing is a first draft by Claude 2026-10-11.");
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  function above(root, context) {
    "a { beginning a section remembered, then the section as the lines between the { and its }";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_brace_pair_two,
      ["a ", left, " begins a section of code, and its ", right, " ends it."],
    );
    let box_two = app_code_container_light_blue(root);
    app_code_div_cycle_code(box_two, [
      "The lines of that section are the lines between the ",
      left,
      " and its ",
      right,
    ]);
    let code = app_code_braces_two_ifs();
    app_code_brace_lines_example(box_two, code, 0);
  }
  function codes_get() {
    "two ifs one after the other, and an if and its else, each twice";
    let code2 = app_code_braces_two_ifs();
    let code3 = app_code_braces_two_ifs();
    let code4 = app_code_braces_two_if_else();
    let code5 = app_code_braces_two_if_else();
    let codes = [code2, code3, code4, code5];
    return codes;
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The lines between braces, side by side",
    "{ ... }",
  );
  let lesson = app_code_lesson_brace_lines_generic(name_id, above, codes_get);
  return lesson;
}
