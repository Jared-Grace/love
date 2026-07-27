import { js_selects_functionize_range } from "./js_selects_functionize_range.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_functionize } from "./js_functionize.mjs";
export async function js_selects_functionize(ast, selects, f_name_new) {
  arguments_assert(arguments, 3);
  ("Pulls everything from the first chosen statement through the last one out into");
  ("a function of its own. The two ends are ordinary selections, so any selector");
  ("can name them, and nothing has to be written into the code first to mark where");
  ("the span begins and ends.");
  let { body_from, index_from, index_to } = js_selects_functionize_range(
    selects,
    ast,
  );
  await js_functionize(ast, f_name_new, body_from, index_from, index_to);
}
