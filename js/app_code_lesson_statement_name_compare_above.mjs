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
import { html_div_code } from "./html_div_code.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function app_code_lesson_statement_name_compare_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: the comparison a learner already knows written with two numbers, the same comparison written with two names instead, and then the same two names asked the other way round");
  ("The first box uses this lesson's own two numbers, so both of the first two boxes come out true. That is what lets a learner check the new form against the old one rather than be told it works - the answer they already know is sitting one box above the answer they are being shown.");
  ("The third box exists because only two answers are possible here. A learner who left this screen having seen true come out twice would have been given no reason to believe the line can say anything else, and the questions would then be answerable by habit.");
  ("It turns the question around rather than changing the numbers, which is the smallest change that gets the other answer. New numbers would have moved two things at once and left it open which of them the answer followed.");
  ("The reason the third box answers differently is said in the line that introduces it, not underneath it. A learner reads the code with the reason already in hand, instead of reading it, being surprised, and then being told.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let less_than = js_operator_less_than_symbol();
  let number_first = 3;
  let number_last = 5;
  let numbers_compared = js_code_binary_spaced_nb(
    number_first,
    less_than,
    number_last,
  );
  let names_compared = js_code_binary_spaced_nb(
    name_first,
    less_than,
    name_last,
  );
  let names_turned = js_code_binary_spaced_nb(name_last, less_than, name_first);
  ("the symbol is joined into the writing around it rather than given as a part of its own. The parts alternate between plain writing and code all the way along, so a part standing in an odd place comes out dressed as code - and a symbol inside a bracket in the middle of a sentence is being named, not shown.");
  let smaller_line = list_join_empty([
    "Remember, we can ask whether one number is smaller (",
    less_than,
    ") than another",
  ]);
  let turned_line = list_join_empty([
    "Asked the other way round the answer is different, because ",
    number_last,
    " is not smaller than ",
    number_first,
  ]);
  let box_remember = app_code_container_light_blue(root);
  html_div_cycle_code(box_remember, [smaller_line]);
  let code = js_code_console_log_statement(numbers_compared);
  html_div_code(box_remember, code);
  let value = js_keyword_true();
  app_code_writes_out_line(box_remember, value);
  let box_names = app_code_container_light_blue(root);
  html_div_cycle_code(box_names, ["Suppose we give two numbers names"]);
  let code2 = js_code_let_statement(name_first, number_first);
  html_div_code(box_names, code2);
  let code3 = js_code_let_statement(name_last, number_last);
  html_div_code(box_names, code3);
  html_div_cycle_code(box_names, [
    "However, we can also ask the same question using their names, instead of writing out the numbers themselves",
  ]);
  let code4 = js_code_console_log_statement(names_compared);
  html_div_code(box_names, code4);
  let value2 = js_keyword_true();
  app_code_writes_out_line(box_names, value2);
  let box_turned = app_code_container_light_blue(root);
  html_div_cycle_code(box_turned, [turned_line]);
  html_div_code(box_turned, code2);
  html_div_code(box_turned, code3);
  let code5 = js_code_console_log_statement(names_turned);
  html_div_code(box_turned, code5);
  let value3 = js_keyword_false();
  app_code_writes_out_line(box_turned, value3);
}
