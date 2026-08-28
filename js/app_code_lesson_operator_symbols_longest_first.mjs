import { arguments_assert } from "./arguments_assert.mjs";
import { js_operators_arithmetic } from "./js_operators_arithmetic.mjs";
import { js_operators_binary } from "./js_operators_binary.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { js_operator_symbol } from "./js_operator_symbol.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { list_sort_text_size } from "./list_sort_text_size.mjs";
import { list_reverse } from "./list_reverse.mjs";
export function app_code_lesson_operator_symbols_longest_first() {
  arguments_assert(arguments, 0);
  ("every operator symbol these lessons write, longest first. Longest first is what a walk over a line of code needs: the walk takes the first symbol that starts where it is standing and then steps past it, so a shorter symbol living inside a longer one has to be offered second or === would count as the == inside it.");
  ("Both operator lists are asked for because the repo divides them so that + is arithmetic and not binary. Either list alone leaves out an operator these lessons teach, and the one it leaves out is the commonest of them.");
  ("And and or are named here rather than taken from a list, because neither list holds them. Those lists say which operators the auto pass rewrites into calls, and and-or are left out of that on purpose; the question here is a different one, which is what a lesson may write on a card. Two lessons write && and until it was named here every check over what a lesson shows was blind to those lessons rather than passing them.");
  ("The reversing is done as a step of its own because it turns the list around in place and hands nothing back, so a caller that reads its answer reads nothing.");
  let arithmetic = js_operators_arithmetic();
  let binary = js_operators_binary();
  let both = list_concat(arithmetic, binary);
  let unique = list_map_unique(both, js_operator_symbol);
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  let logical = [and_symbol, or_symbol];
  let every = list_concat(unique, logical);
  let longest_first = list_sort_text_size(every);
  list_reverse(longest_first);
  return longest_first;
}
