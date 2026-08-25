import { arguments_assert } from "./arguments_assert.mjs";
import { js_guard_statements } from "./js_guard_statements.mjs";
import { list_first } from "./list_first.mjs";
import { list_get } from "./list_get.mjs";
import { js_selects_statement_add_generic } from "./js_selects_statement_add_generic.mjs";
export function js_selects_guard_add_before(
  ast,
  selects,
  test_fn_name,
  tested_name,
  bound_name,
  returned_name,
) {
  "Writes a guard - a name bound to a question, and a way out when the answer is yes - on the two lines above a chosen one.";
  "IT IS THE COMMONER HALF OF THE PAIR. A guard is put in to stop a line running, and the line it is put in to stop is the one already in front of the reader, so the chosen line is far more often the thing being guarded than the thing being guarded after. Writing under a chosen line asks the reader to find the line before the one they care about and choose that instead, which is a step where a name could be got wrong for no reason.";
  "THE TWO LINES ARE WRITTEN IN THE OPPOSITE ORDER TO THE OTHER HALF, and the reason is worth holding onto. Where a line sits is found again for each write. Writing behind a chosen line never moves it, so there the second line goes first and gets pushed down; writing in front of it moves it every time, so here the first line goes first and the chosen line carries the second write down with it.";
  "NOTHING HANDED IN MAY BE A LINE OF CODE - the four words are dropped into the two lines, the lines are parsed, and the shapes are read back before either is written, so a refusal leaves the file as it was.";
  arguments_assert(arguments, 6);
  let statements = js_guard_statements(
    test_fn_name,
    tested_name,
    bound_name,
    returned_name,
  );
  let binding = list_first(statements);
  let guard = list_get(statements, 1);
  let index_delta = 0;
  js_selects_statement_add_generic(ast, selects, binding, index_delta);
  js_selects_statement_add_generic(ast, selects, guard, index_delta);
}
