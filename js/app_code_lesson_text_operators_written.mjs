import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_operator_symbols_longest_first } from "./app_code_lesson_operator_symbols_longest_first.mjs";
import { text_size } from "./text_size.mjs";
import { less_than } from "./less_than.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
export function app_code_lesson_text_operators_written(text) {
  arguments_assert(arguments, 1);
  ("every operator written in a piece of text, in the order they stand there, a repeat counted each time it is written.");
  ("The text is WALKED rather than searched once per operator, because searching would find the == inside every === and the < inside every <=. The walk takes the longest operator that starts where it stands and then steps past the whole of it, so each one is counted as the one thing it is.");
  ("The reading that names each operator once is this one with the repeats dropped, and it is the older of the two. They were separated because a repeat is the whole of what one caller is asking about: 3 === 5 === false writes two operators and names one, and a reader who only ever hears the name cannot tell that line from 3 === 5, which is a different line teaching a different thing.");
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
        list_add(found, symbol);
        step = text_size(symbol);
        break;
      }
    }
    index = add(index, step);
  }
  return found;
}
