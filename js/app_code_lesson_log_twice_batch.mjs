import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_log_twice_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each is two lines, and each line writes out what two numbers add up to");
  ("Both lines are the line the learner already knows, so the only thing on the screen they have not read before is that there are two of them. A second line doing something newer would be asking two questions at once and only one of them would be this lesson's.");
  ("The two lines of a program never add up to the same number. What comes out is two lines in the order they were written, and a program whose two answers were equal could not show the order at all - it would read the same either way round.");
  ("No answer is a number written in any of the programs, and the eight answers are eight different numbers. A question shows one program and offers the answers of all four, so a number that is an answer in one place and a written number in another could be found by looking rather than by adding.");
  let plus = js_operator_plus_symbol();
  let cases = [
    {
      a: 4,
      b: 6,
      c: 5,
      d: 7,
    },
    {
      a: 3,
      b: 8,
      c: 6,
      d: 7,
    },
    {
      a: 5,
      b: 9,
      c: 8,
      d: 7,
    },
    {
      a: 9,
      b: 7,
      c: 8,
      d: 9,
    },
  ];
  function program_of(one) {
    "the two lines that each write out what two numbers add up to";
    let a = property_get(one, "a");
    let b = property_get(one, "b");
    let c = property_get(one, "c");
    let d = property_get(one, "d");
    let first = js_code_binary_spaced_nb(a, plus, b);
    let last = js_code_binary_spaced_nb(c, plus, d);
    let statement = js_code_console_log_statement(first);
    let statement2 = js_code_console_log_statement(last);
    let lines = [statement, statement2];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_shuffle_take_map(cases, 4, program_of);
  return codes;
}
