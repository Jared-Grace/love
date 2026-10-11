import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_two_says } from "./app_code_braces_two_says.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_braces_three_says() {
  arguments_assert(arguments, 0);
  ("the three lines the programs with three pairs of braces write out, love, joy and then peace, the first three fruits of the Spirit; the first two are the ones the programs with two pairs write out");
  let says = app_code_braces_two_says();
  let fruits = fruits_of_the_spirit();
  let peace = list_get(fruits, 2);
  let say_peace = app_code_word_console_log_statement(peace);
  let three = {
    say_love: property_get(says, "say_love"),
    say_joy: property_get(says, "say_joy"),
    say_peace,
  };
  return three;
}
