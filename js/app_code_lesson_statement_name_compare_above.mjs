import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_expression_less_than } from "./app_code_lesson_expression_less_than.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { html_div_code_lines } from "./html_div_code_lines.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
export function app_code_lesson_statement_name_compare_above(root, context) {
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: the comparison a learner already knows written with two numbers, the same comparison written with two names instead, and then the same two names asked the other way round");
  ("The first box uses this lesson's own two numbers, so both of the first two boxes come out true. That is what lets a learner check the new form against the old one rather than be told it works - the answer they already know is sitting one box above the answer they are being shown.");
  ("The third box exists because only two answers are possible here. A learner who left this screen having seen true come out twice would have been given no reason to believe the line can say anything else, and the questions would then be answerable by habit.");
  ("It turns the question around rather than changing the numbers, which is the smallest change that gets the other answer. New numbers would have moved two things at once and left it open which of them the answer followed.");
  ("The reason the third box answers differently is said in the line that introduces it, not underneath it. A learner reads the code with the reason already in hand, instead of reading it, being surprised, and then being told.");
  ("The second box's line shows both ways in it rather than naming only the new one, and says the old way first inside the line as well as first on the screen - written the same way as the lesson that adds two names, which is the screen this one changes one symbol of.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let smaller_than = js_operator_less_than_symbol();
  let number_first = 3;
  let number_last = 5;
  let numbers_compared = js_code_binary_spaced_nb(
    number_first,
    smaller_than,
    number_last,
  );
  let names_compared = js_code_binary_spaced_nb(
    name_first,
    smaller_than,
    name_last,
  );
  let names_turned = js_code_binary_spaced_nb(
    name_last,
    smaller_than,
    name_first,
  );
  ("the symbol is a part of its own, so it comes out dressed as code. The parts alternate between plain writing and code all the way along, and a symbol standing in an odd place is what makes a symbol callout - the same device the Operators lessons name their symbol with, and the same one the sixth Statements lesson names its plus with. The numbers in the third box's line are not callouts and stay joined into the writing: they are being counted, not named.");
  let turned_line = list_join_empty([
    "Now the answer is different, because ",
    number_last,
    " is not smaller than ",
    number_first,
    ":",
  ]);
  let box_remember = app_code_container_light_blue(root);
  app_code_remember_from_lesson(
    box_remember,
    context,
    app_code_lesson_expression_less_than,
    [
      "we can ask whether one number is smaller (",
      smaller_than,
      ") than another:",
    ],
  );
  let logged_numbers = js_code_console_log_statement(numbers_compared);
  let value = js_keyword_true();
  app_code_code_lines_writes_out(box_remember, [logged_numbers], value);
  let box_names = app_code_container_light_blue(root);
  ("the names and the numbers are named in brackets, drawn as code, rather than left as the words two numbers and names. The two lines under this one give one name each to one number each, and which letter went with which number is the thing every later line on this screen rests on.");
  html_div_cycle_code(box_names, [
    "Suppose we give names (",
    name_first,
    ", ",
    name_last,
    ") to two numbers (",
    number_first,
    ", ",
    number_last,
    "):",
  ]);
  ("the two lines are handed over together rather than one at a time, because nothing is said between them: they are one program, and the quiz and the worked example of this same lesson have always drawn a program as one chip.");
  let held_first = js_code_let_statement(name_first, number_first);
  let held_last = js_code_let_statement(name_last, number_last);
  html_div_code_lines(box_names, [held_first, held_last]);
  ("two lines rather than one, because they are two facts: what the symbol has been used with so far, and what else it may be used with. Said in one sentence the old way is a subordinate clause a learner reads past on the way to the new one, and the two forms are then never set against each other.");
  html_div_cycle_code(box_names, [
    "So far we have only used ",
    smaller_than,
    " with numbers (like ",
    numbers_compared,
    ")",
  ]);
  html_div_cycle_code(box_names, [
    "We can also use ",
    smaller_than,
    " with names (like ",
    names_compared,
    "):",
  ]);
  ("A BOX THAT SHOWS WHAT A PROGRAM WRITES OUT SHOWS THE WHOLE PROGRAM. The two naming lines are drawn once above as the thing being supposed, and again inside this program because the answer under it is only checkable against a program that runs on its own. Shown as the log line alone, the answer rested on two lines a learner had to carry down from further up the box, and the box below this one already draws all three.");
  let logged_names = js_code_console_log_statement(names_compared);
  let value2 = js_keyword_true();
  let lines_names = [held_first, held_last, logged_names];
  app_code_code_lines_writes_out(box_names, lines_names, value2);
  let box_turned = app_code_container_light_blue(root);
  ("the swap is written out as the two comparisons themselves, one turning into the other, before the answer is spoken about. Asked the other way round named the change in words only, and a learner had to build the turned-round line in their head to see what was being asked - which is exactly the line drawn a row below.");
  html_div_cycle_code(box_turned, [
    "We swap the ",
    name_first,
    " and the ",
    name_last,
    " in ",
    names_compared,
    " to get ",
    names_turned,
  ]);
  html_div_cycle_code(box_turned, [turned_line]);
  let logged_turned = js_code_console_log_statement(names_turned);
  let lines_turned = [held_first, held_last, logged_turned];
  let value3 = js_keyword_false();
  app_code_code_lines_writes_out(box_turned, lines_turned, value3);
}
