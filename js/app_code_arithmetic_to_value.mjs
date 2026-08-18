import { app_code_arithmetic_to_value_parts } from "./app_code_arithmetic_to_value_parts.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_arithmetic_to_value(value) {
  ("a random small arithmetic expression that comes to the value asked for (value at least 2), written out: { code, symbol } - code is the line, symbol is its operator, so a caller can vary the operator across examples");
  ("The writing of what the piece maker made. Which forms exist and which numbers they use is decided in one place, so a lesson that prints the line and a lesson that presses it a step at a time can never be shown two different sets of lines.");
  let parts = app_code_arithmetic_to_value_parts(value);
  let left = text_to(parts.left);
  let symbol = parts.symbol;
  let right = text_to(parts.right);
  let code = text_combine_multiple([left, " ", symbol, " ", right]);
  let result = {
    code,
    symbol,
  };
  return result;
}
