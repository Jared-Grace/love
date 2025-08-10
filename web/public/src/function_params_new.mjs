import { js_declaration_param_add } from "./js_declaration_param_add.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { function_transform } from "./function_transform.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { function_param_new } from "./function_param_new.mjs";
export async function function_params_new(param_names) {
  let f_name = await data_function_current_get();
  await function_transform(f_name, (ast) => {
    let declaration = js_declaration_single(ast);
    js_declaration_param_add(declaration, param_name);
  });
}
