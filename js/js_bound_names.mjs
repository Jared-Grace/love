import { js_declared_names } from "./js_declared_names.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_bound_names(ast) {
  "Every name a file binds for itself, counting the ones it declares and the ones it takes as parameters. A name on this list means something local inside this file, whatever else it may mean elsewhere.";
  "Parameters are the reason this exists rather than the declaration list alone. A function taking an argument called after some other function looks, to anything reading names out of the text, exactly like a use of that other function - and treating it as one produced a file that called its own string argument as though it were code.";
  let declared = js_declared_names(ast);
  let functions = js_list_type_nodes(ast, "FunctionDeclaration");
  let expressions = js_list_type_nodes(ast, "FunctionExpression");
  let arrows = js_list_type_nodes(ast, "ArrowFunctionExpression");
  let all = list_concat_multiple([functions, expressions, arrows]);
  function params_of(node) {
    let params = property_get(node, "params");
    function identifier_is(param) {
      let is = js_node_type_is(param, "Identifier");
      return is;
    }
    let identifiers = list_filter(params, identifier_is);
    function name_of(param) {
      let name = property_get(param, "name");
      return name;
    }
    let names_inner = list_map(identifiers, name_of);
    return names_inner;
  }
  let per_function = list_map(all, params_of);
  let parameters = list_concat_multiple(per_function);
  let names = list_concat_multiple([declared, parameters]);
  return names;
}
