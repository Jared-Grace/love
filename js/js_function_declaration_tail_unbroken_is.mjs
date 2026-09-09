import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_statements_working_without_arguments_assert } from "./js_function_declaration_statements_working_without_arguments_assert.mjs";
import { list_take_last } from "./list_take_last.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { js_statements_adjacent_in_is } from "./js_statements_adjacent_in_is.mjs";
export function js_function_declaration_tail_unbroken_is(declaration, size) {
  arguments_assert(arguments, 2);
  ("Whether the last few things a function does stand next to each other in the lines it is written with, or whether something else has been written in among them.");
  ("The mirror of the same question asked of a function's opening, and it is asked for the same reason: a closing run swapped for a call takes the lines it was told about, and a paragraph left standing among them would afterwards describe lines that had gone.");
  ("The count given here covers the handing back as well as the work above it, because both are inside what a swap rewrites. A reader saying how big the shared run is has to add the one line for the answer before asking.");
  let working =
    js_function_declaration_statements_working_without_arguments_assert(
      declaration,
    );
  let ending = list_take_last(working, size);
  let body = js_function_declaration_to_block_body(declaration);
  let unbroken_is = js_statements_adjacent_in_is(body, ending);
  return unbroken_is;
}
