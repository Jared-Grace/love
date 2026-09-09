import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_last } from "./list_last.mjs";
import { subtract } from "./subtract.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
export function js_statements_adjacent_in_is(body, statements) {
  arguments_assert(arguments, 2);
  ("Whether a chosen few of the lines a function is written with stand next to each other in it, with nothing at all written in between them.");
  ("A reading of what a function does steps over the prose written for a reader, so the few things a function does are not always a few lines standing together. That costs a reading nothing and costs a change a great deal: lines swapped for a call are taken by the reading's list, and anything standing in among them is left behind, still written down and now describing lines that have gone.");
  ("It is answered by where the first and the last of them stand rather than by walking what lies between, because the lines are the very ones the body holds and their places in it are enough - if the distance from the first to the last is one less than how many there are, there was no room for anything else.");
  let first = list_first(statements);
  let at_first = list_index_of(body, first);
  let last = list_last(statements);
  let at_last = list_index_of(body, last);
  let span = subtract(at_last, at_first);
  let count = list_size(statements);
  let expected = subtract(count, 1);
  let adjacent_is = equal(span, expected);
  return adjacent_is;
}
