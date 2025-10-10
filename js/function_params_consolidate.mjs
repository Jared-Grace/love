import { js_property_identifier } from "../../../love/public/src/js_property_identifier.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { list_empty } from "../../../love/public/src/list_empty.mjs";
import { js_identifiers_to_names } from "../../../love/public/src/js_identifiers_to_names.mjs";
import { js_declaration_params_get } from "../../../love/public/src/js_declaration_params_get.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export async function function_params_consolidate(f_name) {
  async function lambda(ast) {
    let declaration = js_declaration_single(ast);
    let params = js_declaration_params_get(declaration);
    const params_names = js_identifiers_to_names(params);
    function lambda2(param_name) {
      let v = js_property_identifier(param_name);
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
  let f_names = await functions_names();
}
