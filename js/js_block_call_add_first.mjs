import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_block_body_get } from "./js_block_body_get.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_call_add_generic } from "./js_call_add_generic.mjs";
export async function js_block_call_add_first(ast, selects, f_name) {
  arguments_assert(arguments, 3);
  ("Adds a call at the front of a chosen block rather than the end, from the name of the function alone.");
  ("The twin that adds at the end is the right one for a step in a sequence of work. This one is for anything that has to be there whatever the block does afterwards - a mark a reader or a search is meant to find, a guard, a note. A block ending in a handing-back would swallow such a call entirely: appended after it, the line is written but never reached, and worse, it reads to anyone opening the file as though it runs.");
  let block = list_single(selects);
  function lambda_add(ast_of_call, statement) {
    let body = js_block_body_get(block);
    list_add_first(body, statement);
  }
  await js_call_add_generic(ast, f_name, lambda_add);
}
