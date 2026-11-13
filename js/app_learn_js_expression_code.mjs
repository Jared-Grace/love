import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_expression_node_is } from "./app_learn_js_expression_node_is.mjs";
import { not } from "./not.mjs";
import { app_learn_js_expression_value_code } from "./app_learn_js_expression_value_code.mjs";
import { app_learn_js_expression_name_is } from "./app_learn_js_expression_name_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_js_expression_node_index_is } from "./app_learn_js_expression_node_index_is.mjs";
import { js_code_index } from "./js_code_index.mjs";
import { app_learn_js_expression_node_before_is } from "./app_learn_js_expression_node_before_is.mjs";
import { app_learn_js_operator_called_is } from "./app_learn_js_operator_called_is.mjs";
import { js_code_called } from "./js_code_called.mjs";
import { app_learn_js_operator_rank } from "./app_learn_js_operator_rank.mjs";
import { app_learn_js_expression_side_code } from "./app_learn_js_expression_side_code.mjs";
import { app_learn_js_operator_code_before } from "./app_learn_js_operator_code_before.mjs";
import { app_learn_js_operator_includes_symbol } from "./app_learn_js_operator_includes_symbol.mjs";
import { equal } from "./equal.mjs";
import { app_learn_js_operators_called_two } from "./app_learn_js_operators_called_two.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_learn_js_operator_rank_least_left } from "./app_learn_js_operator_rank_least_left.mjs";
import { app_learn_js_operator_rank_least_right } from "./app_learn_js_operator_rank_least_right.mjs";
import { app_learn_js_operator_code } from "./app_learn_js_operator_code.mjs";
export function app_learn_js_expression_code(item) {
  arguments_assert(arguments, 1);
  ("the code a learner reads for a whole expression shape: the shape for 1 + 2 * 3 prints as 1 + 2 * 3, and the shape for (1 + 2) * 3 prints with its parentheses");
  ("Parentheses are worked out rather than remembered. The shape says which operator holds which, so a parenthesis is needed exactly where leaving it out would let a reader take the parts in a different order - and that is a question the ranks answer. Remembering instead which parentheses were typed would let a shape print as a line that does not mean it.");
  let node_is = app_learn_js_expression_node_is(item);
  if (not(node_is)) {
    let text = app_learn_js_expression_value_code(item);
    return text;
  }
  ("2026-10-17: a name not yet read is written as the name, the way the line was typed");
  if (app_learn_js_expression_name_is(item)) {
    let name = property_get(item, "name");
    return name;
  }
  if (app_learn_js_expression_node_index_is(item)) {
    ("2026-11-09: an item read by its index is written with the array's name and the index inside its brackets, which gather the index whatever it holds");
    let array_name = property_get(item, "name");
    let index = property_get(item, "right");
    let index_code = app_learn_js_expression_code(index);
    let indexed = js_code_index(array_name, index_code);
    return indexed;
  }
  let symbol = property_get(item, "operator");
  let before_is = app_learn_js_expression_node_before_is(item);
  if (before_is) {
    ("a one-sided operator asks its single side for its own strength rather than one above it: !!true needs no parentheses because the second ! is worked out first anyway, while !(3 < 5) does");
    let acted_on = property_get(item, "right");
    let called = app_learn_js_operator_called_is(symbol);
    if (called) {
      ("an operator spelled as a name with brackets keeps them round whatever is inside, so it is never asked whether the inside needs gathering: after the division in Math.floor(14 / 4) has been worked out the line reads Math.floor(3.5), where a gathering would have left Math.floor3.5");
      let inside_code = app_learn_js_expression_code(acted_on);
      let code_called = js_code_called(symbol, inside_code);
      return code_called;
    }
    let rank = app_learn_js_operator_rank(symbol);
    let acted_on_code = app_learn_js_expression_side_code(acted_on, rank);
    let code_before = app_learn_js_operator_code_before(symbol, acted_on_code);
    return code_before;
  }
  ("each side asks for the strength it has to reach, and the two sides do not ask for the same one: the side an operator works out LAST has to be gathered when it holds an operator of equal strength, because otherwise a reader takes the line the other way round. 8 / 4 / 2 is not 8 / (4 / 2), while nothing on the left of a divide ever needs that - and a power is the other way round, so (2 ** 3) ** 2 keeps its marks and 2 ** 3 ** 2 needs none.");
  let includes_symbol = app_learn_js_operator_includes_symbol();
  if (equal(symbol, includes_symbol)) {
    ('2026-11-13: "obey".includes("e"): the string, gathered only if something weaker stands there, then .includes, then the piece whole in its brackets');
    let rank_includes = app_learn_js_operator_rank(symbol);
    let held = property_get(item, "left");
    let held_code = app_learn_js_expression_side_code(held, rank_includes);
    let part = property_get(item, "right");
    let part_code = app_learn_js_expression_code(part);
    let code_includes = js_code_called(held_code + symbol, part_code);
    return code_includes;
  }
  let called_two = app_learn_js_operators_called_two();
  if (list_includes(called_two, symbol)) {
    ("Math.max(t, 10): the name, then both things in its brackets, a comma between, each whole since the brackets and the comma already keep them apart");
    let item2 = property_get(item, "left");
    let first_code = app_learn_js_expression_code(item2);
    let item3 = property_get(item, "right");
    let second_code = app_learn_js_expression_code(item3);
    let both_code = first_code + ", " + second_code;
    let code_called_two = js_code_called(symbol, both_code);
    return code_called_two;
  }
  let rank_left = app_learn_js_operator_rank_least_left(symbol);
  let left = property_get(item, "left");
  let left_code = app_learn_js_expression_side_code(left, rank_left);
  let rank_right = app_learn_js_operator_rank_least_right(symbol);
  let right = property_get(item, "right");
  let right_code = app_learn_js_expression_side_code(right, rank_right);
  let code = app_learn_js_operator_code(left_code, symbol, right_code);
  return code;
}
