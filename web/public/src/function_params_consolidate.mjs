import { functions_names } from "./functions_names.mjs";
import { list_empty } from "./list_empty.mjs";
import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { js_declaration_params_get } from "./js_declaration_params_get.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { function_transform } from "./function_transform.mjs";
import { list_map } from "./list_map.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_add } from "./list_add.mjs";
export async function function_params_consolidate(f_name) {
  async function lambda(ast) {
    let declaration = js_declaration_single(ast);
    let params = js_declaration_params_get(declaration);
    const params_names = js_identifiers_to_names(params);
    function lambda2(param_name) {
      let expression = js_parse_expression(param_name);
      let v = {
        type: "Property",
        method: false,
        shorthand: true,
        computed: false,
        key: expression,
        value: expression,
        kind: "init",
      };
      return v;
    }
    let properties = list_map(params_names, lambda2);
    let arg_new = {
      type: "ObjectPattern",
      properties,
    };
    list_empty(params);
    list_add(params, arg_new);
  }
  let result = await function_transform(f_name, lambda);
  let f_names = functions_names();
}
