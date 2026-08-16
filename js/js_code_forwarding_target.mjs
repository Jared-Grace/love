import { js_parse } from "./js_parse.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { js_function_forwarding_target } from "./js_function_forwarding_target.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
export function js_code_forwarding_target(code) {
  "The name the first function written out in this code hands its arguments to, or nothing when that function does more than hand them over.";
  "The reading itself works on a piece of a tree, which a corpus cannot write down. This takes the written-out code a corpus can hold and asks the reading about the first function in it.";
  let ast = js_parse(code);
  let declarations = js_list_type(ast, "FunctionDeclaration");
  let first = list_first(declarations);
  let node = property_get(first, "node");
  let target = js_function_forwarding_target(node);
  return target;
}
