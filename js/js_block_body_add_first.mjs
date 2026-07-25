import { arguments_assert } from "./arguments_assert.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_block_body_add_generic } from "./js_block_body_add_generic.mjs";
export function js_block_body_add_first(ast, selects, code) {
  arguments_assert(arguments, 3);
  let lambda_add = list_add_first;
  js_block_body_add_generic(ast, selects, code, lambda_add);
}
