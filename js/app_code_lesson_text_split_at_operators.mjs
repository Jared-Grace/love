import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_operator_symbols_longest_first } from "./app_code_lesson_operator_symbols_longest_first.mjs";
import { text_size } from "./text_size.mjs";
import { less_than } from "./less_than.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_combine } from "./text_combine.mjs";
import { add } from "./add.mjs";
export function app_code_lesson_text_split_at_operators(text) {
  arguments_assert(arguments, 1);
  ("one walk of a piece of text, handing back both of the things written there: the operators in the order they stand, and the runs of text that stand between them.");
  ("The text is WALKED rather than searched once per operator, because searching would find the == inside every === and the < inside every <=. The walk takes the longest operator that starts where it stands and then steps past the whole of it, so each one is counted as the one thing it is, and every letter it does not step over is kept for whichever operand is being gathered.");
  ("One walk hands back both because they are the same reading of the same text, and a second walk written to gather the other half would have to repeat the longest-first rule to stay right. There is one more operand than there are operators, always, even when the run between two of them is empty - the emptiness is itself something a caller may want to see.");
  let symbols = app_code_lesson_operator_symbols_longest_first();
  let operators = [];
  let operands = [];
  let held = "";
  let size = text_size(text);
  let index = 0;
  while (less_than(index, size)) {
    let rest = text_slice_from(text, index);
    let matched = null;
    for (let symbol of symbols) {
      let here = text_starts_with(rest, symbol);
      if (here) {
        matched = symbol;
        break;
      }
    }
    let some = null_not_is(matched);
    let step = 1;
    if (some) {
      list_add(operators, matched);
      list_add(operands, held);
      held = "";
      step = text_size(matched);
    }
    let none = null_is(matched);
    if (none) {
      let letter = text_slice(rest, 0, 1);
      held = text_combine(held, letter);
    }
    index = add(index, step);
  }
  list_add(operands, held);
  let split = {
    operators,
    operands,
  };
  return split;
}
