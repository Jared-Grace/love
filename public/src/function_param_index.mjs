import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_declaration_params_ast_get } from "../../../love/public/src/js_declaration_params_ast_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { js_declaration_param_named } from "../../../love/public/src/js_declaration_param_named.mjs";
export function function_param_index(ast, param_name) {
  marker("1");
  let v2 = js_declaration_params_ast_get(ast);
  let params = object_property_get(v2, "params");
  let declaration = object_property_get(v2, "declaration");
  let p = js_declaration_param_named(declaration, param_name);
  let index = list_index_of(params, p);
  let v = {
    params,
    index,
  };
  return v;
}
