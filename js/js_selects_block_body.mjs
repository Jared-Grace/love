import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_block_body_get } from "./js_block_body_get.mjs";
export function js_selects_block_body(selects) {
  arguments_assert(arguments, 1);
  ("The lines standing inside the one block a selector picked out.");
  ("Adding a line to a body, adding a sentence of prose above one, handing a local");
  ("back at the end - each is addressed at a block and then works on the lines in");
  ("it. Insisting the selector picked exactly one is part of the question, because");
  ("a transform aimed at two blocks at once has no meaning; the block itself is");
  ("only ever passed through on the way to its lines.");
  let block = list_single(selects);
  let body = js_block_body_get(block);
  return body;
}
