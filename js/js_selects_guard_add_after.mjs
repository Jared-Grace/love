import { arguments_assert } from "./arguments_assert.mjs";
import { js_guard_statements } from "./js_guard_statements.mjs";
import { list_first } from "./list_first.mjs";
import { list_get } from "./list_get.mjs";
import { js_selects_statement_add_generic } from "./js_selects_statement_add_generic.mjs";
export function js_selects_guard_add_after(
  ast,
  selects,
  test_fn_name,
  tested_name,
  bound_name,
  returned_name,
) {
  "Writes a guard - a name bound to a question, and a way out when the answer is yes - on the two lines under a chosen one.";
  "THE UNBOUND GUARD WAS ALREADY WRITEABLE AND THE BOUND ONE WAS NOT. A line already holding a bare question can be turned into a guard where it stands, and a name can be bound to a call at the end of a block; but the call that verb writes fills its own arguments out of what the called function names its parameters, and a guard does not ask about a parameter - it asks about a local the body is holding. So the tested name is handed over here, and that one difference is why this is its own verb rather than a pairing of two that were already there.";
  "THE SECOND LINE IS WRITTEN FIRST. Both go one under the chosen line, so writing the way out first and the binding after pushes the way out down and leaves the two in the order a guard reads in. Where the chosen line sits is unchanged by either write, because both land behind it.";
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
  let index_delta = 1;
  js_selects_statement_add_generic(ast, selects, guard, index_delta);
  js_selects_statement_add_generic(ast, selects, binding, index_delta);
}
