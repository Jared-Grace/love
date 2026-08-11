import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_arithmetic_equality_equality(
  left,
  right,
) {
  arguments_assert(arguments, 2);
  ("one === comparison as { code, key }: code is the comparison string, key is the two sides' operators joined, so neighbouring examples can be kept from sharing an operator pair");
  let code = text_combine_multiple([left.code, " === ", right.code]);
  let key = text_combine_multiple([left.symbol, right.symbol]);
  let example = {
    code,
    key,
  };
  return example;
}
