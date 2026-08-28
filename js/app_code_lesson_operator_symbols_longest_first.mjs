import { list_map_unique } from "./list_map_unique.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operators_arithmetic } from "./js_operators_arithmetic.mjs";
import { js_operators_binary } from "./js_operators_binary.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_operator_symbol } from "./js_operator_symbol.mjs";
import { list_sort_text_size } from "./list_sort_text_size.mjs";
import { list_reverse } from "./list_reverse.mjs";
export function app_code_lesson_operator_symbols_longest_first() {
  arguments_assert(arguments, 0);
  ("every operator symbol these lessons write, longest first. Longest first is what a walk over a line of code needs: the walk takes the first symbol that starts where it is standing and then steps past it, so a shorter symbol living inside a longer one has to be offered second or === would count as the == inside it.");
  ("Both operator lists are asked for because the repo divides them so that + is arithmetic and not binary. Either list alone leaves out an operator these lessons teach, and the one it leaves out is the commonest of them.");
  let arithmetic = js_operators_arithmetic();
  let binary = js_operators_binary();
  let both = list_concat(arithmetic, binary);
  let unique = list_map_unique(both, js_operator_symbol);
  let shortest_first = list_sort_text_size(unique);
  let longest_first = list_reverse(shortest_first);
  return longest_first;
}
