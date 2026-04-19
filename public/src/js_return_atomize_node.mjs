import { js_node_atomize } from "../../../love/public/src/js_node_atomize.mjs";
import { js_visit_match } from "../../../love/public/src/js_visit_match.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_boolean_values } from "../../../love/public/src/js_boolean_values.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_return_argument_get } from "../../../love/public/src/js_return_argument_get.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export async function js_return_atomize_node(node, ast, variable_name) {
  if (js_node_type_is(node, "ReturnStatement")) {
    let argument = js_return_argument_get(node);
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
    await js_node_atomize(ast, v, variable_name, 0);
  }
}
