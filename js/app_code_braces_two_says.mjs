import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
export function app_code_braces_two_says() {
  arguments_assert(arguments, 0);
  ("the two lines the programs with two pairs of braces write out, love and then joy, the first two fruits of the Spirit");
  let fruits = fruits_of_the_spirit();
  let love = list_get(fruits, 0);
  let joy = list_get(fruits, 1);
  let say_love = app_code_word_console_log_statement(love);
  let say_joy = app_code_word_console_log_statement(joy);
  let says = {
    say_love,
    say_joy,
  };
  return says;
}
