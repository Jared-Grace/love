import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_block_body_get } from "./js_block_body_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_add } from "./list_add.mjs";
export function js_function_statements_after_return(declaration) {
  arguments_assert(arguments, 1);
  ("The statements a function can never reach, because it has already left.");
  ("A return or a throw standing at the top of a body ends it, so anything written");
  ("below is not slow or rare - it never runs at all. That is how a function comes");
  ("to do nothing while still reading like it does the work, which is worse than an");
  ("empty one: an empty function is obviously unfinished, and this one is not.");
  ("A function declared below is kept out, because a declaration is lifted to the");
  ("top of the body before anything runs. It is reachable, and a helper written");
  ("under the return that uses it is ordinary rather than dead.");
  let block = property_get(declaration, "body");
  let statements = js_block_body_get(block);
  let left = false;
  let after = [];
  for (let statement of statements) {
    if (left) {
      let lifted = js_node_type_is(statement, "FunctionDeclaration");
      if (lifted) {
        continue;
      }
      list_add(after, statement);
      continue;
    }
    let returns = js_node_type_is(statement, "ReturnStatement");
    let throws = js_node_type_is(statement, "ThrowStatement");
    if (returns || throws) {
      left = true;
    }
  }
  return after;
}
