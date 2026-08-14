import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifiers_referenced_nodes } from "./js_identifiers_referenced_nodes.mjs";
import { js_names_unbound_mentioned_referenced } from "./js_names_unbound_mentioned_referenced.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
export function js_names_unbound_mentioned(ast) {
  arguments_assert(arguments, 1);
  ("Every name mentioned under this tree that has at least one mention no scope around it binds - the names whose value has to come from outside the file, whether that is an import, a global, or nothing at all.");
  ("The plural sibling of asking, name by name, which mentions of one name read no binding. That one walks the whole tree once for every name it is asked about, and the caller with the most to ask is the sweep for names nothing supplies: measured 2026-08-11, seven or eight private names a file over eight thousand files came to sixty-four seconds, the largest single thing left in that gate. One walk answers about every name at once, because the walk already has the scopes around each mention in its hand and the name is only which question it is being asked.");
  ("A mention that merely names a property or a key is text rather than a reading, so it is left out the same way the single-name sibling leaves it out.");
  ("It says which names, not which mentions. A caller wanting the mentions of one particular binding still wants the sibling, because that question is about one binding rather than about a name.");
  ("Which mentions read a value is worked out here and the reading itself lives one name along, so that a caller already holding that answer may hand it over instead of paying for it twice.");
  let referenced_nodes = js_identifiers_referenced_nodes(ast);
  let referenced = list_unique_set(referenced_nodes);
  let unbound = js_names_unbound_mentioned_referenced(ast, referenced);
  return unbound;
}
