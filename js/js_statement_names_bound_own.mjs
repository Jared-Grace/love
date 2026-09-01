import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_nodes_own } from "./js_statement_nodes_own.mjs";
import { js_declared_names_of_nodes } from "./js_declared_names_of_nodes.mjs";
export function js_statement_names_bound_own(statement) {
  arguments_assert(arguments, 1);
  ("The names a line gives a value to at the level it is written on, unpacked names and all.");
  ("Only the variables are counted, and a function declared in the line is left out on purpose: the language hoists a declared function, so its name holds it over the whole body whatever order the lines stand in. A move can never carry such a name away from a line that uses it, so counting it would refuse moves that are safe by the language's own rule.");
  ("The neighbour that walks the whole line, nested scopes and all, answers a different question - which names exist anywhere under here - and that one is right for a reader tracking where a value came from. This one is for a reader asking what the line puts into the scope around it, which is what a line standing after it can see.");
  let own = js_statement_nodes_own(statement, "VariableDeclarator");
  let names = js_declared_names_of_nodes(own);
  return names;
}
