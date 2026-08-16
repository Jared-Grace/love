import { js_parse } from "./js_parse.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { js_function_parameter_call_sizes } from "./js_function_parameter_call_sizes.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
export function js_code_parameter_call_sizes(code, index) {
  "How many arguments the first function written out in this code hands to the function it was given at this place, once for every call it makes to it.";
  "The reading itself works on a piece of a tree, which a corpus cannot write down. This takes the written-out code a corpus can hold and asks the reading about the first function in it.";
  let ast = js_parse(code);
  let declarations = js_list_type(ast, "FunctionDeclaration");
  let first = list_first(declarations);
  let node = property_get(first, "node");
  let sizes = js_function_parameter_call_sizes(node, index);
  return sizes;
}
