import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
import { log } from "./log.mjs";
import { list_add } from "./list_add.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
export async function function_param_new(param_name) {
  let f_name = await data_function_current_get();
  await function_transform(f_name, (ast) => {
    let declaration = js_declaration_single(ast);
    let { params } = declaration;
    list_add(params, js_parse_expression(param_name));
  });
}
