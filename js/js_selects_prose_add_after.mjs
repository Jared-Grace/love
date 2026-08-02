import { js_selects_prose_add_generic } from "./js_selects_prose_add_generic.mjs";
export function js_selects_prose_add_after(ast, selects, sentence) {
  "Lands the sentence on the line under the chosen statement";
  let index_delta = 1;
  js_selects_prose_add_generic(ast, selects, sentence, index_delta);
}
