import { js_declaration_param_add } from "./js_declaration_param_add.mjs";
import { each } from "./each.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
export function js_declaration_single_params_add(ast, param_names) {
  let declaration = js_declaration_single(ast);
  each(param_names, (param_name) =>
    js_declaration_param_add(declaration, param_name),
  );
}
