import { app_code_expression_step_operands_dividends } from "./app_code_expression_step_operands_dividends.mjs";
import { app_code_expression_step_value_least } from "./app_code_expression_step_value_least.mjs";
import { app_code_expression_step_value_most } from "./app_code_expression_step_value_most.mjs";
import { add } from "./add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { equal } from "./equal.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_filter } from "./list_filter.mjs";
import { modulo } from "./modulo.mjs";
import { multiply } from "./multiply.mjs";
import { range_from } from "./range_from.mjs";
import { subtract } from "./subtract.mjs";
export function app_code_expression_step_operands(value, symbol, value_left) {
  arguments_assert(arguments, 3);
  ("every number that may stand on the other side of one operator so that the step comes out a whole number within the allowed range: 6 with a divide and the 6 on the left gives 2 and 3, because 6 / 2 and 6 / 3 both land on a whole number, while 6 / 4 and 6 / 5 do not");
  ("A line is grown one operator at a time, and this is what keeps every step of it answerable. Choosing the numbers first and checking the line afterwards would have to throw away the lines that failed, and a lesson that draws until it gets a good one has no promise it will ever get one.");
  ("An empty answer is a real answer and not a fault: 8 has nothing that may be added to it, because every number allowed would carry the step past 9. The caller reads emptiness as this operator not being available here and reaches for another one.");
  ("The side matters for the two operators that read differently each way round. 9 with a minus on the left may have 2 through 7 taken FROM it; the same 9 on the right needs something bigger than itself in front of it, which no allowed number is.");
  let least = app_code_expression_step_value_least();
  let most = app_code_expression_step_value_most();
  function exact_is(candidate) {
    "a divisor that leaves nothing over";
    let left_over = modulo(value, candidate);
    let none = equal(left_over, 0);
    return none;
  }
  function dividend_of(multiplier) {
    "the number this value divides into a whole number of times";
    let dividend = multiply(value, multiplier);
    return dividend;
  }
  let plus = js_operator_plus_symbol();
  let plus_is = equal(symbol, plus);
  if (plus_is) {
    let sum_most = subtract(most, value);
    let sums = range_from(least, sum_most);
    return sums;
  }
  let minus = js_operator_minus_symbol();
  let minus_is = equal(symbol, minus);
  if (minus_is) {
    if (value_left) {
      let taken_most = subtract(value, least);
      let taken = range_from(least, taken_most);
      return taken;
    }
    let whole_least = add(value, least);
    let wholes = range_from(whole_least, most);
    return wholes;
  }
  let times = js_operator_asterisk_symbol();
  let times_is = equal(symbol, times);
  if (times_is) {
    let factor_most = divide_floor(most, value);
    let factors = range_from(least, factor_most);
    return factors;
  }
  ("what is left is the divide, which reads one way with the value above the line and another with it below");
  if (value_left) {
    let divisor_most = divide_floor(value, least);
    let candidates = range_from(least, divisor_most);
    let divisors = list_filter(candidates, exact_is);
    return divisors;
  }
  let dividends = app_code_expression_step_operands_dividends(
    most,
    value,
    least,
    dividend_of,
  );
  return dividends;
}
