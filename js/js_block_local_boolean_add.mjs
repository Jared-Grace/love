import { js_block_local_add_generic } from "./js_block_local_add_generic.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_expression_boolean } from "./js_expression_boolean.mjs";
export function js_block_local_boolean_add(ast, selects, name, word) {
  "Binds a name to a starting yes or no, which is how a flag being decided over several steps begins - set one way, and turned the other by whichever step finds the reason.";
  "The word is read as code and checked to be nothing but true or false before it is written, rather than passed along as the text it arrived as. A seam hands every argument over as text, and the word false is a nonempty string, so a value taken on trust here would be written into the file as a name nothing binds or as a piece of writing that is always yes.";
  let expression = js_expression_boolean(word);
  let code = js_unparse(expression);
  js_block_local_add_generic(ast, selects, name, code);
}
