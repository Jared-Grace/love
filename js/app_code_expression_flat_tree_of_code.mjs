import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_get } from "./list_get.mjs";
import { list_pop } from "./list_pop.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_last } from "./list_last.mjs";
import { app_code_operator_rank } from "./app_code_operator_rank.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { multiply } from "./multiply.mjs";
import { add_1 } from "./add_1.mjs";
import { app_code_operator_rank_least_left } from "./app_code_operator_rank_least_left.mjs";
import { list_size_subtract } from "./list_size_subtract.mjs";
import { each_range } from "./each_range.mjs";
export function app_code_expression_flat_tree_of_code(code) {
  arguments_assert(arguments, 1);
  ("the shape behind a line of arithmetic that carries no parentheses, read back out of the line itself: 2 + 9 / 3 - 4 gives back the shape whose divide sits inside the plus, and whose minus holds all of it");
  ("A quiz hands its question over as text, and a line outlives the run that built it - a review saves the line to ask again and comes back to it after the page has been loaded afresh. A shape kept beside the line it printed would have been forgotten by then, and the lesson would throw where a learner was owed a question.");
  ("Any number of operators and any number of strengths, because the reading is the same at every length and at every depth: each operator met waits its turn behind the ones already on the line that are worked out before it, and those are folded away the moment it arrives. A reader written for a fixed count would be a new reader for every lesson, each with its own chance of disagreeing with the line it was given.");
  ("★ THE RULE IS THE PRINTER'S OWN RULE READ BACKWARDS, AND IT IS ASKED IN THE PRINTER'S OWN WORDS. Writing a line out, a side is gathered into parentheses exactly when it is WEAKER than the strength that side asks for. Reading the line back, a neighbour standing there with no parentheses round it must be gathered up first exactly when it is NOT weaker than that same strength. One inequality, one way round for each direction, so the two can never learn different strengths.");
  ("★ ASKING FOR A STRENGTH RATHER THAN FOR TWO SIGNS IS WHAT MAKES IT TOTAL. A reader that asked 'is this a times or a divide' gave every other sign the weakest reading it had, so a remainder on a line came back as a shape that means something else, and a power came back grouped from the wrong end. Asking the strength instead covers every sign the app can work out on the day it is classed, and a sign no class holds is refused by the asking rather than guessed at.");
  ("The strength asked for is the one the LEFT side is held to, because the neighbour already on the line is on the left of the operator just met. That is also where right-to-left working out is carried: a power asks its left side for one strength above its own, so a power already waiting is left alone and 2 ** 3 ** 2 comes back as the right-hand power sitting inside the left one.");
  let pieces = text_split_space(code);
  let numbers = text_integers(code);
  let first = list_get(numbers, 0);
  let terms = [first];
  let symbols = [];
  function fold_top() {
    "the operator waiting at the top takes the two shapes standing either side of it and the three become one shape";
    let symbol = list_pop(symbols);
    let right = list_pop(terms);
    let left = list_pop(terms);
    let item = app_code_expression_node(left, symbol, right);
    list_add(terms, item);
  }
  function waiting_first_is(rank_least) {
    "whether the operator already waiting is worked out before the one just met";
    let none = list_empty_is(symbols);
    if (none) {
      return false;
    }
    let waiting = list_last(symbols);
    let waiting_rank = app_code_operator_rank(waiting);
    let weaker = less_than(waiting_rank, rank_least);
    let first_is = not(weaker);
    return first_is;
  }
  function fold_waiting(rank_least) {
    "every operator still waiting that is worked out before the one just met is folded away, the one nearest the operator first";
    let more = waiting_first_is(rank_least);
    if (more) {
      fold_top();
      fold_waiting(rank_least);
    }
  }
  function fold_rest() {
    "the line is done, so everything still waiting is folded away from the right-hand end back";
    let none = list_empty_is(symbols);
    if (none) {
      return;
    }
    fold_top();
    fold_rest();
  }
  function operator_take(index) {
    "the operator at this place on the line, with the number that follows it";
    let doubled = multiply(index, 2);
    let symbol_at = add_1(doubled);
    let symbol = list_get(pieces, symbol_at);
    let number_at = add_1(index);
    let number = list_get(numbers, number_at);
    let rank_least = app_code_operator_rank_least_left(symbol);
    fold_waiting(rank_least);
    list_add(symbols, symbol);
    list_add(terms, number);
  }
  let operator_count = list_size_subtract(numbers, 1);
  each_range(operator_count, operator_take);
  fold_rest();
  let whole = list_get(terms, 0);
  return whole;
}
