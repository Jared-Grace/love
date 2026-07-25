import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_block_body_get } from "./js_block_body_get.mjs";
import { list_add } from "./list_add.mjs";
import { js_call_add_generic } from "./js_call_add_generic.mjs";
export async function js_block_call_add(ast, selects, f_name) {
  arguments_assert(arguments, 3);
  ("Adds a call to a chosen block, from the name of the function alone. The");
  ("arguments come from that function's own parameters, so what goes in is a name");
  ("somebody picked from a list, never a line of code somebody wrote.");
  ("Its older relatives each decided for themselves where the call would land — the");
  ("body, the top of the body, in front of the return. Taking the block as the");
  ("selection instead means one verb reaches all of those places, and every place a");
  ("selector learns to find later.");
  let block = list_single(selects);
  function lambda_add(ast_of_call, statement) {
    let body = js_block_body_get(block);
    list_add(body, statement);
  }
  await js_call_add_generic(ast, f_name, lambda_add);
}
