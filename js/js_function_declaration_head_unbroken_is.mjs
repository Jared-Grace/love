import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_statements_working_without_arguments_assert } from "./js_function_declaration_statements_working_without_arguments_assert.mjs";
import { list_take } from "./list_take.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
export function js_function_declaration_head_unbroken_is(declaration, size) {
  arguments_assert(arguments, 2);
  ("Whether the first few things a function does stand next to each other in the lines it is written with, or whether something else has been written in among them.");
  ("Prose written for a reader is not work, so a reading of what a function does steps over it, and the first few things a function does are not always the first few lines of it. That costs a reading nothing and costs a change a great deal: a run swapped for a call takes the lines it was told about and leaves anything standing between them behind, still written down and now describing lines that have gone.");
  ("The line counting the arguments is stepped over too, and it is the one thing that may safely stand above the run without breaking it - it is always the first line and the run always begins after it, so it is never in among them.");
  let working =
    js_function_declaration_statements_working_without_arguments_assert(
      declaration,
    );
  let head = list_take(working, size);
  let body = js_function_declaration_to_block_body(declaration);
  let item = list_first(head);
  let at_first = list_index_of(body, item);
  let item2 = list_last(head);
  let at_last = list_index_of(body, item2);
  let span = subtract(at_last, at_first);
  let expected = subtract(size, 1);
  let unbroken_is = equal(span, expected);
  return unbroken_is;
}
