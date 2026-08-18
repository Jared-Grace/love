import { app_code_expression_value_decoys } from "./app_code_expression_value_decoys.mjs";
import { app_code_expression_value_decoys_boolean } from "./app_code_expression_value_decoys_boolean.mjs";
import { app_code_operator_comparison_is } from "./app_code_operator_comparison_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { number_is } from "./number_is.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_expression_value_decoys_mixed(current, node) {
  arguments_assert(arguments, 2);
  ("the wrong values to offer for the part a learner just chose, on a line that holds both kinds of operator at once: the comparison is answered with the other of true and false, and an arithmetic part with the wrong numbers the arithmetic lessons already offer");
  ("One line, two kinds of question. On 3 + 4 === 5 + 2 the first two presses ask for a number and the third asks for a true or false, and a single set of wrong answers cannot serve both: true offered beside 7 is not a mistake anybody makes, and 14 offered beside true is not a reading of the line at all.");
  ("Which kind it is comes from the operator that was pressed rather than from how far through the line the learner is. Counting steps would be right on this lesson's shape and quietly wrong on the next one built from the same pieces.");
  ("The arithmetic side keeps only the wrong values that are numbers, because the set it borrows includes what the WHOLE line comes to - which on a line like this one is a true or a false. That is a real mistake on a line of numbers, where it is the near-answer a learner reaches for; here it is a different kind of thing altogether, and reads as the odd one out rather than as a tempting reading.");
  let symbol = property_get(node, "operator");
  let comparison_is = app_code_operator_comparison_is(symbol);
  if (comparison_is) {
    let boolean_decoys = app_code_expression_value_decoys_boolean(current, node);
    return boolean_decoys;
  }
  let candidates = app_code_expression_value_decoys(current, node);
  let decoys = list_filter(candidates, number_is);
  return decoys;
}
