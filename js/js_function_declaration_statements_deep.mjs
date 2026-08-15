import { js_node_statements_work } from "./js_node_statements_work.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function js_function_declaration_statements_deep(declaration) {
  arguments_assert(arguments, 1);
  ("Every line of work inside a function, however deeply it sits - the prose left out, the marks left out, and the blocks that only hold other lines left out.");
  ("Its neighbour over the top level answers with the statements written directly in the body, which is the right reading for asking what a function does at a glance. It is the wrong reading for asking how big a function is: a body of one loop holding twenty lines answers one, and the largest functions in the repo are exactly the ones that put their weight inside a loop or an if.");
  ("The function's own declaration is not counted, because the walk starts at the body rather than at the declaration - so a body that does nothing answers with nothing rather than with itself.");
  let block = property_get(declaration, "body");
  let deep = js_node_statements_work(block);
  return deep;
}
