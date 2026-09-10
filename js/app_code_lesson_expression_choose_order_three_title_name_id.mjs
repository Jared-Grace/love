import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_choose_order_three_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: a three step line where the operator that goes first has to be looked for rather than read off the left, an Expressions lesson");
  ("The title names the rule rather than the length, because the length is no longer what changed. The lesson before this one is also three steps long, and every operator on it is the same strength, so the learner starts at the left without looking. Here the one that goes first can be anywhere on the line, and the rule that finds it is the work.");
  ("It names the rule and not the answer, and those come apart on this lesson's own lines. Counted over five thousand of them, four hundred and thirty six - about one in eleven - come out with every operator the same strength, like 8 / 4 * 4 / 4, and those are solved from the left with nothing for the rule to decide. A title reading * or / first would say those lines were picked by strength when they were picked by position; a title reading * / before + - says a thing that is true of every line whether or not it has a + or a - on it to fire against.");
  ("The operators are spelled apart rather than run together, because that is how the course already writes a pair of them - + - and * / and / % ** all stand as titles of their own further back. Written */ the two would also read as the end of a comment to anyone who has met one, which is a thing to have to unlearn in the one place a learner looks to find the lesson again. Each of the four is set as its own piece of code rather than each pair being set as one, because * / is not a thing that can be written in a line - it is two operators named side by side, and one box around them would say they were one expression.");
  function paint(parent) {
    let times = js_operator_asterisk_symbol();
    let divided = js_operator_division_symbol();
    let plus = js_operator_plus_symbol();
    let minus = js_operator_minus_symbol();
    html_cycle_code(parent, [
      "Solve three steps, ",
      times,
      " ",
      divided,
      " before ",
      plus,
      " ",
      minus,
    ]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
