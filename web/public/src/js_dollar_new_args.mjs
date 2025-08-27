import { log } from "./log.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { js_declaration_param_add_node } from "./js_declaration_param_add_node.mjs";
import { js_dollar_choice_arguments } from "./js_dollar_choice_arguments.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_dollar_new_name } from "./js_dollar_new_name.mjs";
import { marker } from "./marker.mjs";
export async function js_dollar_new_args(code) {
  let names = await js_dollar_choice_arguments();
  let combined = js_dollar_new_name(code);
  log(message);
  async function lambda2(ast) {
    let declaration = js_declaration_single(ast);
    js_declaration_param_add_node(declaration, names);
  }
  await function_transform(combined, lambda2);
  marker("1");
}
