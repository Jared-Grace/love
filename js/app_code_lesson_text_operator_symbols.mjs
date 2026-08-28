import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_operator_symbols_longest_first } from "./app_code_lesson_operator_symbols_longest_first.mjs";
import { text_size } from "./text_size.mjs";
import { less_than } from "./less_than.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { add } from "./add.mjs";
export function app_code_lesson_text_operator_symbols(text) {
  arguments_assert(arguments, 1);
  ("the operator symbols written in a piece of text, each named once. The text is WALKED rather than searched once per symbol, because searching would find the == inside every === and the < inside every <=. The walk takes the longest symbol that starts where it stands and then steps past the whole of it, so each symbol is counted as the one thing it is.");
  let symbols = app_code_lesson_operator_symbols_longest_first();
  let found = [];
  let size = text_size(text);
  let index = 0;
  while (less_than(index, size)) {
    let rest = text_slice_from(text, index);
    let step = 1;
    for (let symbol of symbols) {
      let here = text_starts_with(rest, symbol);
      if (here) {
        list_add_unique(found, symbol);
        step = text_size(symbol);
        break;
      }
    }
    index = add(index, step);
  }
  return found;
}
