import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_code_dark_lines_pointed } from "./app_code_code_dark_lines_pointed.mjs";
import { app_code_output_pointed } from "./app_code_output_pointed.mjs";
import { app_code_code_lines_writes_out_on } from "./app_code_code_lines_writes_out_on.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
import { equal } from "./equal.mjs";
import { function_is } from "./function_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_statement_formula({
  words,
  title_code,
  names,
  values_get,
  example_values,
  step,
  remember_lesson,
  remember_parts,
  remember_lines,
  explain,
  decoys,
  example_pointers,
}) {
  arguments_assert(arguments, 1);
  ("a lesson whose programs start some names with numbers, run a few short lines, and write out the names the lesson asks about: its title, the boxes read before the questions, and the questions");
  ("It is the shape of the swapping ladder and of the formulas split into short lines: both are a program the learner already knows with its middle lines changed, so each lesson hands in only its starting names, how a screen's numbers are drawn, the numbers its boxes show, the lines, and the writing around them.");
  ("title_code is the one short piece of code the home title shows - the key line, not all of them, so a title can be skimmed. names are the names the program starts, in order; values_get hands back one list of numbers per question, each as long as names; example_values is the one list the boxes read before the questions use.");
  ("step holds the lines the lesson is about (middle) and the names it writes out (logged). The reminder shows the earlier lesson's program whole, as remember_lines, and explain is the lines of writing that lead to this lesson's program - each a list alternating plain writing and code, or a function drawing a picture into the box, or the marker ",
    fn_name("app_code_explain_container_next"),
    " starting a new box. remember_lines may instead be a function drawing the reminder, for an earlier lesson that is not a program. decoys is the wrong-answer maker, or null to use the other questions' answers. example_pointers is null, or a list of pairs of texts and a colour, as a pointed line takes, colouring those numbers in the last example's code and output the way the writing above colours them; or a function (box, lines, output) that draws that last example itself, for a lesson whose writing colours part of a number, as the last-digit lessons do.");
  let middle = property_get(step, "middle");
  let logged = property_get(step, "logged");
  let name_id = app_code_lesson_statement_title_name_id(words, title_code);
  function program_of(values) {
    "one question's program, from the numbers its names start with";
    function let_pair(name, index) {
      "one starting name with its number";
      let value = list_get(values, index);
      let pair = [name, value];
      return pair;
    }
    let lets = list_map_index(names, let_pair);
    let lines = app_code_lesson_statement_name_swap_program(
      lets,
      middle,
      logged,
    );
    let code = list_join_newline(lines);
    return code;
  }
  function programs_get() {
    "the programs of one screen: a fresh draw of numbers, each written as its program";
    let values_list = values_get();
    let codes = list_map(values_list, program_of);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    programs_get,
    eval_console_log_lines,
  );
  function above(root, context) {
    "the earlier lesson, whole, and then the writing that leads to this lesson's program, whole";
    let box_before = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_before,
      context,
      remember_lesson,
      remember_parts,
    );
    if (function_is(remember_lines)) {
      ("a reminder of a lesson whose shape is not a program, such as an expression beside its value, is drawn by a function so it can be quoted in that lesson's own shape");
      ("It is handed the screen's context as an explain drawing is, so a reminder can hold a button to a second lesson it leans on");
      remember_lines(box_before, context);
    } else {
      let code_before = list_join_newline(remember_lines);
      let output_before = eval_console_log_lines(code_before);
      app_code_code_lines_writes_out(box_before, remember_lines, output_before);
    }
    let box_now = app_code_container_light_blue(root);
    for (let parts of explain) {
      ("an entry is either a line of writing, as a list, or a picture, as a function that draws into the box. The drawing is handed the screen's context too, so a sentence in it can hold a button, such as the one to an earlier lesson it leans on; a drawing that has no button ignores it");
      if (equal(parts, app_code_explain_container_next)) {
        box_now = app_code_container_light_blue(root);
      } else if (function_is(parts)) {
        parts(box_now, context);
      } else {
        html_div_cycle_code(box_now, parts);
      }
    }
    let example = program_of(example_values);
    let lines_now = text_split_newline(example);
    let output_now = eval_console_log_lines(example);
    if (null_is(example_pointers)) {
      app_code_code_lines_writes_out(box_now, lines_now, output_now);
    } else if (function_is(example_pointers)) {
      example_pointers(box_now, lines_now, output_now);
    } else {
      let on_code = app_code_code_dark_lines_pointed(example_pointers);
      let on_output = app_code_output_pointed(example_pointers);
      app_code_code_lines_writes_out_on(
        box_now,
        lines_now,
        output_now,
        on_code,
        on_output,
      );
    }
    ("the program just worked is handed back, so the example underneath is drawn with other numbers rather than showing the same program a second time, asked by the human 2026-09-30");
    return example;
  }
  let lesson = app_code_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
