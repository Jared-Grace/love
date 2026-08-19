import { list_first_property } from "./list_first_property.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { js_function_parameter_call_sizes } from "./js_function_parameter_call_sizes.mjs";
export function js_code_parameter_call_sizes(code, index) {
  "How many arguments the first function written out in this code hands to the function it was given at this place, once for every call it makes to it.";
  "The reading itself works on a piece of a tree, which a corpus cannot write down. This takes the written-out code a corpus can hold and asks the reading about the first function in it.";
  let ast = js_parse(code);
  let declarations = js_list_type(ast, "FunctionDeclaration");
  let node = list_first_property(declarations, "node");
  let sizes = js_function_parameter_call_sizes(node, index);
  return sizes;
}
