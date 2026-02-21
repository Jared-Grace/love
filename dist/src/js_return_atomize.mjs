import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_boolean_values } from "../../../love/public/src/js_boolean_values.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
import { js_return_identifier_name } from "../../../love/public/src/js_return_identifier_name.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { js_list_type } from "../../../love/public/src/js_list_type.mjs";
import { js_node_atomize } from "../../../love/public/src/js_node_atomize.mjs";
import { js_visit_match } from "../../../love/public/src/js_visit_match.mjs";
import { js_identifiers_names } from "../../../love/public/src/js_identifiers_names.mjs";
export async function js_return_atomize(ast) {
  let existing = js_identifiers_names(ast);
  let rs = js_list_type(ast, "ReturnStatement");
  async function lambda(v) {
    let node = property_get(v, "node");
    if (js_node_type_is(node, "ReturnStatement")) {
      let argument = property_get(node, "argument");
      if (js_node_type_is(argument, "Identifier")) {
        return;
      }
      if (argument === null) {
        return;
      }
      if (js_node_type_is(argument, "Literal")) {
        let value = property_get(argument, "value");
        let list = js_boolean_values();
        list_add(list, null);
        let includes = list_includes(list, value);
        if (includes) {
          return;
        }
      }
      let v = js_visit_match(ast, argument);
      let variable_name = js_return_identifier_name();
      await js_node_atomize(existing, v, variable_name, 0);
    }
  }
  await each_async(rs, lambda);
  return;
}
