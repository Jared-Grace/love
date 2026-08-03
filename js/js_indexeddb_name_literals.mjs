import { arguments_assert } from "./arguments_assert.mjs";
import { js_indexeddb_name_nodes } from "./js_indexeddb_name_nodes.mjs";
import { js_key_literals_generic } from "./js_key_literals_generic.mjs";
export function js_indexeddb_name_literals(ast, doors) {
  "Every place this file writes the name of a browser database or one of its stores straight into the call instead of calling something that holds the name.";
  "A name like this reaches a disk in somebody's browser the first time anything is written under it, and no edit here can reach that disk afterwards. Written out at the site, it is a word anybody may reword while tidying, and everything already kept under the old one becomes unreachable - which is a person's saved work, not a stale link.";
  "All that is said here is which calls name a kept thing. The judging is shared with the words in a page address, which asks the identical question of a different walk.";
  arguments_assert(arguments, 2);
  let nodes = js_indexeddb_name_nodes(ast, doors);
  let sites = js_key_literals_generic(ast, nodes);
  return sites;
}
