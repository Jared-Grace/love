import { js_literal_single_find_generic } from "./js_literal_single_find_generic.mjs";
import { text_is } from "./text_is.mjs";
export function js_string_literal_single_find(ast) {
  "The one string a function actually uses as a value, which is how a selector says where.";
  let sort_name = "string";
  let only = js_literal_single_find_generic(ast, text_is, sort_name);
  return only;
}
