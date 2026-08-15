import { arguments_assert } from "./arguments_assert.mjs";
import { function_work_statements } from "./function_work_statements.mjs";
import { js_statements_chain_longest } from "./js_statements_chain_longest.mjs";
export async function function_work_chain(f_name) {
  arguments_assert(arguments, 1);
  ("How deep the named function's longest chain of lines runs - each link reading a name the link before it made.");
  ("Its neighbour counts the same lines instead of following them. Together the two say what one alone cannot: a function is long, or it is tangled, and only the second is a reason to cut it up. A table of a thousand entries is long and one link deep; a hundred lines that each feed the next are shorter and far worse to read.");
  let deep = await function_work_statements(f_name);
  let chain = js_statements_chain_longest(deep);
  return chain;
}
