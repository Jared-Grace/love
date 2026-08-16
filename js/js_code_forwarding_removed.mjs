import { js_parse } from "./js_parse.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_function_forwarding_remove } from "./js_function_forwarding_remove.mjs";
export async function js_code_forwarding_removed(code) {
  "This written-out code as it stands after every function that is only a second name for another one has been dropped.";
  "The dropping works on a tree, which a corpus cannot write down. This takes the written-out code a corpus can hold, and hands back written-out code again, so a case can say exactly what it expects to be left.";
  let ast = js_parse(code);
  await js_function_forwarding_remove(ast);
  let after = js_unparse(ast);
  return after;
}
