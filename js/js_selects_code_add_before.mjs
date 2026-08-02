import { js_selects_prose_add_generic } from "./js_selects_prose_add_generic.mjs";
export function js_selects_code_add_before(ast, selects, sentence) {
  "Lands the sentence on the line above the chosen statement taking its place in the block and pushing it down one";
  let index_delta = 0;
  js_selects_prose_add_generic(ast, selects, sentence, index_delta);
}
