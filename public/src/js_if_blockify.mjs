import { js_if_blockify_generic } from "../../../love/public/src/js_if_blockify_generic.mjs";
export async function js_if_blockify(ast) {
  const type = "IfStatement";
  const property_name = "consequent";
  await js_if_blockify_generic(ast, type, property_name);
}
