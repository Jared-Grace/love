import { js_declaration_params_names } from "./js_declaration_params_names.mjs";
import { js_declaration_params_get } from "./js_declaration_params_get.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { function_transform } from "./function_transform.mjs";
import { list_map } from "./list_map.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export async function function_params_consolidate() {
  async function lambda(ast) {
    let declaration = js_declaration_single(ast);
    let params_names = js_declaration_params_names(declaration);
    function lambda2(item) {
      let expression = js_parse_expression(code_expression);
      return {
        type: "Property",
        start: 577,
        end: 586,
        method: false,
        shorthand: true,
        computed: false,
        key: null,
        value: null,
        kind: "init",
      };
    }
    let result2 = list_map(list, lambda2);
  }
  let result = await function_transform(f_name, lambda);
}
