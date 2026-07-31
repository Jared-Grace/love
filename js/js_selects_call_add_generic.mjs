import { js_block_find_from_nodes_single } from "./js_block_find_from_nodes_single.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_insert } from "./list_insert.mjs";
import { js_call_add_generic } from "./js_call_add_generic.mjs";
export async function js_selects_call_add_generic(
  ast,
  selects,
  f_name,
  index_delta,
) {
  arguments_assert(arguments, 4);
  ("Puts a call to a named function right beside a chosen statement, in the block");
  ("that statement sits in. Its older relative takes a whole block and appends at");
  ("the end, which is the wrong place whenever order matters.");
  ("The call writes itself: the arguments come from the named function's own");
  ("parameters, so what goes in is a name off a list, never a line of code");
  ("somebody wrote.");
  let f = js_block_find_from_nodes_single(ast, selects);
  let body = property_get(f, "body");
  let index = property_get(f, "index");
  let index_insert = index + index_delta;
  function lambda_add(ast_of_call, statement) {
    list_insert(body, index_insert, statement);
  }
  await js_call_add_generic(ast, f_name, lambda_add);
}
