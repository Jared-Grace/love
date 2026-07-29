import { arguments_assert } from "./arguments_assert.mjs";
import { js_block_body_get } from "./js_block_body_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_add } from "./list_add.mjs";
export function js_block_statements_after_return(block) {
  arguments_assert(arguments, 1);
  ("The statements in a block that can never be reached, because it has already");
  ("left.");
  ("A return or a throw standing at the top level of a block ends it, so anything");
  ("written below is not slow or rare - it never runs at all.");
  ("A function declared below is kept out, because a declaration is lifted to the");
  ("top of the block before anything runs. It is reachable, and a helper written");
  ("under the return that uses it is ordinary rather than dead.");
  ("The block is the smaller subject, and the one both readers want: the gate asks");
  ("a whole function whether it carries any, and the transform asks a chosen block");
  ("which ones to take out. Written twice they could disagree, and then the gate");
  ("would keep failing on what the transform believed it had already removed.");
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
