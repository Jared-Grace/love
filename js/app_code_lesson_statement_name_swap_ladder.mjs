import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { app_code_lesson_statement_title_code_paint_get } from "./app_code_lesson_statement_title_code_paint_get.mjs";
import { app_code_lesson_statement_title_name_id_paint } from "./app_code_lesson_statement_title_name_id_paint.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_lesson_statement_name_swap_number_pairs } from "./app_code_lesson_statement_name_swap_number_pairs.mjs";
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
import { app_code_lesson_decoy_lines_starting_values } from "./app_code_lesson_decoy_lines_starting_values.mjs";
export function app_code_lesson_statement_name_swap_ladder({
  words,
  step,
  remember_lesson,
  remember_parts,
  remember_lines,
  explain,
}) {
  arguments_assert(arguments, 1);
  ("one lesson of the ladder that builds up to swapping two names: its title, the boxes read before the questions, and questions whose programs start a and b with two numbers, run the lines the lesson is about, and write out the names it asks about");
  ("A LADDER, ONE LINE AT A TIME: each lesson's program is the one before it with one line changed, so every screen has one new thing on it and swapping arrives as the last line of a program the learner has already read, at the human's request, 2026-09-27.");
  ("step holds the lines the lesson is about (middle) and the names it writes out (logged). The reminder shows the lesson before it whole, as remember_lines, and explain is the lines of writing that lead to this lesson's program - each a list alternating plain writing and code.");
  ("The wrong answers are every way of writing the starting numbers on the answer's lines, because each mistake about swapping is one of those - see the decoy function's own note.");
  let names = app_code_lesson_statement_name_value_names();
  let name_a = list_first(names);
  let name_b = list_second(names);
  let middle = property_get(step, "middle");
  let logged = property_get(step, "logged");
  let title_code = list_join_space(middle);
  let paint = app_code_lesson_statement_title_code_paint_get(title_code);
  let name_id = app_code_lesson_statement_title_name_id_paint(words, paint);
  function program_of(pair) {
    "one question's program, from the two numbers a and b start with";
    let first = list_first(pair);
    let second = list_second(pair);
    let lets = [
      [name_a, first],
      [name_b, second],
    ];
    let lines = app_code_lesson_statement_name_swap_program(
      lets,
      middle,
      logged,
    );
    let code = list_join_newline(lines);
    return code;
  }
  function programs_get() {
    "the programs of one screen: a fresh draw of pairs, each written as its program";
    let pairs = app_code_lesson_statement_name_swap_number_pairs();
    let codes = list_map(pairs, program_of);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    programs_get,
    eval_console_log_lines,
  );
  function above(root, context) {
    "the lesson before, whole, and then the writing that leads to this lesson's program, whole";
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
      html_div_cycle_code(box_now, parts);
    }
    let example = program_of([3, 8]);
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
    decoys: app_code_lesson_decoy_lines_starting_values,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
