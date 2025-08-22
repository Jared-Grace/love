import { js_if_blockify_generic } from "./js_if_blockify_generic.mjs";
export async function js_arrow_blockify(ast) {
  const type = "ArrowFunctionExpression";
  const property_name = "body";
  await js_if_blockify_generic(ast, type, property_name);
}
