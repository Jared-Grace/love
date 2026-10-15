import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_double_equal_symbol } from "./js_operator_double_equal_symbol.mjs";
import { js_operator_bang_equal_symbol } from "./js_operator_bang_equal_symbol.mjs";
export function app_code_operators_equating() {
  arguments_assert(arguments, 0);
  ("every operator javascript works out at the strength of asking whether two things are the same, by its symbol: ===, !==, and the loose == and != beside them");
  ("A STRENGTH class, one below the comparisons that ask which is bigger: javascript works < and the rest out first, so 5 == 7 > 4 is 5 == (7 > 4). They were one class, and the line 5 == 7 > 4 was read back as (5 == 7) > 4, and the shape (5 == 7) > 4 printed with no parentheses as a line meaning the other one. No lesson writes the two on one line yet, so no learner met it; held against javascript's own reading, every line mixing them disagreed and no other line did.");
  let strict = js_operator_triple_equal_symbol();
  let strict_not = js_operator_bang_double_equal_symbol();
  let loose = js_operator_double_equal_symbol();
  let loose_not = js_operator_bang_equal_symbol();
  let symbols = [strict, strict_not, loose, loose_not];
  return symbols;
}
