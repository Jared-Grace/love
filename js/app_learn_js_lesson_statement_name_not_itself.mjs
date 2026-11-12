import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { app_learn_js_lesson_statement_name_value_name } from "./app_learn_js_lesson_statement_name_value_name.mjs";
import { js_code_not } from "./js_code_not.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_statement_name_not } from "./app_learn_js_lesson_statement_name_not.mjs";
import { app_learn_js_lesson_statement_name_one_more } from "./app_learn_js_lesson_statement_name_one_more.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_statement_name_not_itself() {
  arguments_assert(arguments, 0);
  ("a name given its own opposite: let a = true; a = !a; console.log(a); writes out false, and the same line twice writes out true again");
  ("The two halves are both taught: the opposite of a name, kept under a new name, and a name given one more than it holds. This puts them together, as The opposite of a name followed by One more did for + 1: the opposite is kept under the same name. It comes before the loops that flip a true or false value each run, so the flip is not new when the loop is.");
  ("A screen asks four programs - each start, true and false, flipped once and flipped twice - in a fresh order, so the answer cannot be read off the start alone. A name holding true or false can hold only two values, so a question offers two buttons.");
  ("Chosen by the human 2026-11-12, placed right after The opposite of a name rather than with the loops. The writing is a first draft by Claude 2026-11-12.");
  let symbol = js_operator_bang_symbol();
  let name = app_learn_js_lesson_statement_name_value_name();
  let flip = name + " = " + js_code_not(name) + ";";
  let logged = js_code_console_log_statement(name);
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "A name given its own opposite",
    flip,
  );
  function lines_of(value, flips) {
    "the lines that give the name a true or false value, flip it flips times, and write it out";
    let code = js_code_let_statement(name, value);
    let lines = [code];
    for (let k = 0; less_than(k, flips); k++) {
      lines.push(flip);
    }
    lines.push(logged);
    return lines;
  }
  function programs_get() {
    "each start flipped once and twice, in a fresh order each screen";
    let list = lines_of(true, 1);
    let joined = list_join_newline(list);
    let list2 = lines_of(false, 1);
    let joined2 = list_join_newline(list2);
    let list3 = lines_of(true, 2);
    let joined3 = list_join_newline(list3);
    let list4 = lines_of(false, 2);
    let joined4 = list_join_newline(list4);
    let codes = [joined, joined2, joined3, joined4];
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    programs_get,
    eval_console_log_to_list,
  );
  function above(root, context) {
    "the opposite kept under a new name remembered, a name given a new value from itself remembered, then the two together, then twice";
    let box_not = app_learn_js_container_light_blue(root);
    let prefixed = js_code_not(name);
    app_learn_js_remember_from_lesson(
      box_not,
      context,
      app_learn_js_lesson_statement_name_not,
      ["", prefixed, " is the opposite of ", name],
    );
    let box_more = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_more,
      context,
      app_learn_js_lesson_statement_name_one_more,
      [
        "",
        name + " = " + name + " + 1;",
        " reads what ",
        name,
        " holds, then gives ",
        name,
        " that plus one",
      ],
    );
    let box_flip = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_flip, [
      "The same way, ",
      flip,
      " reads what ",
      name,
      " holds, then gives ",
      name,
      " its opposite (",
      symbol,
      "):",
    ]);
    let lines2 = lines_of(true, 1);
    app_learn_js_code_lines_writes_out(box_flip, lines2, "false");
    let box_twice = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_twice, [
      "Done twice, the opposite of the opposite is where it started:",
    ]);
    let lines3 = lines_of(true, 2);
    app_learn_js_code_lines_writes_out(box_twice, lines3, "true");
  }
  let lesson = app_learn_js_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: 2,
  });
  return lesson;
}
