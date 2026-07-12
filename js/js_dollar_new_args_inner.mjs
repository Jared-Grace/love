import { js_dollar_choice_argument } from "./js_dollar_choice_argument.mjs";
import { js_function_declaration_param_add_node } from "./js_function_declaration_param_add_node.mjs";
import { js_flo } from "./js_flo.mjs";
export async function js_dollar_new_args_inner(ast) {
  let a = await js_dollar_choice_argument();
  let declaration = js_flo(ast);
  js_function_declaration_param_add_node(declaration, a);
}
