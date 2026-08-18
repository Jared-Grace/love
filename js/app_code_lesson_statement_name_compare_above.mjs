import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_code_lines } from "./html_div_code_lines.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function app_code_lesson_statement_name_compare_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: the comparison a learner already knows written with two numbers, the same comparison written with two names instead, and then the same two names asked the other way round");
  ("The first box uses this lesson's own two numbers, so both of the first two boxes come out true. That is what lets a learner check the new form against the old one rather than be told it works - the answer they already know is sitting one box above the answer they are being shown.");
  ("The third box exists because only two answers are possible here. A learner who left this screen having seen true come out twice would have been given no reason to believe the line can say anything else, and the questions would then be answerable by habit.");
  ("It turns the question around rather than changing the numbers, which is the smallest change that gets the other answer. New numbers would have moved two things at once and left it open which of them the answer followed.");
  ("The reason the third box answers differently is said in the line that introduces it, not underneath it. A learner reads the code with the reason already in hand, instead of reading it, being surprised, and then being told.");
  ("The second box's line shows both ways in it rather than naming only the new one, and says the old way first inside the line as well as first on the screen - written the same way as the sixth Statements lesson, which is the screen this one changes one symbol of.");
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
    "Asked the other way round the answer is different, because ",
    number_last,
    " is not smaller than ",
    number_first,
  ]);
  let box_remember = app_code_container_light_blue(root);
  html_div_cycle_code(box_remember, [
    "Remember, we can ask whether one number is smaller (",
    smaller_than,
    ") than another",
  ]);
  let logged_numbers = js_code_console_log_statement(numbers_compared);
  let value = js_keyword_true();
  app_code_code_lines_writes_out(box_remember, [logged_numbers], value);
  let box_names = app_code_container_light_blue(root);
  html_div_cycle_code(box_names, ["Suppose we give two numbers names"]);
  ("the two lines are handed over together rather than one at a time, because nothing is said between them: they are one program, and the quiz and the worked example of this same lesson have always drawn a program as one chip.");
  let held_first = js_code_let_statement(name_first, number_first);
  let held_last = js_code_let_statement(name_last, number_last);
  html_div_code_lines(box_names, [held_first, held_last]);
  html_div_cycle_code(box_names, [
    "Instead of writing out the numbers themselves (",
    numbers_compared,
    "), we can also ask the same question using their names (",
    names_compared,
    "):",
  ]);
  let logged_names = js_code_console_log_statement(names_compared);
  let value2 = js_keyword_true();
  app_code_code_lines_writes_out(box_names, [logged_names], value2);
  let box_turned = app_code_container_light_blue(root);
  html_div_cycle_code(box_turned, [turned_line]);
  let logged_turned = js_code_console_log_statement(names_turned);
  let lines_turned = [held_first, held_last, logged_turned];
  let value3 = js_keyword_false();
  app_code_code_lines_writes_out(box_turned, lines_turned, value3);
}
