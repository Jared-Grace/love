import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_node_to_block_item } from "./js_node_to_block_item.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { object_replace } from "./object_replace.mjs";
export function js_statement_replace_code(ast, selects, code) {
  arguments_assert(arguments, 3);
  ("Swaps the whole statement a selection sits in for a written one. Putting a");
  ("line in and taking a line out already had verbs; changing one is the third of");
  ("the three things that can happen to a line, and the one that had none.");
  ("Whatever a selector hands back is resolved up to the statement holding it, so");
  ("an address naming a call inside a line still replaces the line.");
  let node = list_single(selects);
  let item = js_node_to_block_item(ast, node);
  let parsed = js_parse_statement(code);
  object_replace(item, parsed);
}
