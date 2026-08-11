import { js_statement_prose_template_is } from "./js_statement_prose_template_is.mjs";
import { js_statement_prose_sequence_is } from "./js_statement_prose_sequence_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_node_is } from "./js_statement_node_is.mjs";
import { js_block_statement_is } from "./js_block_statement_is.mjs";
import { js_statement_string_is } from "./js_statement_string_is.mjs";
import { js_function_marker_call_is } from "./js_function_marker_call_is.mjs";
import { not } from "./not.mjs";
export function js_statement_work_is(node) {
  arguments_assert(arguments, 1);
  ("Whether a node is a line of work - a statement that does something, rather than one that only holds other statements or speaks to a reader.");
  ("Five kinds are statements and are not work. A block is a container, so counting it counts the same run twice, once as the walls and once as what is inside them. A string on its own is how this repo writes a comment. A marker call is left for a reader in the same way. So is a paragraph a bracket and a comma turned into a pair, and so is one written with backticks so a name can stand in a gap in it. Those last two are comments wearing a shape no reading that looks for a lone string can see.");
  ("The three are already refused one at a time in three different places, each by a body reading a function at its top level only. Written here they can be asked of a node found at any depth, which is what a reading that walks the whole body needs.");
  let statement_is = js_statement_node_is(node);
  if (not(statement_is)) {
    return false;
  }
  let block_is = js_block_statement_is(node);
  if (block_is) {
    return false;
  }
  let prose_is = js_statement_string_is(node);
  if (prose_is) {
    return false;
  }
  let marker_is = js_function_marker_call_is(node);
  if (marker_is) {
    return false;
  }
  let pair_prose_is = js_statement_prose_sequence_is(node);
  if (pair_prose_is) {
    return false;
  }
  let gap_prose_is = js_statement_prose_template_is(node);
  if (gap_prose_is) {
    return false;
  }
  return true;
}
