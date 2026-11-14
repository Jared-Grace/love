import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { app_learn_js_operators_called } from "./app_learn_js_operators_called.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_learn_js_operator_index_symbol } from "./app_learn_js_operator_index_symbol.mjs";
import { list_concat_single_right } from "./list_concat_single_right.mjs";
import { app_learn_js_operators_method } from "./app_learn_js_operators_method.mjs";
export function app_learn_js_operators_strongest() {
  arguments_assert(arguments, 0);
  ("the operators a code lesson solves before every other one, by their symbols: ! and Math.floor");
  ("A class above * and /, because ! is worked out before anything around it: !true && false takes the ! first, and a line built as a shape has to print back as the line it means. Given the same strength as * it would print without the parentheses that say which side it holds.");
  ("A called operator ranks here too, and truly rather than by convenience: Math.floor(14 / 4) * 4 works the rounding down out before the times, because the brackets that belong to the name say so. Nothing around one of these can gather it and it never needs gathering itself, so the only thing its rank decides is that nothing outside it goes first.");
  let v = js_operator_bang_symbol();
  let called = app_learn_js_operators_called();
  let with_called = list_concat([v], called);
  ("2026-11-09: reading an item by its index ranks here too, as JavaScript ranks it among its strongest; like a called operator, its brackets gather what is inside them, so its rank only says that nothing outside goes first");
  let index_symbol = app_learn_js_operator_index_symbol();
  let with_index = list_concat_single_right(with_called, index_symbol);
  ('2026-11-13: s.includes("e") ranks here too, as JavaScript ranks a call among its strongest; its brackets gather the piece, so its rank only says that nothing outside goes first');
  ('2026-11-14: a.indexOf("joy") ranks there with it');
  let methods = app_learn_js_operators_method();
  let symbols = list_concat(with_index, methods);
  return symbols;
}
