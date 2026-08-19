import { app_code_operators_weakest } from "./app_code_operators_weakest.mjs";
import { app_code_operators_strong } from "./app_code_operators_strong.mjs";
import { app_code_operators_weak } from "./app_code_operators_weak.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_code_operator_rank(symbol) {
  arguments_assert(arguments, 1);
  ("how early an operator is worked out, as a number that can be compared: * and / come out 3, + and - come out 2, a comparison comes out 1, and && comes out 0");
  ("The classes already had names. What they did not have was an ORDER, and a line built as a shape has to be printed back as text with brackets exactly where a reader would otherwise take the parts in the wrong order - which is a question about which of two operators is stronger, not about which class either one is in.");
  let strong = app_code_operators_strong();
  let strong_is = list_includes(strong, symbol);
  if (strong_is) {
    let r = 3;
    return r;
  }
  let weak = app_code_operators_weak();
  let weak_is = list_includes(weak, symbol);
  if (weak_is) {
    let r2 = 2;
    return r2;
  }
  ("&& is asked about before the comparisons rather than after, because the comparisons are what is left when nothing else matched, and a class that is only reached by falling through cannot be told apart from an operator nobody has classed at all");
  let weakest = app_code_operators_weakest();
  let weakest_is = list_includes(weakest, symbol);
  if (weakest_is) {
    let r3 = 0;
    return r3;
  }
  let r4 = 1;
  return r4;
}
