import { js_flo_params_get } from "./js_flo_params_get.mjs";
import { js_property_identifier } from "./js_property_identifier.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_clear } from "./list_clear.mjs";
import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { function_transform } from "./function_transform.mjs";
import { list_map } from "./list_map.mjs";
import { list_add } from "./list_add.mjs";
export async function function_params_consolidate(f_name) {
  async function lambda(ast) {
    let params = js_flo_params_get(ast);
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
  await function_transform(f_name, lambda);
  await functions_names();
}
