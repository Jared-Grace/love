import { add_1 } from "./add_1.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_operators_strong } from "./app_code_operators_strong.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each_range } from "./each_range.mjs";
import { list_get } from "./list_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
import { multiply } from "./multiply.mjs";
import { null_is } from "./null_is.mjs";
import { subtract } from "./subtract.mjs";
import { text_integers } from "./text_integers.mjs";
import { text_split_space } from "./text_split_space.mjs";
export function app_code_expression_flat_tree_of_code(code) {
  arguments_assert(arguments, 1);
  ("the shape behind a line of arithmetic that carries no brackets, read back out of the line itself: 2 + 9 / 3 - 4 gives back the shape whose divide sits inside the plus, and whose minus holds all of it");
  ("A quiz hands its question over as text, and a line outlives the run that built it - a review saves the line to ask again and comes back to it after the page has been loaded afresh. A shape kept beside the line it printed would have been forgotten by then, and the lesson would throw where a learner was owed a question.");
  ("Any number of operators, because the reading is the same at every length: the strong ones gather their two neighbours as they are met, and the weak ones are folded together from the left as each new one arrives. A reader written for a fixed count would be a new reader for every lesson, each with its own chance of disagreeing with the line it was given.");
  ("The weaker fold waits for the strong ones on its right to finish, which is the whole of what strength means here. Folding from the left as they arrive is what puts 8 - 2 - 1 together in the order a reader takes it, rather than as 8 - (2 - 1).");
  let pieces = text_split_space(code);
  let numbers = text_integers(code);
  let strong = app_code_operators_strong();
  let term = list_get(numbers, 0);
  let sum = null;
  let sum_symbol = null;
  function weak_fold() {
    "what has been gathered so far joins the running total";
    let first = null_is(sum);
    if (first) {
      sum = term;
      return;
    }
    sum = app_code_expression_node(sum, sum_symbol, term);
  }
  function operator_take(index) {
    "the operator at this place on the line, with the number that follows it";
    let doubled = multiply(index, 2);
    let symbol_at = add_1(doubled);
    let symbol = list_get(pieces, symbol_at);
    let number_at = add_1(index);
    let number = list_get(numbers, number_at);
    let strong_is = list_includes(strong, symbol);
    if (strong_is) {
      term = app_code_expression_node(term, symbol, number);
      return;
    }
    weak_fold();
    sum_symbol = symbol;
    term = number;
  }
  let number_count = list_size(numbers);
  let operator_count = subtract(number_count, 1);
  each_range(operator_count, operator_take);
  let none = null_is(sum);
  if (none) {
    return term;
  }
  let whole = app_code_expression_node(sum, sum_symbol, term);
  return whole;
}
