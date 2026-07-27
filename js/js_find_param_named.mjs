import { js_flo_params_get } from "./js_flo_params_get.mjs";
import { js_function_declaration_params_names_node } from "./js_function_declaration_params_names_node.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_single_message } from "./list_single_message.mjs";
export function js_find_param_named(ast, name) {
  "The parameter of a function, addressed by the name it binds - which is how a selector says where.";
  "Nothing else could reach one. Every address the repo had asks about a line that does something or a line that binds a value with a let, and a parameter is neither: it is bound by standing where it stands, before the body begins. So a transform wanting to act on one had no way to be told which.";
  "A parameter written as a pattern, unpacking an object or holding a default, is answered by the whole of the pattern rather than by the name inside it, since the piece that binds the name has no separate standing to act on.";
  let params = js_flo_params_get(ast);
  function named_is(param) {
    let names = js_function_declaration_params_names_node(param);
    let includes = list_includes(names, name);
    return includes;
  }
  let matching = list_filter(params, named_is);
  let asked = {
    hint: "a selector names one thing, so this function was expected to take exactly one parameter by that name - would you like to check the spelling, or say which one was meant?",
    name,
  };
  let only = list_single_message(matching, asked);
  return only;
}
