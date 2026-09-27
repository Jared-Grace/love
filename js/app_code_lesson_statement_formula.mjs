import { function_is } from "./function_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_statement_title_code_paint_get } from "./app_code_lesson_statement_title_code_paint_get.mjs";
import { app_code_lesson_statement_title_name_id_paint } from "./app_code_lesson_statement_title_name_id_paint.mjs";
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
}) {
  arguments_assert(arguments, 1);
  ("a lesson whose programs start some names with numbers, run a few short lines, and write out the names the lesson asks about: its title, the boxes read before the questions, and the questions");
  ("It is the shape of the swapping ladder and of the formulas split into short lines: both are a program the learner already knows with its middle lines changed, so each lesson hands in only its starting names, how a screen's numbers are drawn, the numbers its boxes show, the lines, and the writing around them.");
  ("title_code is the one short piece of code the home title shows - the key line, not all of them, so a title can be skimmed. names are the names the program starts, in order; values_get hands back one list of numbers per question, each as long as names; example_values is the one list the boxes read before the questions use.");
  ("step holds the lines the lesson is about (middle) and the names it writes out (logged). The reminder shows the earlier lesson's program whole, as remember_lines, and explain is the lines of writing that lead to this lesson's program - each a list alternating plain writing and code, or a function drawing a picture into the box. decoys is the wrong-answer maker, or null to use the other questions' answers.");
  let middle = property_get(step, "middle");
  let logged = property_get(step, "logged");
  let paint = app_code_lesson_statement_title_code_paint_get(title_code);
  let name_id = app_code_lesson_statement_title_name_id_paint(words, paint);
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
    let code_before = list_join_newline(remember_lines);
    let output_before = eval_console_log_lines(code_before);
    app_code_code_lines_writes_out(box_before, remember_lines, output_before);
    let box_now = app_code_container_light_blue(root);
    for (let parts of explain) {
      ("an entry is either a line of writing, as a list, or a picture, as a function that draws into the box");
      if (function_is(parts)) {
        parts(box_now);
      } else {
        html_div_cycle_code(box_now, parts);
      }
    }
    let example = program_of(example_values);
    let lines_now = text_split_newline(example);
    let output_now = eval_console_log_lines(example);
    app_code_code_lines_writes_out(box_now, lines_now, output_now);
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
