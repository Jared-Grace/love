import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_node_to_block_item } from "./js_node_to_block_item.mjs";
export function js_selects_block_item(ast, selects) {
  arguments_assert(arguments, 2);
  ("The whole line, inside its block, that a selector picked one node out of.");
  ("Wrapping a statement in a loop, unwrapping one, replacing one with fresh code,");
  ("expanding one - each is aimed at a node and then has to work on the line that");
  ("node stands in, because a line is what a block can be edited by. Insisting the");
  ("selector picked exactly one is part of the question, and the bare node it");
  ("picked is only ever passed through on the way to its line.");
  let node = list_single(selects);
  let item = js_node_to_block_item(ast, node);
  return item;
}
