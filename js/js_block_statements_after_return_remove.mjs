import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_block_body_get } from "./js_block_body_get.mjs";
import { js_block_statements_after_return } from "./js_block_statements_after_return.mjs";
import { list_remove } from "./list_remove.mjs";
import { each } from "./each.mjs";
export function js_block_statements_after_return_remove(ast, selects) {
  arguments_assert(arguments, 2);
  ("Takes the unreachable lines back out of a chosen block.");
  ("Behaviour-preserving by construction rather than by inspection: what it removes");
  ("is exactly what could never have run, so no reading of what those lines say can");
  ("change the answer. That is what makes it worth a name - the same deletion done");
  ("by hand has to be argued for once per line.");
  ("It is deliberately NOT part of the auto pass, and the reason is that the same");
  ("shape means two opposite things. A body switched off at the top - a return");
  ("standing first, the whole of the work below it - is somebody's decision to");
  ("suspend a function, and a pass that ran everywhere would silently destroy the");
  ("work instead of the leftover. Whether this block is a leftover or a suspension");
  ("is a judgement, so it stays with whoever names the function.");
  let block = list_single(selects);
  let after = js_block_statements_after_return(block);
  let body = js_block_body_get(block);
  function remove(statement) {
    list_remove(body, statement);
  }
  each(after, remove);
}
