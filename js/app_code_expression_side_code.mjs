import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_side_parenthesis_is } from "./app_code_expression_side_parenthesis_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
export function app_code_expression_side_code(side, rank_least) {
  arguments_assert(arguments, 2);
  ("the code for one side of an operator, gathered into parentheses when the operator on that side is weaker than rank_least");
  ("The side asks for the strength it needs rather than being told whether to parenthesis. A side that is only a value has no operator to be weaker, so it never parentheses, and one whose operator is strong enough already reads in the right order on its own.");
  let code = app_code_expression_code(side);
  let parenthesis = app_code_expression_side_parenthesis_is(side, rank_least);
  if (parenthesis) {
    let wrapped = js_code_wrap_parenthesis(code);
    return wrapped;
  }
  return code;
}
