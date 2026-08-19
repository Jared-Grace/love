import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_return_is } from "./js_node_return_is.mjs";
import { js_statements_escapes_unmatched } from "./js_statements_escapes_unmatched.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_last } from "./list_last.mjs";
import { list_size } from "./list_size.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { subtract_1 } from "./subtract_1.mjs";
export function js_statements_escapes_survive_not_is(statements) {
  "Whether this run of lines holds a jump out of it that would not survive being given a name of its own - a return written part-way through it, or a break or a going-round-again whose loop is left behind.";
  "A run like this cannot be collapsed at all, which is a stronger thing than not being worth collapsing. The return would stop returning from the function the reader was looking at and start returning from the new one, and the caller would go quietly on to the next line. So two functions sharing such a run have nothing between them anybody can act on, and reporting them sends a reader to find that out for themselves.";
  "A return standing as the run's own last line is the one that does survive, and is not counted. That is the shape of nearly every shared ending in the repo - the answer is built up and handed back - and counting it would empty the reading over endings of almost everything it finds.";
  "A return sitting inside the last line rather than being it, as the branch of a giving-up check, is counted. It leaves part-way through just as surely; that it happens to be written last is a fact about where the run was cut, not about the jump.";
  arguments_assert(arguments, 1);
  let empty = list_empty_is(statements);
  if (empty) {
    return false;
  }
  let last = list_last(statements);
  let closing = js_node_return_is(last);
  let size = list_size(statements);
  let without_last = subtract_1(size);
  let asked = closing
    ? list_slice_count(statements, 0, without_last)
    : statements;
  let escapes = js_statements_escapes_unmatched(asked);
  let any = list_empty_not_is(escapes);
  return any;
}
