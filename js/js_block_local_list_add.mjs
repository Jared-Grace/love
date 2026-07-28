import { arguments_assert } from "./arguments_assert.mjs";
import { js_block_local_add_generic } from "./js_block_local_add_generic.mjs";
export function js_block_local_list_add(ast, selects, name) {
  arguments_assert(arguments, 3);
  ("Starts an empty list under a name, ready for things to be put in it as a");
  ("reading goes along.");
  js_block_local_add_generic(ast, selects, name, "[]");
}
