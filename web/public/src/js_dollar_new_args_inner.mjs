import { js_dollar_choice_argument } from "../../../love/public/src/js_dollar_choice_argument.mjs";
import { js_declaration_param_add_node } from "../../../love/public/src/js_declaration_param_add_node.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
export async function js_dollar_new_args_inner(ast) {
  let a = await js_dollar_choice_argument();
  let declaration = js_declaration_single(ast);
  js_declaration_param_add_node(declaration, a);
}
