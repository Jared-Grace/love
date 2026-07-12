import { js_if_blockify_generic } from "./js_if_blockify_generic.mjs";
import { js_statement_return_add } from "./js_statement_return_add.mjs";
export async function js_arrow_blockify(ast) {
  let type = "ArrowFunctionExpression";
  await js_if_blockify_generic(ast, type, "body", js_statement_return_add);
}
