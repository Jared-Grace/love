import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_operators_strongest } from "./app_code_operators_strongest.mjs";
import { app_code_operators_strong } from "./app_code_operators_strong.mjs";
import { app_code_operators_weak } from "./app_code_operators_weak.mjs";
import { js_operators_comparison_symbols } from "./js_operators_comparison_symbols.mjs";
import { app_code_operators_weaker } from "./app_code_operators_weaker.mjs";
import { app_code_operators_weakest } from "./app_code_operators_weakest.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function app_code_operators_classed() {
  arguments_assert(arguments, 0);
  ("every operator this app has said how strong it is, gathered from the classes themselves: ! and Math.floor, * and /, + and -, the six comparisons, && and ||");
  ("Gathered from the classes rather than listed, so an operator added to a class is covered by whatever asks this without anybody remembering to come here. A list typed out here would agree with the classes on the day it was typed and never again.");
  ("It is the operators whose strength is SAID, which is not the same as the operators a lesson may put in a shape. The comparisons are the class reached by falling through, so an operator nobody has classed at all comes out with a comparison's strength and is indistinguishable from one - and whatever holds this list against the line an operator prints cannot see that, because it only ever asks about the operators named here.");
  let strongest = app_code_operators_strongest();
  let strong = app_code_operators_strong();
  let weak = app_code_operators_weak();
  let comparison = js_operators_comparison_symbols();
  let weaker = app_code_operators_weaker();
  let weakest = app_code_operators_weakest();
  let all = list_concat_multiple([
    strongest,
    strong,
    weak,
    comparison,
    weaker,
    weakest,
  ]);
  return all;
}
