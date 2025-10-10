import { js_if_blockify_generic } from "../../../love/public/src/js_if_blockify_generic.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export async function js_if_blockify(ast) {
  const type = "IfStatement";
  const property_name = "consequent";
  await js_if_blockify_generic(ast, type, property_name, list_add);
}
