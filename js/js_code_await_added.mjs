import { js_parse } from "./js_parse.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_await_add_inner } from "./js_await_add_inner.mjs";
export async function js_code_await_added(code, functions) {
  "This written-out code as it stands after every call to a function that waits has been given the word await, told which functions wait by the table handed in.";
  "The step works on a tree, and it asks a table which functions wait. Both are things a corpus cannot write down. This takes written-out code and a small table of its own, and hands back written-out code again, so a case can say exactly what it expects to be left.";
  let ast = js_parse(code);
  let visited = [];
  await js_await_add_inner(functions, ast, visited);
  let after = js_unparse(ast);
  return after;
}
