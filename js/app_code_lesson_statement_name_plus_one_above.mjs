import { app_code_lesson_statement_name_copy_single } from "./app_code_lesson_statement_name_copy_single.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_statement_name_plus_one_above(root, context) {
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: a new name holding what another name holds, the program the lesson on copying a name was about, then the same program with one added to the name being copied");
  ("THE REMINDER IS THE SMALLEST PROGRAM THIS ONE GROWS FROM. It used to be the program of the lesson on keeping a total - three names and a sum of two of them - which was more to read than the lesson it stood above. Copying a name is the same program less the plus one, so the one new thing is said as the one difference between two lines.");
  ("The copy is shown holding a number rather than the fruit words the copying lesson drew it with, because the line it grows into adds to it; a learner has given names numbers since the lesson on naming a number.");
  ("Neither box's number is a starting number or an answer of the programs asked about below: those start at 4, 6, 8, 10 or 12 and end one higher, and this one holds 14.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let plus = js_operator_plus_symbol();
  let held = js_code_let_statement(name_first, 14);
  let copied = js_code_let_statement(name_last, name_first);
  let logged = js_code_console_log_statement(name_last);
  let box_copy = app_code_container_light_blue(root);
  app_code_remember_from_lesson(
    box_copy,
    context,
    app_code_lesson_statement_name_copy_single,
    ["a new name can hold what another name holds (", copied, "):"],
  );
  app_code_code_lines_writes_out(box_copy, [held, copied, logged], "14");
  let more = js_code_binary_spaced_nb(name_first, plus, 1);
  let held_more = js_code_let_statement(name_last, more);
  let box = app_code_container_light_blue(root);
  ("the sentence alone, because the example right below it is the program it talks about");
  html_div_cycle_code(box, [
    "A new name can also hold a name with one added (",
    held_more,
    " instead of ",
    copied,
    ")",
  ]);
}
