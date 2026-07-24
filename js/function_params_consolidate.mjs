import { js_property_identifier } from "./js_property_identifier.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_clear } from "./list_clear.mjs";
import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { js_function_declaration_params_get } from "./js_function_declaration_params_get.mjs";
import { js_flo } from "./js_flo.mjs";
import { function_transform } from "./function_transform.mjs";
import { list_map } from "./list_map.mjs";
import { list_add } from "./list_add.mjs";
export async function function_params_consolidate(f_name) {
  async function lambda(ast) {
    let declaration = js_flo(ast);
    let params = js_function_declaration_params_get(declaration);
    let params_names = js_identifiers_to_names(params);
    function lambda2(param_name) {
      let v = js_property_identifier(param_name);
      return v;
    }
    let properties = list_map(params_names, lambda2);
    let arg_new = {
      type: "ObjectPattern",
      properties,
    };
    list_clear(params);
    list_add(params, arg_new);
  }
  let result = await function_transform(f_name, lambda);
  let f_names = await functions_names();
}
