import { arguments_assert } from "./arguments_assert.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_get } from "./list_get.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { list_add } from "./list_add.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { text_to } from "./text_to.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_code_lesson_expression_whole_part_both_decoys(
  question,
  answer,
) {
  arguments_assert(arguments, 2);
  ("tempting partial answers: the QUOTIENT (Math.floor(a / b) - rounded down but forgot to multiply by the divisor), the REMAINDER (a - whole part), and the raw decimal a / b when it is short and clean (skipped when it repeats, like 2 / 3)");
  let nums = text_integers(question);
  let dividend = list_get(nums, 0);
  let divisor = list_get(nums, 1);
  let list = [];
  let item = divide_floor(dividend, divisor);
  list_add(list, item);
  let item2 = subtract(dividend, answer);
  list_add(list, item2);
  let raw = divide(dividend, divisor);
  let raw_text = text_to(raw);
  let clean = text_regex_match(raw_text, /^[0-9]+(\.[0-9]{1,3})?$/);
  if (null_not_is(clean)) {
    list_add(list, raw_text);
  }
  return list;
}
