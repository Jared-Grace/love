import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_code_lesson_expression_comparison_and_and_operands_false() {
  arguments_assert(arguments, 0);
  ("a pair of truth values whose && is false: at least one is false");
  let patterns = [
    [true, false],
    [false, true],
    [false, false],
  ];
  let pattern = list_random_item(patterns);
  return pattern;
}
