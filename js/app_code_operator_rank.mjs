import { app_code_operators_weakest } from "./app_code_operators_weakest.mjs";
import { app_code_operators_weaker } from "./app_code_operators_weaker.mjs";
import { app_code_operators_strong } from "./app_code_operators_strong.mjs";
import { app_code_operators_weak } from "./app_code_operators_weak.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_code_operator_rank(symbol) {
  arguments_assert(arguments, 1);
  ("how early an operator is worked out, as a number that can be compared: * and / come out 4, + and - come out 3, a comparison comes out 2, && comes out 1, and || comes out 0");
  ("The classes already had names. What they did not have was an ORDER, and a line built as a shape has to be printed back as text with brackets exactly where a reader would otherwise take the parts in the wrong order - which is a question about which of two operators is stronger, not about which class either one is in.");
  ("Only the order of these numbers means anything, and nothing anywhere reads one of them as a number: a caller asks whether one rank is below another, or for the rank just above the strongest. So a class added underneath is added by moving every number up one, and nothing else has to be told.");
  let strong = app_code_operators_strong();
  let strong_is = list_includes(strong, symbol);
  if (strong_is) {
    let r = 4;
    return r;
  }
  let weak = app_code_operators_weak();
  let weak_is = list_includes(weak, symbol);
  if (weak_is) {
    let r2 = 3;
    return r2;
  }
  ("&& and || are asked about before the comparisons rather than after, because the comparisons are what is left when nothing else matched, and a class that is only reached by falling through cannot be told apart from an operator nobody has classed at all");
  let weaker = app_code_operators_weaker();
  let weaker_is = list_includes(weaker, symbol);
  if (weaker_is) {
    let r3 = 1;
    return r3;
  }
  let weakest = app_code_operators_weakest();
  let weakest_is = list_includes(weakest, symbol);
  if (weakest_is) {
    let r4 = 0;
    return r4;
  }
  let r5 = 2;
  return r5;
}
