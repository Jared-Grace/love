import { add } from "./add.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_operators_value_max } from "./app_code_lesson_operators_value_max.mjs";
import { app_code_lesson_statement_name_value_title_name_id } from "./app_code_lesson_statement_name_value_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { html_div_code_multiple } from "./html_div_code_multiple.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { js_code_call_arg } from "./js_code_call_arg.mjs";
import { js_code_let_assign } from "./js_code_let_assign.mjs";
import { js_console_log_name } from "./js_console_log_name.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { list_first } from "./list_first.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { list_second } from "./list_second.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_map } from "./range_map.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_statement_name_value() {
  arguments_assert(arguments, 0);
  ("giving a value a name, and reading it back: let a = 3; on one line and console.log(a); on the next writes out 3");
  ("The one new fact, and the first lesson in the course whose code stands on more than one line. Everything up to here has been one line that comes to a value. Here the first line does not write anything out at all - it puts a value away under a name - and the second line hands that name to console.log and gets the value back.");
  ("The harder examples give two values names and write out only one of them. That is where the lesson can be got wrong: the name that was not asked for is sitting right there on the screen, and its value is offered as one of the answers, because it is the answer of another question in the same set.");
  ("Nothing is said here about which line happens first. Both lines have to happen, and in this order, but a learner who has not thought about that still gets every question right - the order is used and not yet named. It is named later, when a value is given a name twice and only the second one survives.");
  ("Building the code from tokens is left switched off. The order the words of two lines go in is a second thing to learn, and this lesson is about the name.");
  let name_id = app_code_lesson_statement_name_value_title_name_id();
  let log_name = js_console_log_name();
  let name_a = "a";
  let name_b = "b";
  function log_of(name) {
    "the line that writes a name out";
    let code = js_code_call_arg(log_name, name);
    return code;
  }
  function held_of(name, value) {
    "the line that gives a value a name";
    let code = js_code_let_assign(name, text_to(value));
    return code;
  }
  function one_name(value) {
    "a name given a value, and that same name written out";
    let lines = [held_of(name_a, value), log_of(name_a)];
    let code = list_join_newline(lines);
    return code;
  }
  function two_names(other, value) {
    "two names given values, and only the second of them written out - the first is there to be read past";
    let lines = [
      held_of(name_a, other),
      held_of(name_b, value),
      log_of(name_b),
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function number_of(index) {
    "the numbers a value may be, one through the largest this course uses";
    let number = add(index, 1);
    return number;
  }
  function pair_to_codes(pair) {
    ("the two questions a pair of numbers makes: the first number asked on its own, and then asked again as the name that is NOT written out, so the value a learner would give by reading the wrong line is the answer of the question standing beside it");
    let first = list_first(pair);
    let second = list_second(pair);
    let codes = [one_name(first), two_names(first, second)];
    return codes;
  }
  function batch_get() {
    ("four questions whose four answers are all different, so no two buttons are right at once");
    let max = app_code_lesson_operators_value_max();
    let numbers = range_map(max, number_of);
    let taken = list_shuffle_take(numbers, 4);
    let pairs = list_chunk(taken, 2);
    let nested = list_map(pairs, pair_to_codes);
    let codes = list_flat(nested);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_to_list,
  );
  function above(root) {
    let box = app_code_container_light_blue(root);
    html_div_cycle_code(box, ["We can give a value a name"]);
    html_div_code(box, held_of(name_a, 3));
    html_div_cycle_code(box, [
      "This gives the name ",
      name_a,
      " the value ",
      "3",
    ]);
    html_div_cycle_code(box, ["Now writing ", name_a, " gives back ", "3"]);
    let box_logged = app_code_container_light_blue(root);
    html_div_cycle_code(box_logged, [
      "So we can put ",
      name_a,
      " inside ",
      log_name,
    ]);
    html_div_code_multiple(box_logged, [held_of(name_a, 3), log_of(name_a)]);
    html_div_cycle_code(box_logged, ["This writes out ", "3"]);
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, ["We can give more than one value a name"]);
    html_div_code_multiple(box_two, [
      held_of(name_a, 3),
      held_of(name_b, 5),
      log_of(name_b),
    ]);
    html_div_cycle_code(box_two, [
      "Only the name inside ",
      log_name,
      " is written out",
    ]);
    html_div_cycle_code(box_two, ["So this writes out ", "5", ", not ", "3"]);
  }
  let lesson = app_code_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
