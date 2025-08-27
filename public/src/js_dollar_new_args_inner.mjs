import {js_declaration_param_add_node} from "./js_declaration_param_add_node.mjs";
import {js_declaration_single} from "./js_declaration_single.mjs";
import {js_dollar_choice_arguments} from "./js_dollar_choice_arguments.mjs";
export async function js_dollar_new_args_inner(ast) {
  let names = await js_dollar_choice_arguments();
  let declaration = js_declaration_single(ast);
  js_declaration_param_add_node(declaration, names);
}
