import { js_operator_or } from "./js_operator_or.mjs";
import { js_operator_and } from "./js_operator_and.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_operator_plus } from "./js_operator_plus.mjs";
import { js_operators_binary } from "./js_operators_binary.mjs";
import { list_concat_single_right } from "./list_concat_single_right.mjs";
export function app_code_operators_solvable() {
  "every operator a code lesson may put between two things and then work out, each carrying the function that works it out";
  ("It is ",
    fn_name("js_operators_binary"),
    " with plus and && added back. Plus is left out there on purpose, because between two things of unknown kind it may either add numbers or join words, and nothing beside it says which. A lesson knows what it built, so here the question does not arise.");
  ("&& and || are left out there for a different reason: that list is what the auto pass rewrites into calls, and either one stops working the moment it becomes one - it is written to leave its right side alone when the left has already settled the answer, and a call works both sides out before it is entered. A lesson never rewrites anything, so here it is simply an operator with a function beside it like the rest.");
  let operators = js_operators_binary();
  let plus = js_operator_plus();
  let with_plus = list_concat_single_right(operators, plus);
  let anding = js_operator_and();
  let with_and = list_concat_single_right(with_plus, anding);
  let oring = js_operator_or();
  let all = list_concat_single_right(with_and, oring);
  return all;
}
