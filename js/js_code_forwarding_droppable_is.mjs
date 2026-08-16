import { js_parse } from "./js_parse.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_function_forwarding_remove } from "./js_function_forwarding_remove.mjs";
import { equal_not } from "./equal_not.mjs";
export async function js_code_forwarding_droppable_is(code) {
  "Whether this written-out code holds a function that is only a second name for another one and would be dropped.";
  "The question is answered by doing the dropping on a tree of its own and throwing the tree away, so nothing is written anywhere. Both sides of the comparison are written out from a tree, so a difference is a difference in the code rather than in how it was spaced on the page.";
  let ast = js_parse(code);
  let before = js_unparse(ast);
  await js_function_forwarding_remove(ast);
  let after = js_unparse(ast);
  let droppable_is = equal_not(before, after);
  return droppable_is;
}
