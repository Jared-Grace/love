import { js_statement_return } from "./js_statement_return.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { js_if_blockify_generic } from "./js_if_blockify_generic.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { object_replace } from "./object_replace.mjs";
import { object_copy } from "./object_copy.mjs";
export async function js_arrow_blockify(ast) {
  const type = "ArrowFunctionExpression";
  await js_if_blockify_generic(ast, type);
}
