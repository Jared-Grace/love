import { app_code_operator_code_subject_first } from "./app_code_operator_code_subject_first.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { boolean_random } from "./boolean_random.mjs";
import { digit_positive_random } from "./digit_positive_random.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_expression_which_part_first_expression() {
  arguments_assert(arguments, 0);
  ("three digits and two operators, one from each class, so exactly one part of the line has to be solved before the other: 1 + 2 * 4, or 8 / 2 - 1");
  ("the stronger operator lands on either side, half the time each. A lesson that always put it last would teach the shape of the line rather than the rule about it - the learner would answer every question by tapping the right-hand part without ever asking which operator is there");
  ("both operators of each class appear, because the rule is about one class outranking the other rather than about * and + in particular, and one pair throughout would let it read as a fact about that pair. All four pairings were taught before this lesson, one lesson each");
  ("digits rather than larger numbers: nothing here is worked out, so a bigger number would only be more to read on the button. Nothing here divides either - the line is looked at rather than solved, so a / needs no whole answer behind it");
  let strong_symbols = app_code_operators_strong();
  let strong = list_random_item(strong_symbols);
  let weak_symbols = app_code_operators_weak();
  let weak = list_random_item(weak_symbols);
  let input = digit_positive_random();
  let inner_left = text_to(input);
  let input2 = digit_positive_random();
  let inner_right = text_to(input2);
  let input3 = digit_positive_random();
  let outer = text_to(input3);
  let inner = app_code_operator_code(inner_left, strong, inner_right);
  let strong_first = boolean_random();
  let code = app_code_operator_code_subject_first(
    strong_first,
    inner,
    outer,
    weak,
  );
  return code;
}
