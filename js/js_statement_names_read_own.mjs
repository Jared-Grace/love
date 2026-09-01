import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_nodes_own } from "./js_statement_nodes_own.mjs";
import { js_identifiers_referenced_nodes } from "./js_identifiers_referenced_nodes.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_map_property_unique } from "./list_map_property_unique.mjs";
export function js_statement_names_read_own(statement) {
  arguments_assert(arguments, 1);
  ("The names a line reads the moment it is reached - what it needs to already have a value.");
  ("Two readings meet here and each drops what the other cannot. One drops every name written inside a function standing in the line, because those are read when that function is called and not now. The other drops every word that only names an entry or a property, because such a word is text and needs nothing bound to it.");
  ("The two are asked of the same nodes and joined by which node they are, not by which word - so a word written twice in one line, once as a name and once as the key of an entry, keeps the mention that is a name and loses the mention that is not.");
  let own = js_statement_nodes_own(statement, "Identifier");
  let referenced = js_identifiers_referenced_nodes(statement);
  let both = list_intersection(referenced, own);
  let names = list_map_property_unique(both, "name");
  return names;
}
