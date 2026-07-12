import { js_if_blockify_generic } from "./js_if_blockify_generic.mjs";
import { list_add } from "./list_add.mjs";
export async function js_if_blockify(ast) {
  let type = "IfStatement";
  let property_name = "consequent";
  await js_if_blockify_generic(ast, type, property_name, list_add);
}
