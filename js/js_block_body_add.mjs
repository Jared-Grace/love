import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { js_block_body_add_generic } from "./js_block_body_add_generic.mjs";
export function js_block_body_add(ast, selects, code) {
  arguments_assert(arguments, 3);
  let lambda_add = list_add;
  js_block_body_add_generic(ast, selects, code, lambda_add);
}
