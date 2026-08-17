import { arguments_assert } from "./arguments_assert.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { range_from } from "./range_from.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_expression_step_operands_dividends(
  most,
  value,
  least,
  dividend_of,
) {
  arguments_assert(arguments, 4);
  let multiplier_most = divide_floor(most, value);
  let multipliers = range_from(least, multiplier_most);
  let dividends = list_map(multipliers, dividend_of);
  return dividends;
}
