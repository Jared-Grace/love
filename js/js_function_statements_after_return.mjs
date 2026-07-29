import { js_block_statements_after_return } from "./js_block_statements_after_return.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
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
  let after = js_block_statements_after_return(block);
  return after;
}
