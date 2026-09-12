import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_operator_called_is } from "./app_code_operator_called_is.mjs";
import { app_code_expression_paint_parenthesised } from "./app_code_expression_paint_parenthesised.mjs";
import { app_code_expression_paint_side } from "./app_code_expression_paint_side.mjs";
export function app_code_expression_paint_before_side(
  parent,
  side,
  symbol,
  rank,
  on_operator,
) {
  arguments_assert(arguments, 5);
  ("the one thing a one-sided operator acts on, written into a parent as pressable pieces and gathered the way that operator's own spelling gathers it");
  ("★ AN OPERATOR SPELLED AS A NAME WITH BRACKETS KEEPS THEM ROUND WHATEVER IS INSIDE, and one spelled as a bare symbol asks the ranks. This is the one place the two differ, and it is the whole reason this exists: asking the ranks for both means the brackets of Math.floor(14 / 4) disappear the moment the division inside them is worked out, because a lone value has no operator to be weaker and so never gathers. The learner presses the division and the line comes back reading Math.floor3.5, which is not a line at all.");
  ("The same question ",
    fn_name("app_code_expression_code"),
    " asks where it prints the line as text, so a learner pressing a line and a learner reading one are shown the same brackets.");
  let called = app_code_operator_called_is(symbol);
  if (called) {
    app_code_expression_paint_parenthesised(parent, side, on_operator);
    return;
  }
  app_code_expression_paint_side(parent, side, rank, on_operator);
}
