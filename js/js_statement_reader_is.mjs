import { arguments_assert } from "./arguments_assert.mjs";
import { js_block_statement_is } from "./js_block_statement_is.mjs";
import { js_statement_node_is } from "./js_statement_node_is.mjs";
import { js_statement_work_is } from "./js_statement_work_is.mjs";
import { not } from "./not.mjs";
export function js_statement_reader_is(node) {
  arguments_assert(arguments, 1);
  ("Whether a node is a line written for whoever reads the code rather than for the machine - a paragraph of prose however it is spelled, or a mark left to point somewhere.");
  ("There is already a reading that says which lines are the work, and it names five kinds that are statements and are not work: a block, a lone string, a marker call, and prose written as a pair or with backticks. Four of those five speak to a reader; the odd one out is the block, which is only walls. So this is that reading with the walls put back, and it is written as its negation rather than as its own list of kinds, because a list written twice can come to disagree with itself and then a paragraph would count as work in one place and as prose in the other.");
  let block_is = js_block_statement_is(node);
  if (block_is) {
    return false;
  }
  let statement_is = js_statement_node_is(node);
  if (not(statement_is)) {
    return false;
  }
  let work_is = js_statement_work_is(node);
  let r = not(work_is);
  return r;
}
