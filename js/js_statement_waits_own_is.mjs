import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_nodes_own } from "./js_statement_nodes_own.mjs";
export function js_statement_waits_own_is(statement) {
  arguments_assert(arguments, 1);
  ("Whether the line itself stops and waits for something before the next line is reached.");
  ("A wait written inside a function standing in the line does not count, because that function runs when somebody calls it and the line does not wait for it here.");
  ("WHY ANYBODY ASKS: while a line waits, everything else the page is doing gets its turn. So the order of a waiting line against any other line is not a matter of what names they share - it is a matter of what else ran in between, which cannot be read off either of them. A move over a wait is a move nobody can prove, which is why the readings that decide a move refuse rather than answer when they see one.");
  let awaits = js_statement_nodes_own(statement, "AwaitExpression");
  let waits = list_empty_not_is(awaits);
  return waits;
}
