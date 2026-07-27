import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_functionize_range } from "./js_selects_functionize_range.mjs";
import { js_functionize_local } from "./js_functionize_local.mjs";
export async function js_selects_functionize_local(ast, selects, f_name_new) {
  arguments_assert(arguments, 3);
  ("Pulls a span out into a function of its own and leaves it where it lands - in");
  ("the same file, beside the one it came out of. The twin next door goes on to");
  ("move it into a file of its own, which is what the repo wants and what a");
  ("sandbox cannot watch.");
  ("Splitting the two is what put the extracting verb under a gate at last. The");
  ("moving half writes into the repo's own folder wherever it is run from, so an");
  ("example of the whole thing wrote a real file into the source tree instead of");
  ("into its sandbox and had to be thrown away. This half touches one file and");
  ("nothing else, and it is the half where all the thinking is: what the new");
  ("function takes, what it hands back, what the line left behind says.");
  let r = js_selects_functionize_range(selects, ast);
  let index_to = property_get(r, "index_to");
  let index_from = property_get(r, "index_from");
  let body_from = property_get(r, "body_from");
  let indices = [index_from, index_to];
  await js_functionize_local(body_from, indices, f_name_new, ast);
}
