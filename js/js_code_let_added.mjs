import { js_parse } from "./js_parse.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_let_add } from "./js_let_add.mjs";
export function js_code_let_added(code) {
  "This written-out code as it stands after every assignment to a name nothing has bound has been given the word let.";
  "The step works on a tree, which a corpus cannot write down. This takes the written-out code a corpus can hold, and hands back written-out code again, so a case can say exactly what it expects to be left.";
  let ast = js_parse(code);
  js_let_add(ast);
  let after = js_unparse(ast);
  return after;
}
