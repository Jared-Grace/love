import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
export function app_code_lesson_statement_name_value_pair_codes(
  pair,
  one_name,
  two_names,
) {
  arguments_assert(arguments, 3);
  ("the two questions a pair of numbers makes: the first number asked on its own, and then asked again as the name that is NOT written out, so the value a learner would give by reading the wrong line is the answer of the question standing beside it");
  let first = list_first(pair);
  let second = list_second(pair);
  let v = one_name(first);
  let v7 = two_names(first, second);
  let codes = [v, v7];
  return codes;
}
