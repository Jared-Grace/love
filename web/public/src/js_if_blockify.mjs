import { js_if_blockify_generic } from "./js_if_blockify_generic.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { exit } from "./exit.mjs";
import { log_unparse } from "./log_unparse.mjs";
import { js_visit_type_each_async } from "./js_visit_type_each_async.mjs";
import { log } from "./log.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { object_replace } from "./object_replace.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_statement_return } from "./js_statement_return.mjs";
import { object_copy } from "./object_copy.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { marker } from "./marker.mjs";
export async function js_if_blockify(ast) {
  const type = "IfStatement";
  await js_if_blockify_generic(ast, type);
}
